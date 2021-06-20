import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

import LogoLittle from '../images/LogoLittle.png';
import menuIcon from '../images/menuIcon.png';
import crossIcon from '../images/crossIcon.png';
import triangle from '../images/triangle.png';
import adressImg from '../images/adressImg.png';

import './styles/FloatMenu.scss';

class FloatMenu extends React.Component {

  constructor(props){
    super(props)
    this.state={
      menu: {
        isActive: false,
        language: props.state.es.language,
        nav: {
          menu1: props.state.es.nav.menu1,
          menu2: props.state.es.nav.menu2,
          menu3: props.state.es.nav.menu3,
          menu4: props.state.es.nav.menu4,
          languageReference: props.state.es.nav.languageReference,
        }
      }
    }
    
  }

  handleLaguage(){
   
    const language = this.props.state
    if(this.state.menu.language==='En'){
      this.props.languageSignal('Es')
      this.setState({
        menu: {
          ...this.state.menu,
          language: language.es.language,
          nav: {
            menu1: language.es.nav.menu1,
            menu2: language.es.nav.menu2,
            menu3: language.es.nav.menu3,
            menu4: language.es.nav.menu4,
            languageReference: language.es.nav.languageReference,
          }
        }
      })
      
    }else{
     this.props.languageSignal('En')
      this.setState({
        menu: {
          ...this.state.menu,
          language: language.en.language,
          nav: {
            menu1: language.en.nav.menu1,
            menu2: language.en.nav.menu2,
            menu3: language.en.nav.menu3,
            menu4: language.en.nav.menu4,
            languageReference: language.en.nav.languageReference,
          }
        }
      })
    }
  }
  
  handleMenu(){
    let menu=document.getElementById('FloatMenu-active');
    let block = document.getElementById('FloatMenu__block-active');
    if(!this.state.menu.isActive){
      this.setState({
        menu: {
          ...this.state.menu,
          isActive: true
        }
      });
      menu.classList.add('FloatMenu-active')
      block.classList.add('FloatMenu__block-active')
    }else{
      this.setState({
        menu: {
          ...this.state.menu,
          isActive: false
        }
      });
      // console.log('activando')
      menu.classList.remove('FloatMenu-active')
      block.classList.remove('FloatMenu__block-active')
    }
  }

  render(){
    return(
      <>
        <div className="FloatMenu"
        id="FloatMenu-active"
        >
          <img src={menuIcon} 
          alt="icono menu" 
          className="FloatMenu__img"
          onClick={ () => { this.handleMenu() } }
          />
          <div className="FloatMenu__block"
          id="FloatMenu__block-active"
          >
            <div className="FloatMenu__block-logo">
              <img src={LogoLittle} alt=""/>
            </div>
            <div className="FloatMenu__block-cross">
              <img src={crossIcon} alt="cross icon"
              onClick={()=> { this.handleMenu() } }
              />
            </div>
            <div className="FloatMenu__block-nav">
              <ul className="FloatMenu__block-menu">
                <li className="FloatMenu__block-menu-item">
                  <Link onClick={()=> { this.handleMenu() } } to="/consultoria-carolina#inicio" >{this.state.menu.nav.menu1}
                  <img className="FloatMenu__block-menu-triangle" src={triangle} alt="triangle"/>
                  </Link>
                </li>
                <li className="FloatMenu__block-menu-item">
                  <Link onClick={()=> { this.handleMenu() } } to="/trayectoria#inicio" >{this.state.menu.nav.menu2}
                  <img className="FloatMenu__block-menu-triangle" src={triangle} alt="triangle"/>
                  </Link>
                </li>
                <li className="FloatMenu__block-menu-item">
                  <Link onClick={()=> { this.handleMenu() } } to="/acerca-de#inicio" >{this.state.menu.nav.menu3}
                  <img className="FloatMenu__block-menu-triangle" src={triangle} alt="triangle"/>
                  </Link>
                </li>
                <li className="FloatMenu__block-menu-item">
                  <Link onClick={()=> { this.handleMenu() } } to="/contact#inicio" >{this.state.menu.nav.menu4}
                  <img className="FloatMenu__block-menu-triangle" src={triangle} alt="triangle"/>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="FloatMenu__block-details">
              <div className="FloatMenu__block-details-left">
                <img src={adressImg} alt=""/>
              </div>
              <div className="FloatMenu__block-details-right">
                <div> {this.state.menu.nav.languageReference} </div>
                <div
                onClick={() => { this.handleLaguage()} }
                > 
                {this.state.menu.language==='Es'?'En':'Sp'} 
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default FloatMenu;