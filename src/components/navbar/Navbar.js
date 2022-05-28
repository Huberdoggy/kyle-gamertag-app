/* eslint-disable react/no-unescaped-entities */
export function Navbar() {
  return (
    <nav className="navbar">
      <img
        src={`${window.location.origin}/images/seriesx-logo.png`}
        alt="seriesx-logo"
      />
      <h3 id="card-heading">Huberdoggy's Gamercard</h3>
    </nav>
  );
}
