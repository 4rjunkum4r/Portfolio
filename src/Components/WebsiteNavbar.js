import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function WebsiteNavbar() {
  return (
    
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Arjun Kumar</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default WebsiteNavbar;