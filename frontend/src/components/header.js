import "../styles/header.css";

function Header() {
    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    };

  return (
    <header>
      <span>
        <a href="/">MARK-T</a>
      </span>
      <ul>
        <li onClick={() => scrollToSection("home")}>Home</li>
        <li onClick={() => scrollToSection("projects")}>Projects</li>
        <li onClick={() => scrollToSection("skills")}>Skills</li>
        <li onClick={() => scrollToSection("contact")}>Contact</li>
      </ul>
    </header>
  );
}

export default Header;
