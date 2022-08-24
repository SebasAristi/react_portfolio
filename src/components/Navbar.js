import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navigation() {
  return (
    <Navbar bg="light" expand="lg" className='nav'>
      <Container>
        <Navbar.Brand href="/react_portfolio">Sebastian Aristizabal Portfolio</Navbar.Brand>
        <Navbar.Toggle  />
        <Navbar.Collapse  className="justify-content-end">
          <Nav >
            <Nav.Link href="/react_portfolio">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
            <Nav.Link href="https://drive.google.com/file/d/1QBXKd9j5_lwbLqKKAKp8Q380AttqP4dq/view?usp=sharing" target="_blank">Resume</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;