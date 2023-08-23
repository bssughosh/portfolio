import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import DarkMode from "../DarkMode/DarkMode";
import "./Header.scss";

export const Header = ({ setCurrentTheme, currentTheme }) => {
  const activeStyle =
    currentTheme === "dark"
      ? {
          background: "#fff",
          borderRadius: "5px",
          textDecoration: "none",
          color: "#000",
        }
      : {
          background: "#000",
          borderRadius: "5px",
          textDecoration: "none",
          color: "#fff",
        };
  const inactiveStyle =
    currentTheme === "dark"
      ? {
          textDecoration: "none",
          color: "#fff",
        }
      : {
          textDecoration: "none",
          color: "#000",
        };
  const navbarBrandClassName =
    currentTheme === "dark" ? "navbarBrandDark" : "navbarBrandLight";
  const navbarOuterClassName =
    currentTheme === "dark" ? "navBarOuterDark" : "navBarOuterLight";

  return (
    <div className={navbarOuterClassName}>
      <Navbar
        collapseOnSelect
        expand="md"
        className="navBar"
        variant={currentTheme}
      >
        <Navbar.Brand href="/" className={navbarBrandClassName}>
          <h3 className="typewriter">Sughosh Sudhanvan</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" className="" />
        <Navbar.Collapse id="navbarScroll" className={`navbarMainPart`}>
          <Nav>
            <Nav.Link
              as={NavLink}
              to="/"
              exact
              style={(isActive) => (isActive ? activeStyle : inactiveStyle)}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/projects"
              style={(isActive) => (isActive ? activeStyle : inactiveStyle)}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/publications"
              style={(isActive) => (isActive ? activeStyle : inactiveStyle)}
            >
              Publications
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/contact"
              style={(isActive) => (isActive ? activeStyle : inactiveStyle)}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <DarkMode setCurrentTheme={setCurrentTheme} />
      </Navbar>
    </div>
  );
};
