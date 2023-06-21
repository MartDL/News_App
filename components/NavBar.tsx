import Link from "next/link";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";

const NavBar = () => {
    return (
        <Navbar bg='dark' variant='dark' sticky='top' expand='sm' collapseOnSelect>
            <Container>
                <Navbar.Toggle aria-controlls='main-navbar'/>
                <Navbar.Collapse id='main-navbar' />
                <Nav>
                    <Nav.Link as={Link} href='/'>Breaking</Nav.Link>
                    <Nav.Link as={Link} href='/search'>Search</Nav.Link>
                    <NavDropdown title='Categories' id='categories'>
                        <NavDropdown.Item as={Link} href='/categories/sports'>Sports</NavDropdown.Item>
                        <NavDropdown.Item as={Link} href='/categories/entertainment'>Entertainment</NavDropdown.Item>
                        <NavDropdown.Item as={Link} href='/categories/business'>Business</NavDropdown.Item>
                        <NavDropdown.Item as={Link} href='/categories/food'>Food</NavDropdown.Item>
                        <NavDropdown.Item as={Link} href='/categories/world'>World</NavDropdown.Item>
                        <NavDropdown.Item as={Link} href='/categories/politics'>Politics</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Container>
        </Navbar>
      );
}
 
export default NavBar;