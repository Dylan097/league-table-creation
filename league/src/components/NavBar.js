import React from 'react'
import styles from '../styles/NavBar.module.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

const NavBar = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container className={styles.NavBar}>
          <img src={logo} />
          <Navbar.Brand href="#" className={styles.Brand}>Mafia Mystery Leagues</Navbar.Brand>
          <Nav className="ml-auto">
            <NavLink className={styles.NavLink} to="#">Home</NavLink>
            <NavLink className={styles.NavLink} to="#">Leagues</NavLink>
            <NavLink className={styles.NavLink} to="#">My Leagues</NavLink>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default NavBar