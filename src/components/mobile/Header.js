
export default function Header(props) {
  return (
    <div className="header-container">
      {props.navOpen === false ? (
      <div className="side-menu-button" onClick={props.handleNav}>
        <h1>☰</h1>
      </div>
      ) : (
        <div className="side-menu-button" onClick={props.handleNav}>
        <h1>X</h1>
      </div>
      )}
    </div>
  );
}
