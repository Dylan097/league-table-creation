import React from 'react'
import styles from '../styles/NavBar.module.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

const NavBar = () => {
  return (
    <Navbar expand="md" bg="dark" data-bs-theme="dark">
      <Container className={styles.NavBar}>
        <img src={logo} />
        <Navbar.Brand href="#" className={styles.Brand}>Mafia Mystery Leagues</Navbar.Brand>
        <Navbar.Toggle aria-controls='expand-on-md' className={`ml-auto ${styles.NavBarCollapseIcon}`} />
        <Navbar.Collapse id='expand-on-md'>
          <Nav className="ml-auto">
            <NavLink className={styles.NavLink} to="#">Home</NavLink>
            <NavLink className={styles.NavLink} to="#">Leagues</NavLink>
            <NavLink className={styles.NavLink} to="#">My Leagues</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar