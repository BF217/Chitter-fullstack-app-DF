import logo from "../assets/OutlineLogo.png";
import { useAuth } from "../contexts/AuthContext";
import { logout } from "../services/authService";

const Navbar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav className="navbar navbar-expand-lg fixed-top home-nav">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="/">
          <img
            src={logo}
            alt="Chitter Logo"
            width="30"
            height="30"
            className="d-inline-block align-text-top"
          />
          Chitter
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {!isLoggedIn && (
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link text-white" href="/signup">
                  Sign Up
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/login">
                  Log In
                </a>
              </li>
            </ul>
          </div>
        )}
        {isLoggedIn && (
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link text-white" href="/" onClick={logout}>
                  Log out
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
