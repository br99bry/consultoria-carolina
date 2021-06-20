import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'
import Media from 'react-media';

import Button from './Button';

import './styles/Hero.scss';
import triangleHero from '../images/triangleHero.png';
import handHello from '../images/handHello.png';
import eficienciaIcon from '../images/eficienciaIcon.PNG';
import arbitraje from '../images/arbitraje.PNG';
import calidadIcon from '../images/calidadIcon.PNG';
import handHelloLittle from '../images/handHelloLittle.png';
import calidadGreen from '../images/calidadGreen.png';
import confianzaGreen from '../images/confianzaGreen.png';
import eficienciaGreen from '../images/eficienciaGreen.png';
import calidadMochado from '../images/calidadSinMochar.png';
import confianzaMochado from '../images/confianzaSinMochar.png';
import eficienciaMochado from '../images/eficienciaSinMochar.png';



class Hero extends React.Component{
 
  constructor(props){
    super(props)
    this.state={
      language: props.state.language,
      title: props.state.hero.title,
      description: props.state.hero.description,
      viewMore: props.state.hero.viewMore,
      img: {
       heroImg1: calidadIcon,
       heroImg2: arbitraje,
       heroImg3: eficienciaIcon,
       heroImgTitle1: null,
       heroImgTitle2: null,
       heroImgTitle3: null,
       textDetails: null,
       imgDetails: null,
      }
    }
   }

  componentWillReceiveProps(nextProps){
   // console.log('recibiendo actualizacion', nextProps)
   this.setState({
    ...this.state,
    language: nextProps.state.language,
    title: nextProps.state.hero.title,
    description: nextProps.state.hero.description,
    viewMore: nextProps.state.hero.viewMore,
   })
  }

  handleHero = (who) => {
   switch(who){
    case '1':
     this.state.img.heroImg1==calidadIcon ?
     this.setState({
      ...this.state,
      img:{
       heroImg1: calidadGreen,
       heroImg2: arbitraje,
       heroImg3: eficienciaIcon,
       heroImgTitle1: 'Calidad',
       imgDetails: calidadMochado,
       textDetails: 'Las acciones estratégicas para la solución alternativa de las controversias planteadas son ejecutadas con la mayor eficiencia posible, lo que optimiza costos. '
      }
     })
     : 
     this.setState({
      ...this.state,
      img:{
       ...this.state.img,
       heroImg1: calidadIcon,
       heroImgTitle1: null,
       textDetails: null,
       imgDetails: null,
      }
     })
     break;
     case '2':
      this.state.img.heroImg2==arbitraje ?
      this.setState({
       ...this.state,
       img:{
        heroImg1: calidadIcon,
        heroImg2: confianzaGreen,
        heroImg3: eficienciaIcon,
        heroImgTitle2: 'Confianza',
        imgDetails: confianzaMochado,
        textDetails: 'Los clientes pueden estar confiados en que su asunto será atendido diligentemente, con precisión, calidad, profesionalismo y confidencialidad.',
       }
      })
      : 
      this.setState({
       ...this.state,
       img:{
        ...this.state.img,
        heroImg2: arbitraje,
        heroImgTitle2: null,
        imgDetails: null,
        textDetails: null
       }
      })
      break;
      case '3':
       this.state.img.heroImg3==eficienciaIcon ?
       this.setState({
        ...this.state,
        img:{
         heroImg1: calidadIcon,
         heroImg2: arbitraje,
         heroImg3: eficienciaGreen,
         heroImgTitle3: 'Eficiencia',
         imgDetails: eficienciaMochado,
         textDetails: 'Altos estándares de calidad en la prestación de los servicios legales; desde el análisis del problema y el planteamiento de la estrategia, hasta la ejecución de los servicios.'
        }
       })
       : 
       this.setState({
        ...this.state,
        img:{
         ...this.state.img,
         heroImg3: eficienciaIcon,
         heroImgTitle3: null,
         imgDetails: null,
         textDetails: null,
        }
       })
       break;
   }
  }

  render(){

    return(
      <>
        <div className="Hero">
          <Media
          query="(max-width: 850px)"
          render={ () => (
           <div className="Hero-decorate-little">
           <div className="Hero-decorate-little-left">
            <p> {this.state.img.textDetails} </p>
           </div>
           <div className="Hero-decorate-little-right">
            { this.state.img.imgDetails? <img src={this.state.img.imgDetails} alt=""/> :
             null
            }
           </div>
           </div>
          ) }
          />
          <Media query="(max-width: 850px)" render={() =>
            (
              <img className="Hero__img-responsive" src={handHelloLittle} alt="saludo de manos"></img>
            )}
          />
          <img className="Hero-triangle"  src={triangleHero} alt=""/>
          <div className="Hero-decorate">
            <div className="Hero-decorate-left">
             <p> {this.state.img.textDetails} </p>
            </div>
            <div className="Hero-decorate-right">
             { this.state.img.imgDetails? <img src={this.state.img.imgDetails} alt=""/> :
              null
             }
            </div>
          </div>
          <div className="Hero__left">
            <img className="Hero-hand" src={handHello} alt=""/>
            <h1 className="Hero__left-title">
              {this.state.title}
            </h1>
            <p className="Hero__left-description">
              {this.state.description}
            </p>
            <Link to="/acerca-de/#inicio" >
            <Button message={this.state.viewMore}/>
            </Link>
          </div>
          <div className="Hero__right">
            <div>
            <img 
            src={this.state.img.heroImg1} 
            onClick={ () => {this.handleHero('1')}  } 
            alt="" 
            className="Hero__right-item"
            />
            {this.state.img.heroImgTitle1 ?
            <p className="Hero__rigth-title"> {this.state.img.heroImgTitle1} </p>
             :
             ''
            }
            </div>
            <div>
            <img 
            src={this.state.img.heroImg2} 
            onClick={ () => {this.handleHero('2')} } 
            alt="" 
            className="Hero__right-item"
            />
            {this.state.img.heroImgTitle2 ?
            <p className="Hero__rigth-title"> {this.state.img.heroImgTitle2} </p>
             :
             ''
            }
            </div>
            <div>
             <img 
             src={this.state.img.heroImg3} 
             onClick={ () => { this.handleHero('3') } } 
             alt="" 
             className="Hero__right-item"
             />
             {this.state.img.heroImgTitle3 ?
             <p className="Hero__rigth-title"> {this.state.img.heroImgTitle3} </p>
              :
              ''
             }
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Hero;