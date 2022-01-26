import React, { Component } from 'react';
import Style from './ServicesPacks.module.scss';
import service1 from '../../../../assets/images/vitrine.png';
import service2 from '../../../../assets/images/ecommerce.png';
import service3 from '../../../../assets/images/appmobile.png';
import service4 from '../../../../assets/images/surmesure.png';

export default class ServicesPacks extends Component{

  render(){
    return(
        <section className={ Style.services+" section" }>
            <p className="title-section">NOS SERVICES ET PACKS</p>
            <div className="container">
                <div className={ Style.servicesList}>
                    <div className={Style.servicesElem+" card border-0"}>  
                        <img src={ service1 } alt="service" data-aos="fade-left" className="card-img-top" />  
                        <div className={Style.servicesText+" card-body"}>
                            <p className="titre-secondary">PACK VITRINE</p>
                            <p className="paragraph paragraph-primary">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Illum, quae facere pariatur sunt voluptas dolor aliquid
                                libero maxime? Aspernatur, eius officia. Ex sit minus saepe 
                                impedit fugit    
                            </p>
                            <button href="#" className={Style.linkServices+" btn btn-primary"}>Je découvre</button>  
                        </div>    
                    </div>
                    <div className={Style.servicesElem+ " card border-0"}>
                        <div className={Style.servicesText}>
                            <p className="titre-secondary">PACK E-COMMERCE</p>
                            <p className="paragraph paragraph-primary">
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                              Illum, quae facere pariatur sunt voluptas dolor aliquid
                              libero maxime? Aspernatur, eius officia. Ex sit minus saepe 
                              impedit fugit    
                            </p>
                            <button href="#" className={Style.linkServices+" btn btn-primary"}>Je découvre</button>  
                        </div>    
                        <img src={ service2 } alt="service" data-aos="fade-right" className="card-img-top" />
                    </div>  
                    <div className={Style.servicesElem+ " card border-0"}>
                        <img src={ service3 } alt="service" data-aos="fade-right" className="card-img-top"/>
                        <div className={Style.servicesText}>
                            <p className="titre-secondary">PACK APP. MOBILE</p>
                            <p className="paragraph paragraph-primary">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Illum, quae facere pariatur sunt voluptas dolor aliquid
                                libero maxime? Aspernatur, eius officia. Ex sit minus saepe 
                                impedit fugit    
                            </p>
                            <button href="#" className={Style.linkServices+" btn btn-primary"}>Je découvre</button>  
                        </div>    
                    </div>
                    <div className={Style.servicesElem+ " card border-0"}>
                        <div className={Style.servicesText}>
                            <p className="titre-secondary">PACK SUR MESURE</p>
                            <p className="paragraph paragraph-primary">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                Illum, quae facere pariatur sunt voluptas dolor aliquid
                                libero maxime? Aspernatur, eius officia. Ex sit minus saepe 
                                impedit fugit    
                            </p>
                            <button href="#" className={Style.linkServices+" btn btn-primary"}>Je découvre</button>  
                        </div> 
                        <img src={ service4 } alt="service" data-aos="fade-right" className="card-img-top"/>
                    </div>
                </div>
            </div>
        </section>
    )
  }
}
