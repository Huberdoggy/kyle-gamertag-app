/* eslint-disable react/no-unescaped-entities */
export function Navbar({ onButtonClick }) {
  return (
    <nav className="navbar">
      <img
        src={`${window.location.origin}/images/seriesx-logo.png`}
        alt="seriesx-logo"
      />
      {/* eslint-disable-next-line react/button-has-type */}
      <button onClick={onButtonClick}>See Kyle's Recent Activity</button>
      <h3 id="card-heading">Huberdoggy's Gamercard</h3>
    </nav>
  );
}
