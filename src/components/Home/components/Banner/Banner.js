import React, { Component } from 'react';
import Style from './Banner.module.scss';
import banner from '../../../../assets/images/banner.png';
export default class Banner extends Component{
  
  render(){
    return(
      <div className={Style.banner}>
        <div className="container-fluid">
          <div className={ Style.card+" card border-0" } >
            <div className="card-body p-0">
              <h1 className={ Style.cardTitle+" card-title title" }> CRÉATION DE SITES WEB ET APPLICATION MOBILE SUR MESURE</h1>
              <div className={Style.underline}></div>
              <p className={ Style.cardText+" card-text paragraph" }>
                  Lorem ipsum dolor sit amet, consectutur
                  adipiscing elit, sed do eiusmod tempor
                  Ut enim ad Lorem ipsum dolor sit amet,  
              </p>
              <a href="#" className={ Style.linkBanner+" btn btn-primary" }>Découvrez-nous!</a>
            </div>
          </div>
        </div>
      </div>    
    )
  }
}