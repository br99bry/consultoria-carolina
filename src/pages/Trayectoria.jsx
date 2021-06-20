import React from 'react';
import Media from 'react-media';
import GreenDecorate from '../Components/GreenDecorate';
import Button from '../Components/Button';
import caroCircle from '../images/caroCircle.png';
import Facebook from '../images/Facebook.png';
import Twitter from '../images/Twitter.png';
import Linkedln from '../images/Linkedln.png';


import './styles/Trayectoria.scss';

class Trayectoria extends React.Component{
 
  constructor(props){
  super(props)

  this.state={
   details: props.data.trayectoria.details,
   activar: true,
  }
 }

 componentDidMount(){
  
  const details = document.getElementById('details-carrer')
  details.innerHTML=this.props.data.details
  
  if(visualViewport.width>750){
   console.log('entreee')
   this.props.differNav(this.state.activar,'trayectoria')
  }else{
   this.props.differNav(false,'trayectoria')
   this.setState({
    ...this.state.details,
    activar: false,
   })}
   
 }

 componentWillReceiveProps(nextProps){
  this.setState({
   details: nextProps.data.trayectoria.details,
  })
  const details = document.getElementById('details-carrer')
  details.innerHTML=nextProps.data.trayectoria.details  
 }

 
 render(){
  
  return(
   
   <>
   
   <section className="Trayectoria">
    <Media query="(max-width: 750px)" 
    onChange={(e) => {
     if(this.state.activar===true  && e){
      console.log('me des-active',e)
      this.props.differNav(false,'trayectoria')
      this.setState({
       ...this.state.details,
       activar: false,
      })
     }else if(this.state.activar===false && !e){
      console.log('me active')
      this.props.differNav(true,'trayectoria')
      this.setState({
       ...this.state.details,
       activar: true,
      })
     }
    }}
    render={() =>
          {
           
           return (
            <>
            <GreenDecorate params={this.props.data} />
            <div className="Trayectoria-container">
            <div className="Trayectoria__profile" >
             <div className="Trayectoria__profile-social" >
             <img src={Facebook} alt=""/>
             <img src={Twitter} alt=""/>
             <img src={Linkedln} alt=""/>
             </div>
             <div className="Trayectoria__profile-img" >
              <img src={caroCircle} alt="foto de carolina en circulo"/>
             </div>
            </div>
            <h1 className="Trayectoria__little-name">Carolina Castellanos López</h1>
            <h5 className="Trayectoria__little-job">Abogada Consultora</h5>
            <div className="Trayectoria__little-button" >
             <Button message={this.props.data.trayectoria.sendButton} /> 
            </div>
            <h3 className="Trayectoria__little-title"> {this.props.data.trayectoria.title} </h3>
            <p className="Trayectoria__little-details" id="details-carrer">  </p>
           </div>
           </>
             )
          } }
    />
      <>
      <div className="Tayectoria__left">
     <div className="Trayectoria__left-img">
      <img src={caroCircle} alt="foto de carolina en circulo"/>
     </div>
     <Button message={this.props.data.trayectoria.sendButton} /> 
    </div>
    <div className="Trayectoria__right">
     <h1 className="Trayectoria__right-name">Carolina Castellanos López</h1>
     <h5 className="Trayectoria__right-job">Abogada Consultora</h5>
     <div className="Trayectoria__right-social">
      <img src={Facebook} alt=""/>
      <img src={Twitter} alt=""/>
      <img src={Linkedln} alt=""/>
     </div>
     <h3 className="Trayectoria__right-title"> {this.props.data.trayectoria.title} </h3>
     <p className="Trayectoria__right-details" id="details-carrer">  </p>
    </div>
    </>

   </section>
   </>
  )
  
 }

}

export default Trayectoria;