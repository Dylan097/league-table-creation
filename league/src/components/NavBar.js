import React from 'react'
import styles from '../styles/NavBar.module.css'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

const NavBar = () => {
  return (
    <Navbar expand="md" bg="dark" data-bs-theme="dark" sticky='top'>
      <Container className={styles.NavBar}>
        <img src={logo} alt='logo' />
        <NavLink to="/">
          <Navbar.Brand className={styles.Brand}>Mafia Mystery Leagues</Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls='expand-on-md' className={`ml-auto ${styles.NavBarCollapseIcon}`} />
        <Navbar.Collapse id='expand-on-md'>
          <Nav className="ml-auto">
            <NavLink className={({ isActive }) =>
              isActive ? styles.Active : styles.NavLink} to="/" end>Home</NavLink>
            <NavLink className={({ isActive }) =>
              isActive ? styles.Active : styles.NavLink} to="/leagues" end>Leagues</NavLink>
            <NavLink className={({ isActive }) =>
              isActive ? styles.Active : styles.NavLink} to="/my_leagues">My Leagues</NavLink>
            <NavLink className={({ isActive }) =>
              isActive ? styles.Active : styles.NavLink} to="/leagues/create">Create League</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar