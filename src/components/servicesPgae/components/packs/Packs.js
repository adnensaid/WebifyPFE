import React, { Component } from 'react';
import { Formik } from 'formik';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.css";
import Style from './Packs.module.scss';
import packImg from '../../../../assets/images/vitrine.png';
import NextImg from '../../../../assets/images/submit2.png';
import BeforeImg from '../../../../assets/images/submit.png';
export default class Packs extends Component{

  constructor(props){
    super(props);
    this.state = {
     currentPage :0,
     show:true,
     pages : [
       {
         title:"TYPE DE SITE WEB",
         name:'type',
         list : ['Site vitrine', 'Site e-commerce', 'Application mobile', 'Sur mesure']
       },
       {
        title:"QUELLES SONT VOS ATTENTES CONCERNANT LE DESIGN DU SITE",
        name:'design',
        list : [ 'Un design standard, simple et efficace', 
        'Un design soigné à partir de vos propres maquettes',
        'Un design haut de gamme entièrement sur mesure']
      },{
        title:"VOTRE SITE DOIT_IL ËTRE DISPONIBLE EN PLUSIEURS LANGUES ?",
        name:'langues',
        list : ["OUI", "NON"]
      },
      {
        title:"VOTRE SITE DOIT-IL PERMETTRE D4ENCAISSER DES PAIEMENTS ?",
        name:'payement',
        list :['Oui des paiements simples par CB / Paypal',
        'Oui des paiements récurrents pour des abonnements',
        'Non'
      ]
      },
      {
        title:"FONCTIONNALITÈS SOUHAITÈES",
        name:'fonctionnaliter',
        list:['Blog', 'intégration des réseaux sociaux', 'Inscription Newsletter', 'Moteur de recherche interne',
        'Module de demande de devis', 'Gestion des factures'
       ]
      },
      {
        title:"HÈBERGEMENT DU SITE",
        name:'hebergement',
        list:["Je compte m'en occuper moi-même", "Je souhaite un hébergement standard", "Je souhaite un hébergement premium (pour un site à fort trafic)" ]
      }
     ],
     arrowStyles : {
      position: 'absolute',
      zIndex: 2,
      top: 'calc(100% - 30px)',
      width: 30,
      height: 30,
      cursor: 'pointer'
  }
     } 
  }



  updateSelectedPage = (index)=>{
   this.setState({
     currentPage : index
   }) 
  }
  submit = values => {
    console.log(values);
  }
  render(){
    return(
      <div className={ Style.packs }>
        <div className="container">
                <Formik
                  onSubmit = { this.submit }
                  initialValues = {{ pack : this.state.packs }}
                >
                  {(
                    {
                      values,
                      handleBlur,
                      handleChange,
                      handleSubmit,
                      isSubmitting
                    }
                  )=> (
                  <form onSubmit = { handleSubmit } className={ Style.form }>
                    <Carousel
                       transitionTime = "500"
                       statusFormatter={(current, total) => `Current slide: ${current} / Total: ${total}`}
                       showThumbs={ false }
                      
                       onChange = { (current) =>{
                         if (current > 0) {
                          this.setState({
                            arrowStyles:{
                             position: 'absolute',
                             zIndex: 2,
                             top: 'calc(50%)',
                             width: 30,
                             height: 30,
                             cursor: 'pointer'
                            }
                          })   
                         }else{
                          this.setState({
                            arrowStyles:{
                             position: 'absolute',
                             zIndex: 2,
                             top: 'calc(100% - 30px)',
                             width: 30,
                             height: 30,
                             cursor: 'pointer'
                            }
                          })      
                         }
                       } }
                       renderArrowPrev={(onClickHandler, hasPrev, label) =>
                           hasPrev && (
                            <button type="button" onClick={onClickHandler} title={label}  style={{ ...this.state.arrowStyles, left: 15 }}>
                            <img 
                            src={ BeforeImg } 
                            alt="before" 
                            />
                          </button>   
                           ) 
                       }
                       renderArrowNext={(onClickHandler, hasNext, label) =>
                           hasNext && (
                               <button type="button" onClick={onClickHandler} title={label} style={{ ...this.state.arrowStyles, right: 15 }}>
                                  <img
                                  src={ NextImg } 
                                  alt="next" 
                                  />
                               </button>
                           ) 
                          }  
                          renderIndicator={(onClickHandler, isSelected, index, label) => {
                            return null
                        }}                  
                    >
                    { this.state.pages.map((p, index)=>(
                      <div 
                      className={ Style.pack } 
                      key={ `slide${index+1}` }
                      
                      >
                        { index===0 ? (
                          <>
                          <img src={ packImg } alt="vitrine" className={ Style.packImg } />
                          <div className={ Style.packText }>
                            <h1>PACK VITRINE</h1>
                            <p>
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.   
                            </p>
                          </div>  
                          </>  
                        ) : null
                        }
                        <div className={ Style.packService }>
                          <div className={ Style.containerL }>
                            <label><span className="boule">{ index + 1 }</span><p>{p.title}</p></label>   
                            { 
                            p.list.length >= 4 ? (
                              p.list.map(l=>(
                                <input
                                key={index+l}
                                type="button"
                                name="typeSite"
                                value={l}
                                style={{
                                  gridColumn:"span 1"
                                }}
                                onChange = { this.props.handleChange }
                                onBlur = { this.props.handleBlur }
                                />  
                              )) 
                            ): (
                              p.list.map(l=>(
                                <input
                                type="button"
                                name="typeSite"
                                value={l}
                                style={{
                                  gridColumn:"span 2"
                                }}
                                onChange = { this.props.handleChange }
                                onBlur = { this.props.handleBlur }
                                key={index+l}

                                />  
                              )) 
                            )
                            }
                          </div>
                        </div>
                      </div>    
                    )) 
                    }    
                    </Carousel>
                  </form>  
                  )}
                </Formik>  
        </div>
      </div>
    )
  }
}