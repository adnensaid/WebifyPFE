import React, { Component } from 'react';
import Style from  "../projects.module.scss";
import Window from "./window/Window";

export default class Projet extends Component{
  constructor(props){
    super(props);

  }
  render(){
    return(
    <li className={ Style.projectElem } >
      { this.props.project.category === "DESIGN WEB" ? (<div className={ Style.projectElemText }>
        <p className="titre-secondary">{this.props.project.title}</p>
        <p className="paragraph paragraph-primary pt-5">
          {this.props.project.description}  
        </p>
      </div>) : null }
      <div className={ Style.projectElemImg }>
        <img src={ this.props.project.img } alt={ this.props.project.title } />            
      </div>
    </li>    
    )
  }
}



/* const Project = (props) =>(
  <li className={ Style.projectElem }>
    <img src={ props.project.img } alt={ props.project.title } />
  </li>
);
export default Project; */
