import { Link, Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Public</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/preferences">Preferences</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
