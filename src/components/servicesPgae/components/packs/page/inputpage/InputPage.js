import React, { Component } from 'react';
export default class InputPage extends Component{
  render(){
    return(
      <>
      { 
        this.props.list.length < 4 ? (
          <>
          <input
          type="text"
          name="typeSite"
          style={{
            gridColumn:"span 2"
          }}
          //className = { Style.activeInput }
          onChange = { this.props.handleChange }
          onBlur = { this.props.handleBlur }
          placeholder = { this.props.p }
          disabled  />
          </>  
        ) : (
          <>
          <input
          type="text"
          name="typeSite"
          style={{
            gridColumn:"span 1"
          }}
          //className = { Style.activeInput }
          onChange = { this.props.handleChange }
          onBlur = { this.props.handleBlur }
          placeholder = { this.props.p }
          disabled  />
          </>  
        )
       }
      </>   
    )
  }
}