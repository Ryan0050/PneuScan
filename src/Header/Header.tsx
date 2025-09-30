import { Link } from 'react-router-dom';
import logo from '../asset/logo.png';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logoContainer">
        <img src={logo} className="logo" alt="Logo" />
      </div>
      <div className="pageButtonContainer">
        <Link to="/" className="homeButton">
          Home
        </Link>
        <Link to="/about" className="aboutButton">
          About
        </Link>
      </div>
    </header>
  );
};

export default Header;
