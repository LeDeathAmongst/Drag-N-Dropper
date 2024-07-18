import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <Link to="/" className="logo">
          <img src="/media/disfuse-clear.png" alt="" />
        </Link>
        <ul className="pages">
          <li className="underline-effect">
            <Link to="/">Home</Link>
          </li>
          <li className="underline-effect">
            <Link to="/projects">Dashboard</Link>
          </li>
          <li className="underline-effect">
            <Link to="/explore">Explore</Link>
          </li>
          <li className="underline-effect">
            <Link to="/staff">Staff</Link>
          </li>
        </ul>
        <ul className="buttons">
          <li id="discord">
            <Link to="https://dsc.gg/disfuse">
              <i class="fa-brands fa-discord"></i> Discord
            </Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}
