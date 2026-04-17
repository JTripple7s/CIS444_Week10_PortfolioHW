import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="navbar">
      <div className="container nav-content">
        <Link to="/" className="nav-logo">
          YourName.dev
        </Link>

        <nav className="nav-links">
          {isHome ? (
            <>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </>
          ) : (
            <Link to="/">Home</Link>
          )}
          <Link to="/blog">Blog</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;