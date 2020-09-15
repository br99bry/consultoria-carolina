import React from 'react';


import FloatMenu from './FloatMenu';

import './styles/Navbar.scss';
import logo from '../images/Logo.png';


class Navbar extends React.Component{

 constructor(props){
  super(props)
 }

 render(){
  return (
   <React.Fragment>
       <div className="Navbar">
           <figure className="Navbar__logo">
               <img src={logo} alt="logo"/>
           </figure>
           <div className="Navbar__menu">
               <FloatMenu
               state={this.props.state}
               languageSignal={this.props.languageSignal}
               />
           </div>
       </div>
   </React.Fragment>
  )

 }
}

export default Navbar;