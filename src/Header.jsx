import React from 'react'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import { CiMenuFries } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary-1">
                <Container fluid>
                    <Navbar.Brand href="#">
                        <a className='logosize' href="">
                            co<span>villa</span>
                        </a>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mx-auto my-2 my-lg-0"

                            navbarScroll
                        >
                            <Nav.Link  className='text-light'>
                                <Link to='/' className='text-decoration-none text-white'>home</Link>
                            </Nav.Link>
                            <Nav.Link  className='text-light'>
                                <Link to='/about' className='text-decoration-none text-white'>about</Link>
                            </Nav.Link>
                            <Nav.Link  className='text-light'>
                                <Link to='/journal' className='text-decoration-none text-white'>journal</Link>
                            </Nav.Link>
                            <Nav.Link  className='text-light'>
                                <Link to='/support' className='text-decoration-none text-white'>support</Link>
                            </Nav.Link>
                           

                        </Nav>
                        <Form>

                            <Button variant="outline-success">DESTINATION</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header