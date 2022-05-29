/* eslint-disable no-unused-vars */
import './App.css';
import { useState } from 'react';
import { Navbar } from './components/navbar/Navbar';
import { GamertagSection } from './components/gamertag-section/GamertagSection';
import gamertagData from './components/gamertag-section/GamertagData';
import {
  runFetch,
  recentActivityEndpoint,
} from './components/gamertag-section/GamertagFetch';
import { RecentFeed } from './components/recent-feed/RecentFeed';

function App() {
  const [activityArray, SetActivityArray] = useState([]);
  const [click, setClick] = useState('');

  const onButtonClick = () => {
    setClick(getXboxRecentFeed);
  };

  function addObjToArray(dataObj) {
    SetActivityArray((prevArray) => {
      return [...prevArray, dataObj];
    });
  }

  async function getXboxRecentFeed() {
    let cheevoObj;
    const recentActivity = await runFetch(recentActivityEndpoint);
    for (let i = 0; i < 4; i++) {
      cheevoObj = {
        achievementDescription: `${recentActivity[i].achievementDescription}`,
        description: `${recentActivity[i].description}`,
        achievementIcon: `${recentActivity[i].achievementIcon}`,
      };
      addObjToArray(cheevoObj);
    }
  }

  const recentFeedItems = activityArray.map((item, index) => {
    return (
      <RecentFeed
        /* eslint-disable-next-line react/no-array-index-key */
        key={index}
        achievementDescription={item.achievementDescription}
        description={
          item.description.charAt(0).toUpperCase() +
          item.description.substring(1)
        }
        achievementIcon={item.achievementIcon}
      />
    );
  });

  const bio_items = gamertagData.map((item) => {
    return (
      <GamertagSection
        key={item.id}
        name={item.name}
        motto={item.motto}
        location={item.location}
        gender={item.gender}
      />
    );
  });

  return (
    <div className="flex-container">
      <Navbar onButtonClick={onButtonClick} />
      {bio_items}
      <div>
        {/* eslint-disable-next-line react/button-has-type */}
        <section className="recent-activity">{recentFeedItems}</section>
      </div>
    </div>
  );
}

export default App;
