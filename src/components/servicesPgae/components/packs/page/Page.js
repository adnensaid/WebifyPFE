import React, { Component } from 'react';
import InputPage from './inputpage/InputPage';
import Pagination from './pagination/Pagination';

import Style from './page.module.scss';
export default class Page extends Component{

  render(){
    return(
      <>
      <div className={ Style.containerL }>
        { this.props.currentPage > 0 && <h4>PACK VITRINE</h4> }
        <label><span className="boule">{ this.props.currentPage + 1 }</span><p>{this.props.title}</p></label>                 
        { this.props.list.map((p, index)=>(
          <InputPage  key ={ index } p = { p } list = { this.props.list } onClick={ this.selectInput } />
        )) }                        
      </div>
      <Pagination 
      currentPage = { this.props.currentPage }
      updateSelectedPage = { this.props.updateSelectedPage }
      length = { this.props.length }
      />
      </>
    )
  }
}