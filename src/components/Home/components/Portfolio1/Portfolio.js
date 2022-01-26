import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import NavbarPortfolio  from '../../../navbarportfolio/NavbarPortfolio';
import Style from './Portfolio.module.scss';
import img1 from '../../../../assets/images/portfolio1.png';
import img2 from '../../../../assets/images/portfolio2.png';
import img3 from '../../../../assets/images/portfolio3.png';
import img4 from '../../../../assets/images/portfolio4.png';
import img5 from '../../../../assets/images/portfolio5.png';
import img6 from '../../../../assets/images/ms.png';
import img8 from '../../../../assets/images/mockups.png';
import img9 from '../../../../assets/images/ones.png';
import img10 from '../../../../assets/images/fotowork.png';


export default class Portfolio extends Component{
  render(){
    return(
      <section className={ Style.portfolio+" section" }>
        <p className="title-section">NOTRE PORTFOLIO</p>
        <Container>
          <div className={ Style.portfolioContent+ " d-flex flex-column" }>
            <p className="titre-secondary text-center">NOS DERNIERS RÉALISATIONS</p>
            <NavbarPortfolio />
            <div className={ Style.latest}>
              <div className="row">
                <div className="col-8">
                  <div className="row">
                    <div className="row">
                      <div className="item col-6">
{/*                         <img src={ img1 } alt="img"/>
                        <img src={ img2 } alt="img"/>
                        <img src={ img3 } alt="img"/>
                        <img src={ img4 } alt="img"/>
                        <img src={ img5 } alt="img"/>   */}
                        <div className={Style.elem+" fs-1"}>1</div>
                        <div className={Style.elem+" fs-2"}>2</div>
                        <div className={Style.elem+" fs-3"}>3</div>
                      </div>
                      <div className="item col-6 ">
                        <div className={Style.elem}>6</div>
                        <div className={Style.elem}>4</div>
                        <div className={Style.elem}>5</div>
                        {/* <img src={ img6 } alt="img" />  */}   
                      </div>    
                    </div>
                    <div className="row">
                        <div className="item col-12">
                          <div className={Style.elem}>8</div>
                        </div>
                        {/* <img src={ img8 } alt="img" /> */}    
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="row item">
                    <div className={Style.elem}>9</div>
                    {/* <img src={ img9 } alt="img" /> */}
                  </div>
                  <div className="row item">
                    <div className={Style.elem}>10</div>
                    {/* <img src={ img10 } alt="img" /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    )
  }
}