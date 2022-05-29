export function GamertagSection(props) {
  // const { name, motto, location, gender } = props;
  return (
    <section className="gt-section">
      <div className="bio">
        <h1>
          <img
            id="gt-icon"
            src={`${window.location.origin}/images/gt-icon.png`}
            height="75px"
            width="75px"
            alt="gears-icon"
          />
          XXtheBR
        </h1>
        <h3>
          Name: <span>{props.name}</span>
        </h3>
        <br />
        <h3>
          Bio: <span>{props.motto}</span>
        </h3>
        <br />
        <h3>
          Location: <span>{props.location}</span>
        </h3>
        <br />
        <h3>
          Gender: <span>{props.gender}</span>
        </h3>
      </div>
      <iframe
        id="boot-animation"
        title="boot-animation"
        src="https://www.youtube.com/embed/NrGz84kWMOU?autoplay=1&mute=1&loop=1&playlist=NrGz84kWMOU"
      />
      <img
        src={`${window.location.origin}/images/avatar-body.png`}
        alt="my-avatar"
      />
    </section>
  );
}
