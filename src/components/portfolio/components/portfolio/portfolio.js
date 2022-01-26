import React, { Component } from 'react';
import Style from './portfolio.module.scss';
import mockups from '../../../../assets/images/mockups.png';
import appvision from '../../../../assets/images/appvision.png';
import NavbarPortfolio from '../../../navbarportfolio/NavbarPortfolio';
export default class Portfolio extends Component{
  constructor(props){
    super(props);
    this.state = { 
      tous:[],
      web:[],
     }
  }
  render(){
    return(
      <section className={ Style.portfolio }>
        <div className="container">
          <p className="titre text-start mb-8">NOTRE PORTFOLIO</p>
          <NavbarPortfolio />
          <div className="my-8">
            <div className="row mb-8">
              <div className="col-6">
                <p className="titre-secondary">FOTOWORK</p>
                <p className="paragraphe paragraphe-primary pt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ncididunt ut labore <br />
                et dolore magna aliqua. Ut enim ad Lorem i !    
                </p>
              </div>
              <div className="col-6">
                <img src={mockups} className="rounded-6" alt="mockups" />
              </div>
            </div>
            <div className="row mb-8">
              <div className="col-6">
                <img src={appvision} className="rounded-0" alt="mockups" />
              </div>
              <div className="col-6">
                <div className="ps-10">
                  <p className="titre-secondary ">APPVISION</p>
                  <p className="paragraphe paragraphe-primary pt-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ncididunt ut labore <br />
                  et dolore magna aliqua. Ut enim ad Lorem i !    
                  </p>
                </div>
              </div>
            </div>
            <div className="row mb-8">
              <div className="col-6">
                <p className="titre-secondary">MS ARCHITECTURE</p>
                <p className="paragraphe paragraphe-primary pt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ncididunt ut labore <br />
                et dolore magna aliqua. Ut enim ad Lorem i !    
                </p>
              </div>
              <div className="col-6 border rounded-6">
              </div>
            </div>    
          </div>
        </div>
      </section>
    )
  }
}