import { Container, Nav, Navbar } from "react-bootstrap";
import About from "./About";
import { useState } from "react";
import Suggest from "./Suggest";
import Contact from "./Contact";

const CustomNavbar = ({ handleSuggest }) => {
  const [showAbout, setShowAbout] = useState(false);
  const [showSuggest, setShowSuggest] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const handleCloseAbout = () => setShowAbout(false);
  const handleShowAbout = () => setShowAbout(true);
  const handleShowSuggest = () => setShowSuggest(true);
  const handleCloseSuggest = () => setShowSuggest(false);
  const handleShowContact = () => setShowContact(true);
  const handleCloseContact = () => setShowContact(false);

  return (
    <div>
      <Suggest
        handleSuggest={handleSuggest}
        show={showSuggest}
        onHide={handleCloseSuggest}
      />
      <About show={showAbout} onHide={handleCloseAbout} />
      <Contact show={showContact} onHide={handleCloseContact} />
      <Navbar className="navbar" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#">Right Choice</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {/* <Link to={"/"} className="nav-link">
            Main
          </Link> */}
          {/* <Link to={"/alt"} className="nav-link">
            Alternatives
          </Link> */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav.Link onClick={handleShowSuggest} style={{ color: "black" }}>
              Suggestions
            </Nav.Link>
            <Nav.Link onClick={handleShowAbout} style={{ color: "black" }}>
              About
            </Nav.Link>
            <Nav.Link onClick={handleShowContact} style={{ color: "black" }}>
              Contact
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default CustomNavbar;
