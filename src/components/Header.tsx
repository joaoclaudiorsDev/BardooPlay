import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="nav-bar">
      <nav className="nav">
        <NavLink to="/search">Search </NavLink>
      </nav>
    </header>
  );
}
export default Header;
