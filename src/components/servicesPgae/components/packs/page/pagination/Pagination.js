import React, { Component } from 'react';
import submitNext from '../../../../../../assets/images/submit2.png';
import LienBefore from './lienbefore/LienBefore';
import LienNext from './liennext/LienNext';
import Style from './pagination.module.scss';
export default class Pagination extends Component{


  render(){
    let content;
    if( this.props.currentPage === 0 ){
      content = <LienNext updateSelectedPage = { ()=>this.props.updateSelectedPage(this.props.currentPage + 1) }/>
    }else if(this.props.currentPage === (this.props.length-1)){
      content = 
      <>
      <LienBefore length = { this.props.length } updateSelectedPage = { ()=>this.props.updateSelectedPage(this.props.currentPage - 1 ) } />
      <button type="submit">
        <img src={ submitNext } alt="img" />
      </button>
      </>
    }else{
      content = 
      <>
        <LienBefore length = { this.props.length } updateSelectedPage = { ()=>this.props.updateSelectedPage(this.props.currentPage - 1 ) } />
        <LienNext updateSelectedPage = { ()=>this.props.updateSelectedPage(this.props.currentPage + 1) }/>
      </>
    }
    return(
      <div className={ Style.direction }>
       { content }
      </div>
    )
  }
}