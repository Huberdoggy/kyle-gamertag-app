/* eslint-disable react/no-unescaped-entities */
export function Navbar({ onButtonClick, setFlag }) {
  return (
    <nav className="navbar">
      <img
        src={`${window.location.origin}/images/seriesx-logo.png`}
        alt="seriesx-logo"
      />
      {!setFlag && (
        <>
          <span>Click For Kyle's Recent Activity</span>
          {/* eslint-disable-next-line react/button-has-type */}
          <button className="navbar--btn" onClick={onButtonClick}>
            <img
              src={`${window.location.origin}/images/a_btn_ico.png`}
              alt=""
            />
          </button>
        </>
      )}
      <h3 id="card-heading">Huberdoggy's Gamercard</h3>
    </nav>
  );
}
