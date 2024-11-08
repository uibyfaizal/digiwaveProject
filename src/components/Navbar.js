import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/img/logo-digiwave.png';

const Navbarr = () => {

    return <div>
        <Navbar expand="lg" className="navbar py-3">
            <Container>
                <Navbar.Brand href="#home"><img src={Logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link href="#home" className='nav-link mx-3'>Home</Nav.Link>
                        <Nav.Link href="#link" className='nav-link mx-3'>Our Services</Nav.Link>
                        <Nav.Link href="#link" className='nav-link mx-3'>Featured</Nav.Link>
                        <Nav.Link href="#link" className='nav-link mx-3'>Portfolio</Nav.Link>
                        <Nav.Link href="#link" className='nav-link mx-3'>Testimonial</Nav.Link>
                    </Nav>
                    <div>
                        <button className='btn btn-primary'>Login</button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>


}

export default Navbarr;