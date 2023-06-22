import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="nav-bar" data-testid="header-component">
      <nav className="nav">
        <NavLink data-testid="link-to-search" to="/search">Search </NavLink>
        <NavLink data-testid="link-to-favorites" to="/favorites">Favorites </NavLink>
        <NavLink data-testid="link-to-profile" to="/profile">Profile </NavLink>
      </nav>
    </header>
  );
}
export default Header;
