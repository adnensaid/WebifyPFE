import React, { Component } from 'react';
import logo from '../../assets/images/logo.png';
import Style from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
export default class Header extends Component{

  render(){
    return(
      <Navbar 
      bg={ this.props.scrollTop === 0 && this.props.location.pathname === "/home" ? 
      "transparent" : "light" } 
      expand="lg" 
      fixed="top" 
      className={ Style.header } >
        <div className="container-fluid">
          <Navbar.Brand href="#home">
            <img src={ logo } className={ Style.logo } alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav className={ Style.navbarMenu+" ms-auto" }>
              <NavLink to="/home" className={ this.props.scrollTop === 0 && this.props.location.pathname === "/home" ? Style.navlink+" text-white" : Style.navlink+" text-dark" } activeClassName="active">ACCUEIL</NavLink>
              <NavLink to="/services"  className={ this.props.scrollTop === 0 && this.props.location.pathname === "/home" ? Style.navlink+" text-white" : Style.navlink+" text-dark" } activeClassName="active">SERVICES</NavLink>
              <NavLink to="/portfolio" className={ this.props.scrollTop === 0 && this.props.location.pathname === "/home" ? Style.navlink+" text-white" : Style.navlink+" text-dark" } activeClassName="active" >PORTFOLIO</NavLink>
              <NavLink to="/temoignages" className={ this.props.scrollTop === 0 && this.props.location.pathname === "/home" ? Style.navlink+" text-white" : Style.navlink+" text-dark" } activeClassName="active" >TÉMOIGNAGES</NavLink>
              <NavLink to="/contact" className={ this.props.scrollTop === 0 && this.props.location.pathname === "/home" ? Style.navlink+" text-white" : Style.navlink+" text-dark" } activeClassName="active">CONTACT</NavLink>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    )
  }
}