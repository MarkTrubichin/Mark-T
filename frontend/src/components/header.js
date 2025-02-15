import { useNavigate } from "react-router-dom";
import "../styles/header.css";

function Header() {
    const navigate = useNavigate();

    const handleNavigation = (id) => {
        if (window.location.pathname !== "/") {
            navigate("/");
            setTimeout(() => scrollToSection(id), 300);
        } else {
            scrollToSection(id);
        }
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <header>
            <span>
                <a href="/">MARK-T</a>
            </span>
            <ul>
                <li onClick={() => handleNavigation("home")}>Home</li>
                <li onClick={() => handleNavigation("projects")}>Projects</li>
                <li onClick={() => handleNavigation("skills")}>Skills</li>
                <li onClick={() => handleNavigation("contact")}>Contact</li>
            </ul>
        </header>
    );
}

export default Header;
