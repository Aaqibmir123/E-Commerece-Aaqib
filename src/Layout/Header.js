import HeaderCard from "../Cart/HeaderCard";
import { Navbar, Container, Nav } from "react-bootstrap";
import {NavLink} from "react-router-dom";

import "../App.css";
const Header = (props) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="header">
        <Navbar.Brand>
          <NavLink to="/" activeClassName="active">Home</NavLink>
        </Navbar.Brand>
        <Nav>
          <Nav.Link>
            <NavLink to="/Story" activeClassName="active">Story</NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink to="/About" activeClassName="active">About</NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink to="/Api" activeClassName="active">Movie</NavLink>
          </Nav.Link>
          <Nav.Link>
            <NavLink to="/Contactus" activeClassName="active">Contact Us</NavLink>
          </Nav.Link>
        </Nav>
        <HeaderCard Toggle={props.Toggle} />
      </Container>
    </Navbar>
  );
};

export default Header;
