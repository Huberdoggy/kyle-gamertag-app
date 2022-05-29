export function RecentFeed(props) {
  return (
    <p>
      {props.achievementDescription}
      <br />
      {props.description}
      <br />
      <img
        className="recent-activity--img"
        src={props.achievementIcon}
        alt="cheevo-img"
      />
    </p>
  );
}
