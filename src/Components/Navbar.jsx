import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'
import ReactDom from 'react-dom';
import GreenDecorate from './GreenDecorate';
import FloatMenu from './FloatMenu';


import './styles/Navbar.scss';
import logo from '../images/Logo.png';
import whatsFloat from '../images/whatsFloat.png';



class Navbar extends React.Component{

 constructor(props){
  super(props)
  this.state={
   valor: props.valor,
  }
 }

 componentWillReceiveProps(nextProps){
  this.setState({
   valor: nextProps.valor,
  })
  
 }

 render(){
  return (
   <React.Fragment>
    {ReactDom.createPortal(
     <>
     <div className="Whats">
      <a target="_blank" href="https://api.whatsapp.com/send?phone=525583100774">
      <img src={whatsFloat} alt=""/>
      </a>
     </div>
     </>
     ,
     document.getElementById('whats')
     )}
    {this.state.valor?
     <div className="Navbar2" id="inicio">
     <div className="Navbar__img">
      <GreenDecorate params={this.props.language}/>
     </div>   
     <div className="Navbar__menu2">
      <FloatMenu
      state={this.props.state}
      languageSignal={this.props.languageSignal}
      />
     </div>
     </div>
      :
      <div className="Navbar1" id="inicio">
       <div className="Navbar__logo">
        <Link to='/consultoria-carolina#inicio'>
         <img src={logo} alt="logo"/>
        </Link>
       </div> 
       <div className="Navbar__menu">
        <FloatMenu
        state={this.props.state}
        languageSignal={this.props.languageSignal}
        />
       </div>
      </div>
     }
   </React.Fragment>
  )

 }
}

export default Navbar;