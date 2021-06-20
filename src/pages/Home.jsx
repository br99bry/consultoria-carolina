import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'
import Hero from '../Components/Hero';
import Button from '../Components/Button';
import Services from '../Components/Services';

import esij from '../images/ESIJ.png';
import itam from '../images/itam.png';
import tecMonterrey from '../images/tecMonterrey.png';
import tsjGuerrero from '../images/tsjGuerrero.png';
import unam from '../images/unam.png';
import up from '../images/up.png';
import homeMainDecorate from '../images/homeMainDecorate.png';
import carolina from '../images/carolina.png';
import facebookGrey from '../images/facebookGrey.png';
import twitterGrey from '../images/twitterGrey.png';
import linkedlnGrey from '../images/linkedlnGrey.png';
// import moreGrey from '../images/moreGrey.png';

import './styles/Home.scss';

class Home extends React.Component{

constructor(props){
 super(props)
 this.state={
  carrerButton: props.state.homeMain.carrerButton,
  experienceTitle: props.state.homeMain.experienceTitle,  
 }
}

componentWillReceiveProps(nextProps){

 // console.log('recibiendo actualizacion', nextProps)
 this.setState({
  ...this.state,
  carrerButton: nextProps.state.homeMain.carrerButton,
  experienceTitle: nextProps.state.homeMain.experienceTitle,
 })
}

componentDidMount(){

 this.props.differNav(false)
}

render(){
 console.log('recibo '+this.props.state)

 return (
  <div className="Home">
   <Hero 
   state={this.props.state}
   />
   <section className="Home__main">
    <img src={homeMainDecorate} alt="" className="Home__main-img"/>
     <div className="Home__main-right">
      <div className="Home__main-right-profile">
       <div className="Home__main-right-profile-img">
        <div className="Home__main-right-profile-social">
         <a href="/">
          <img src={facebookGrey} alt=""/>
         </a>
         <a href="/">
          <img src={twitterGrey} alt=""/>
         </a>
         <a href="/">
          <img src={linkedlnGrey} alt=""/>
         </a>
        </div>
        <div className="Home__main-right-profile-bottom"></div>
        <div className="Home__main-right-profile-left"></div>
        <img className="Home__main-right-caro" src={carolina} alt=""/>
       </div>
       <div className="Home__main-right-profile-details">
           <h1 className="Home__main-right-profile-data">Carolina Castellanos López<br/><span>Abogada Consultora</span> </h1>
           <Link to="/trayectoria/#inicio">
           <Button message={this.state.carrerButton} />
           </Link>
       </div>
      </div>
      <Services
      state={this.props.state}
      />
     </div>
   </section>
      
   <div className="Home__decorate-bottom">
       <div className="Home__decorate-bottom-left"></div>
       <div className="Home__decorate-bottom-right"></div>
   </div>
   <section className="Home__teacher-in">
       <h5 className="Home__teacher-in-title" > {this.state.experienceTitle} </h5>
       <div className="Home__teacher-in-list">
           <div className="Home__teacher-in-item">
               <img src={esij} alt=""/>
           </div>
           <div className="Home__teacher-in-item">
               <img src={itam} alt=""/>
           </div>
           <div className="Home__teacher-in-item">
               <img src={tecMonterrey} alt=""/>
           </div>
           <div className="Home__teacher-in-item">
               <img src={tsjGuerrero} alt=""/>
           </div>
           <div className="Home__teacher-in-item">
               <img src={unam} alt=""/>
           </div>  
           <div className="Home__teacher-in-item">
               <img src={up} alt=""/>
           </div>
       </div>
   </section>

  </div>
 )
}
    
}

export default Home;