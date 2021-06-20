import React from 'react';
import './styles/GreenDecorate.scss';


class GreenDecorate extends React.Component{



 render(){

 
  return (
   <>
   <div className="GreenDecorate">
     {
      this.props.params.nav.title? 
      <div className="About__decorate">
      <div></div>
      <h1> {this.props.params.nav.title} </h1>
      <p> {this.props.params.nav.details} </p>
     </div>
     :
     ''
     }
    <img src={this.props.params.nav.greenDecorateImg} alt=""/>
    <span> {this.props.params.nav.greenDecorateMessage} </span>
  </div>
  </>
  )
 }
}

export default GreenDecorate;