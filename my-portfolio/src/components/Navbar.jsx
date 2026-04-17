import { Link, useLocation, useNavigate } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === '/';

  const scrollToSection = (sectionId) => {
    if (!isHome) {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="navbar">
      <div className="container nav-content">
        <Link to="/" className="nav-logo">
          Joel Burlingame
        </Link>

        <nav className="nav-links">
          {isHome ? (
            <>
              <button
                type="button"
                className="nav-button"
                onClick={() => scrollToSection('about')}
              >
                About
              </button>
              <button
                type="button"
                className="nav-button"
                onClick={() => scrollToSection('projects')}
              >
                Projects
              </button>
              <button
                type="button"
                className="nav-button"
                onClick={() => scrollToSection('contact')}
              >
                Contact
              </button>
              <Link to="/blog">Blog</Link>
            </>
          ) : (
            <>
              <Link to="/">Home</Link>
              <Link to="/blog">Blog</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;