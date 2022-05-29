export function RecentFeed(props) {
  return (
    <p>
      {props.description}
      <br />
      {props.achievementDescription}
      <br />
      <img
        className="recent-activity--img"
        src={props.achievementIcon}
        alt="cheevo-img"
      />
    </p>
  );
}
