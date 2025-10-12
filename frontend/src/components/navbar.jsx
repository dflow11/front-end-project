import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "../css/NavBar.css"

function NavBar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [visible, setVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const isVisible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

            setVisible(isVisible);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    const handleHomeClick = (e) => {
        e.preventDefault();
        if (location.pathname === '/') {
            // If we're already on home page, reload the popular movies by forcing a remount
            navigate('/', { replace: true, state: { reload: Date.now() } });
        } else {
            // If we're on a different page, just navigate to home
            navigate('/');
        }
    };

    return (
        <nav className={`navbar ${visible ? 'navbar-visible' : 'navbar-hidden'}`}>
            <div className="navbar-brand">
                <Link to="/" onClick={handleHomeClick}>Movie App</Link>
            </div>
            <div className="navbar-links">
                <Link to="/" className="nav-link" onClick={handleHomeClick}>Home</Link>
                <Link to="/favorites" className="nav-link">Favorites</Link>
            </div>
        </nav>
    );
}

export default NavBar