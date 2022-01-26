import React, { Component } from 'react';
import icon3 from '../../../../assets/images/icon3.png';
import icon4 from '../../../../assets/images/icon4.png';
import icon5 from '../../../../assets/images/icon5.png';
import icon6 from '../../../../assets/images/icon6.png';
import icon7 from '../../../../assets/images/icon7.png';
import Style from "./Expertises.module.scss";
export default class Expertises extends Component{
  render(){
    return(
      <section className={ Style.expertises+" section" }>
        <p className="title-section">NOS EXPERTISES</p>
        <div className="container">
          <div className={ Style.expertisesContent }>
            <div className={Style.expertiseElem}>
              <img src={ icon3 } alt="icon" />
              <p className={Style.textExpertise}>RESPONSIVE DESIGN</p>
            </div>
            <div className={Style.expertiseElem}>
              <img src={ icon4 } alt="icon" />
              <p className={Style.textExpertise}>CONSEILS</p>
            </div>
            <div className={Style.expertiseElem}>
              <img src={ icon5 } alt="icon" />
              <p className={Style.textExpertise}>CMS</p>
            </div>    
            <div className={Style.expertiseElem}>
              <img src={ icon6 } alt="icon" />
              <p className={Style.textExpertise}>DEVELOPPEMENT</p>
            </div> 
            <div className={Style.expertiseElem}>
              <img src={ icon7 } alt="icon" />
              <p className={Style.textExpertise}>WEB DESIGN</p>
            </div>            
          </div>
          <div className={Style.details}>
              <button href="#" className={ Style.btnDetail+" btn btn-primary" }>Voir tous !</button>
          </div>  
        </div>
      </section>
    )
  }
}