import PageLinks from "./PageLinks";

const Header = () => {
  return (
    <header className="header" data-header>
      <div className="container">
        <a href="#" className="logo">
          <ion-icon name="business-outline"></ion-icon> Realvine
        </a>

        <nav className="navbar container" data-navbar>
          <PageLinks />
        </nav>

        <a href="#" className="btn btn-secondary">
          Signup
        </a>

        <button
          className="nav-toggle-btn"
          aria-label="Toggle menu"
          data-nav-toggler
        >
          <ion-icon
            name="menu-outline"
            aria-hidden="true"
            className="menu-icon"
          ></ion-icon>
          <ion-icon
            name="close-outline"
            aria-hidden="true"
            className="close-icon"
          ></ion-icon>
        </button>
      </div>
    </header>
  );
};
export default Header;
