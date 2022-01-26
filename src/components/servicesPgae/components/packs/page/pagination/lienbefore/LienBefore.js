import React, { Component } from 'react';
import Style from './lienBefore.module.scss';
import submitBefore from '../../../../../../../assets/images/submit.png';

export default class LienBefore extends Component{
  selectPage = ()=>{
    this.props.updateSelectedPage();
  }

  render(){
    return(
      <div href="" onClick={this.selectPage} className={ Style.lienBefore }>
        <img src={ submitBefore } alt="img" />
      </div>
    )
  }
}