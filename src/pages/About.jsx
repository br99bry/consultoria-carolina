import React from 'react';
// import ReactDom from 'react-dom';
import Media from 'react-media';
import GreenDecorate from '../Components/GreenDecorate';
import writeAbout from '../images/writeAbout.png';
import './styles/About.scss';

class About extends React.Component{

 constructor(props){
  super(props)
  this.state={
   activar: true,
   description: props.data.about.description
  }
 }

 componentDidMount(){  
  const details = document.getElementById('deatils-about')
  details.innerHTML=this.state.description
  if(visualViewport.width>750){
   this.props.differNav(this.state.activar,'about')
  }else{
   this.props.differNav(false,'about')
   this.setState({
    ...this.state.details,
    activar: false,
  })}
   
 }


 componentWillReceiveProps(nextProps){
  this.setState({
   details: nextProps.data.about.description,
  })
  const details = document.getElementById('deatils-about')
  details.innerHTML=nextProps.data.about.description  
 }

 render(){
  return (
   <>
   <Media query="(max-width: 750px)" 
    onChange={(e) => {
     if(this.state.activar===true  && e){
      console.log('me des-active',e)
      this.props.differNav(false,'about')
      this.setState({
       ...this.state.details,
       activar: false,
      })
     }else if(this.state.activar===false && !e){
      console.log('me active')
      this.props.differNav(true,'about')
      this.setState({
       ...this.state.details,
       activar: true,
      })
     }
    }}
    render={() => (
     <GreenDecorate params={this.props.data}/>
    )}
    />

    <div className="About">
    <section className="About-container">
     <div className="About__img">
      <div>
      <img src={writeAbout} alt=""/>
      <div></div>
      </div>
     </div>
     <div className="About__littleDescription">
      <div>
       <h2> {this.props.data.about.titleLittle} </h2>
       <p>
        {this.props.data.about.descriptionLittle}
       </p>
      </div>
     </div>
     <div className="About__details">
      <h2> {this.props.data.about.title} </h2>
      <p id="deatils-about">
      
      </p>
     </div>
    </section>
    </div>
   </>
  )
 }
}

export default About;