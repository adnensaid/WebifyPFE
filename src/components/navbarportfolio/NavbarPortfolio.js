import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Style from './navbarportfolio.module.scss';
export default class NavbarPortfolio extends Component{
  constructor(props){
    super(props);
    this.state={
      
    }
  }
  render(){
    return(
/*       <ul className="nav mb-3">
        <li className="nav-item">
          <button className="nav-link active" type="button">TOUS</button>
        </li>
        <li className="nav-item">
          <button className="nav-link" type="button">DESIGN WEB</button>
        </li>
        <li className="nav-item">
          <button className="nav-link" type="button">LOGOS</button>
        </li>
        <li className="nav-item">
          <button className="nav-link" type="button">GRAPHIQUES</button>
        </li>
        <li className="nav-item">
          <button className="nav-link" type="button">APPLICATIONS MOBILES</button>
        </li>
      </ul>  */
      <Navbar expand="lg" bg="light" className={ Style.navbar}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="mx-2" />
          <Navbar.Collapse>
            <Nav className=" flex-fill d-flex justify-content-between navbar-nav">
              <Nav.Link className={Style.navItem} href="#design">TOUS</Nav.Link>
              <Nav.Link  className={Style.navItem} href="#design1">DESIGN WEB</Nav.Link>
              <Nav.Link  className={Style.navItem} href="#TOUS">LOGOS</Nav.Link>
              <Nav.Link  className={Style.navItem} href="#Graph">GRAPHIQUES</Nav.Link>
              <Nav.Link  className={Style.navItem} href="#App">APPLICATIONS MOBILES</Nav.Link>
            </Nav>    
          </Navbar.Collapse>    
      </Navbar>    
    )
  }
}