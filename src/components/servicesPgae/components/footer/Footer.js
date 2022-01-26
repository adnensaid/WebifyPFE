import React, { Component } from 'react';
import facebook from '../../../../assets/images/facebook.png';
import instagram from '../../../../assets/images/instagram.png';
import linkedin from '../../../../assets/images/linkedin.png';
import Style from './Footer.module.scss';
export default class footer extends Component{
  render(){
    return(
      <div className={ Style.footer }>
        <div className="container-xl border-top">
          <div className={ Style.footerContent }>
            <div className={ Style.socials }>
              <div className={ Style.socialsElem }>
                <img src={ facebook } alt="fcb" />
              </div>
              <div className={ Style.socialsElem }>
                <img src={ linkedin } alt="fcb" />
              </div>
              <div className={ Style.socialsElem }>
                <img src={ instagram } alt="fcb" />
              </div>
            </div>
            <p>
              © 2021 WEBIFY TECHNOLOGY, Tous droits réservés.
            </p>
          </div>    
        </div>
      </div>
    )
  }
}