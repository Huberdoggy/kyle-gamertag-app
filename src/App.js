/* eslint-disable no-unused-vars */
import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { GamertagSection } from './components/gamertag-section/GamertagSection';
import gamertagData from './components/gamertag-section/GamertagData';
import { getAPIData } from './components/gamertag-section/GamertagFetch';

function App() {
  const bio_items = gamertagData.map((item) => {
    return (
      <GamertagSection
        key={item.id}
        name={item.name}
        bio={item.bio}
        location={item.location}
        gender={item.gender}
        online={item.online}
      />
    );
  });

  return (
    <div className="container">
      <Navbar />
      {bio_items}
      <div className="container">
        <h1>Recent Games</h1>
      </div>
    </div>
  );
}

export default App;
