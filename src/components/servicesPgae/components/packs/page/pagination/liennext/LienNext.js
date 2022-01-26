import React, { Component } from 'react';
import Style from './lienNext.module.scss';
import submitNext from '../../../../../../../assets/images/submit2.png';

export default class LienNext extends Component{
  
  selectPage = ()=>{
    this.props.updateSelectedPage();
  }
  render(){
    return(
      <div onClick={this.selectPage} className={ Style.lienNext }>
        <img src={ submitNext } alt="img" />
      </div>
    )
  }
}