import React, { Component } from 'react';
import Style from './Newsletter.module.scss';

export default class Newsletter extends Component{
  constructor(props){
    super(props);
    this.state = {
      display:false,
      value:0
    }
  }
  toggleMenu = (nvValeur)=>{
    this.setState({
      display:!this.state.display,
      value: this.state.value + nvValeur
    })
  }
  render(){
    let content;
    if (this.state.display) {
      content = (
        <>
          <p className={Style.textSecondary}>S'INSCRIRE</p>
          <p className={Style.titreNewsletter}>NEWSLETTER</p>
          <form action="#">
            <input type="text" placeholder="ENTREZ VOTRE MAIL" className={Style.inputNewsletter} />
            <button type="submit" className={Style.formBtn}>OK</button>
          </form>
        </>  
      )
    }else{
      content = (
        <>
          <p className={Style.textSecondary}>S'INSCRIRE</p>
        </>  
      )
    }
    return(
      <section className={Style.newsletter}>
        <div className="container">
          <div className={ Style.newsletterContent }>
            <button
              className={Style.btnNewsletter}
              onClick= { ()=>this.toggleMenu(180) }
              style={{
                transition:"all 0.4s",
                transform:`rotate(${this.state.value}deg)`
              }}
            >
            </button> 
            { content }
          </div>
        </div>
      </section>
    )
  }
}