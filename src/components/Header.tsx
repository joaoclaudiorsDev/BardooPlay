import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

function Header() {
  return (
    <header className="nav-bar">
      <nav className="nav">
        <NavLink to="/search">Search </NavLink>
        {/* <NavLink to="/album/:id">Album</NavLink> */}
      </nav>
    </header>
  );
}
export default Header;
