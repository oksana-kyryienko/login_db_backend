import './Header.css';
import { Link } from 'react-router-dom';

export const Header = ({ showButtons = true }) => {
  return (
    <div className="Header">
      {showButtons && (
        <div className="buttons">
          <Link to="/login" className="button-header button-header--bg">
            Log In
          </Link>
          <Link to="/signup" className="button-header button-header--br">
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
};
