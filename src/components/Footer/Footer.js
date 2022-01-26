import React, { Component } from 'react';
import Style from "./Footer.module.scss";
export default class Footer extends Component{
  render(){
    return(
      <footer className={ Style.footer }>
        <div className="container-xl">
          <div className={ Style.footerContent }>
          <ul>
            <li><span>ACCEUIL</span></li>
            <li><span>SERVICES</span></li>
            <li><span>PORTFOLIO</span></li>
            <li><span>TÉMOIGNAGES</span></li>
            <li><span>CONTACT</span></li>
          </ul>
          <p>© TOUS DROIT RÉSERVÉS</p>      
          </div>
        </div>
      </footer>
    )
  }
}