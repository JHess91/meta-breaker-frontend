import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Footer from './Footer'


const NavBar = () => {
  return (
    <Navbar expand="lg" sticky="top" bg="black" variant="dark" className="nav" >
      <Container fluid>
        <Navbar.Brand href="/">Meta Breaker</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '500px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/legends">Legends</Nav.Link>
            <Nav.Link href="/about-me">About me</Nav.Link>
          </Nav>
          <Dropdown variant="danger" id="dropdown-basic">
            {['down'].map((direction) => (
              <DropdownButton
                className="dropdown-button"
                key={direction}
                id={`dropdown-button-drop-${direction}`}
                drop={direction}
                variant="danger"
                title={'Download'}
              >
                <Dropdown.Item href="https://store.steampowered.com/app/1172470/Apex_Legends/?utm_medium=organic&utm_source=franchise_web&utm_content=navlink">
                  Steam
                </Dropdown.Item>
                <Dropdown.Item href="https://store.playstation.com/en-us/product/UP0006-PPSA04873_00-APEXLEGENDRSPWN1/">
                  PS5
                </Dropdown.Item>
                <Dropdown.Item href="https://www.xbox.com/en-us/games/store/apex-legends/bv9ml45j2q5v?rtc=1">
                  Xbox
                </Dropdown.Item>
                <Dropdown.Item href="https://www.nintendo.com/store/products/apex-legends-switch/">
                  Switch
                </Dropdown.Item>
              </DropdownButton>
            ))}
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
