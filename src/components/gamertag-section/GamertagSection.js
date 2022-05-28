export function GamertagSection(props) {
  // const { name, bio, location, gender } = props;
  let online_status = false;
  if (props.online) {
    online_status = true;
  }
  return (
    <section className="gt-section">
      <p id="bio">
        <h1>
          {/* eslint-disable-next-line jsx-a11y/alt-text */}
          <img
            id="gt-icon"
            src={`${window.location.origin}/images/gt-icon.png`}
            height="75px"
            width="75px"
          />
          XXtheBR
        </h1>
        <h3>
          Name: <span>{props.name}</span>
        </h3>
        <br />
        <h3>
          Bio: <span>{props.bio}</span>
        </h3>
        <br />
        <h3>
          Location: <span>{props.location}</span>
        </h3>
        <br />
        <h3>
          Gender: <span>{props.gender}</span>
        </h3>
        <br />
        {!online_status && <h3 id="offline">Offline</h3>}
      </p>
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
