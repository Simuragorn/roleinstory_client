import { Link, Outlet } from "react-router-dom";
import "./Layout.css";

const Layout: React.FC = () => {
  return (
    <div>
      <nav>
        <ul className="navigation-bar">
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/preferences">Preferences</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
