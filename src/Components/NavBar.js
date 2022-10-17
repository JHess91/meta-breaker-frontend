import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';


const NavBar = () => {


  return (
    <Navbar sticky="top" bg="black" variant="dark" className='nav'>
    <Container sm={12} md={6} fluid>
      <Navbar.Brand href="/">MB</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/legends">Legends</Nav.Link>
        <Nav.Link href="/about-me">About Me</Nav.Link>
      </Nav>
      <Dropdown>
      <Dropdown.Toggle variant="danger" id="dropdown-basic">
        Download For Free
      </Dropdown.Toggle>

      <Dropdown.Menu >
        <Dropdown.Item href="https://store.steampowered.com/app/1172470/Apex_Legends/?utm_medium=organic&utm_source=franchise_web&utm_content=navlink">Steam</Dropdown.Item>
        <Dropdown.Item href="https://store.playstation.com/en-us/product/UP0006-PPSA04873_00-APEXLEGENDRSPWN1/">PlayStation</Dropdown.Item>
        <Dropdown.Item href="https://www.xbox.com/en-us/games/store/apex-legends/bv9ml45j2q5v?rtc=1">Xbox</Dropdown.Item>
        <Dropdown.Item href="https://www.nintendo.com/store/products/apex-legends-switch/">Nintendo Switch</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </Container>
  </Navbar>
      );
}

export default NavBar