import React from 'react';
import { BrowserRouter , Switch , Route } from 'react-router-dom';

import Layout from './Components/Layout';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Trayectoria from './pages/Trayectoria';
import About from './pages/About';
import carrerImg from './images/carrerImg.png';
import aboutImg from './images/aboutImg.png';


class App extends React.Component {

  constructor(props){
    super(props)
    this.state={
      nav: false,
      language: {
       actual:'Es',
        es: {
          language: 'Es',
          nav: {
            menu1: 'Inicio',
            menu2: 'Trayectoria',
            menu3: 'Servicios',
            menu4: 'Contacto',
            languageReference: 'Idioma',
            greenDecorateMessage: 'a',
            greenDecorateImg: null,
          },
          contact: {
           title: 'Contactame',
           details: 'Te aseguro que encontraremos la mejor solución',
           name: 'Nombre',
           yourName: 'Tú nombre',
           email: 'Correo',
           yourEmail: 'correo@email.com',
           message: 'Mensaje',
           yourMessage: 'Tú Mensaje',
           button: 'Enviar Mensaje'
          },
          hero:{
            title: 'Consultoría en Solución Alternativa de Controversias',
            description: 'Gestión y solución alternativa de controversias comerciales por medio de procesos de mediación y arbitraje',
            viewMore: 'ver más',
          },
          homeMain:{
           carrerButton: 'Ver Trayectoria',
           services: 'Servicios',
           experienceTitle: 'Experiencia impartiendo clases y conferencias en',
           tituloServicio1: 'Arbitraje',
           tituloServicio2: 'Derecho Civil y Comercial',
           tituloServicio3: 'Mediación',
           servicio1points: [
            'Árbitro de derecho privado para la resolución de controversias civiles y comerciales, en arbitrajes nacionales o internacionales, administrados o ad-hoc.',
            'Representación jurídica de personas físicas o morales en procesos arbitrales ad-hoc o administrados, nacionales o internacionales.',
            'Tramitación de procesos judiciales con relación al arbitraje para: Reconocimiento y ejecución de laudos arbitrales.Nulidad de laudos arbitrales Revisión judicial de laudos arbitrales sobre competencia. Remisión judicial al arbitraje. Nombramiento judicial de árbitros. Medidas cautelares a ser dictadas por un juez, con relación a un arbitraje por iniciarse, en curso o concluido. Ejecución de medidas cautelares dictadas por un tribunal arbitral.'
           ],
           servicio2points: [
            'Asesoría jurídica en materia civil y comercial.',
            'Elaboración de estrategias jurídicas en materia civil y comercial.',
            'Revisión de contratos civiles y mercantiles. ',
           ],
           servicio3points: [
            'Carolina Castellanos López presta servicios como mediadora privada para la solución de controversias civiles y comerciales en procesos de mediación.',
            'Representación jurídica de personas físicas o morales en procesos de mediación.',
           ],
          },
          footer:{
           opc1: 'Inicio',
           opc2: 'Trayectoria',
           opc3: 'Servicios',
           opc4: 'contacto',
           social: 'Únete a la conversación',
          },
          about: {
           titleLittle: '¿Qué son los MASC? ',
           descriptionLittle: '•	Son Mecanismos Alternativos de Solución de Controversias. Por mecanismos nos referimos a procesos, procedimientos o métodos',
           title: 'Alternativos, ¿a qué?',
           description: '•	A los procesos jurisdiccionales o procesos tradicionales de impartición de justicia por los cuales una autoridad competente es quien conoce y resuelve la controversia que se le plantea.<br/><br/>Ejemplos de los <span>MASC</span> son la mediación y el arbitraje.<br/><br/><span>•	La mediación</span>es un proceso en el que un tercero facilitador (que no es un juez ni un árbitro) auxilia profesionalmente a las partes involucradas en una controversia en materia familiar, civil, comercial, entre otras, con el propósito de que sean ellas mismas quienes resuelvan su conflicto y, con ello, satisfagan sus respectivas necesidades. <br/><br/>Es una negociación asistida por un tercero neutral: el mediador o facilitador.<br/><br/>Una mediación exitosa nos permite evitar un juicio o un arbitraje, o poner fin a un juicio o arbitraje que ya hubiere sido iniciado por una de las partes. <br/><br/>Las controversias que podemos resolver en una mediación son casi todas aquellas derivadas de conflictos familiares, civiles y comerciales relacionados con un incumplimiento contractual. En general, casi cualquier tipo de materias son susceptibles de sujetarse a procesos de mediación y conciliación.<br/><br/><span>•	El arbitraje es un proceso</span> en el cual un árbitro (que no es un juez) conoce y resuelve de manera definitiva y vinculante las controversias existentes entre las partes involucradas, derivadas de un contrato o relación comercial entre ellas.<br/><br/>Las controversias que se pueden resolver por medio de un arbitraje son aquellas de naturaleza mercantil o comercial; por ejemplo, incumplimientos contractuales y lo que de ello derive jurídicamente.<br/><br/>La resolución del árbitro, el laudo, tiene la misma fuerza legal que la sentencia dictada por un juez.',
          },
          trayectoria:{
           sendButton: 'Enviar Mensaje',
           title: 'Semblanza Profesional',
           details: 'Es licenciada en Derecho por el Instituto Tecnológico Autónomo de México (ITAM), especialista en arbitraje comercial y gestión de conflictos por medio de mecanismos alternativos de solución de controversias (MASC). Fue Secretario General del Centro de Arbitraje de México (CAM) por 10 años, donde tuvo a su cargo la administración de más de 70 arbitrajes comerciales nacionales e internacionales en materia comercial del sector de telecomunicaciones, franquicias, energía, propiedad intelectual, obra, entre otros. <br /><br /> Ha sido profesora de cátedra en la Universidad Panamericana y en el Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM), Campus Santa Fe, Campus San Luis Potosí y Campus Estado de México. Profesora en los programas de maestría de solución alternativa de controversias del Poder Judicial de Guanajuato y del Poder Judicial de Guerrero. Es profesora en el Diplomado en Derecho Corporativo del ITAM, y profesora y coordinadora académica del Diplomado en Mecanismos Alternativos de Solución de Controversias del ITAM.<br /><br />En su práctica profesional independiente representa a personas físicas, personas morales y a entidades de la administración pública en procedimientos arbitrales administrados y ad-hoc, nacionales e internacionales, así como en procedimientos judiciales relacionados con arbitraje; se desempeña como árbitro; como mediadora privada; y presta consultoría en materia de MASC. <br /><br />Miembro de la Barra Mexicana, Colegio de Abogados, S.C. (BMA)<br /><br />Presidente del Consejo de Administración del Centro de Arbitraje de México (CAM)<br /><br /><span>Resumen profesional</span> <br /><br /> <span>Abogada Consultora independiente</span>, enero 2014 a la fecha. <br /><br /><span>Coordinadora académica del Diplomado en Mecanismos Alternativos de Solución de Controversias del ITAM</span>, julio de 2017 a la fecha.<br /><br /><span> Profesora de cátedra en el ITAM</span>, de enero de 2015 a la fecha. <br /><br /><span>Profesora en la Maestría de Mediación y Conciliación</span> de la Escuela Judicial del Poder Judicial del Estado de Guerrero, 2017 a la fecha<br /><br /><span>Profesora de los módulos de mediación, conciliación y arbitraje</span> en la Especialidad de Métodos Alternativos de Solución de Controversias y en la Maestría en Derecho Procesal ofrecidas por la Escuela de Estudios e Investigación Judicial del Poder Judicial del Estado de Guanajuato, 2015 -2017.<br /><br /><span>Profesora de cátedra en el Tecnológico de Monterrey, Campus Estado de México</span>, agosto de 2019 a la fecha.<br /><br /><span>Profesora de cátedra en el Tecnológico de Monterrey, Campus Santa Fe</span>, agosto de 2013 a diciembre 2014.<br /><br /><span>Profesora invitada en el Tecnológico de Monterrey, Campus San Luis Potosí</span>, enero a mayo de 2011; y de agosto a diciembre de 2015. <br /><br /><span>Directora y Secretario General del Centro de Arbitraje de México (CAM)</span>, noviembre de 2004 a diciembre de 2013.<br /><br /><span>Profesora invitada en Penn State University</span>, noviembre de 2009<br /><br /><span>Profesora titular de la materia Arbitraje en la Universidad Panamericana</span>, agosto de 2005 a diciembre de 2007<br /><br /><span>Miembro de la Secretaría General del CAM</span>, julio de 2002 a noviembre de 2004<br /><br /><span>Licenciada en Derecho por el ITAM</span>, 2002.',
          }
        },
        en:{
          language: 'En',
          nav: {
            menu1: 'Home',
            menu2: 'Carrer Path',
            menu3: 'Services',
            menu4: 'Contact',
            languageReference: 'Language',
            greenDecorateMessage: '',
            greenDecorateImg: null,
          },
          hero:{
           title: 'Consultancy in Aternative Dispute Resolution',
           description: 'Management nad dispute resolution of commercial disputes through mediation and arbitration processes',
           viewMore: 'view more',
         },
         contact: {
          title: 'Contact us',
          details: 'I assure you that we will find the best solution',
          name: 'Name',
          yourName: 'Your name',
          email: 'Email',
          yourEmail: 'correo@email.com',
          message: 'Message',
          yourMessage: 'Your Message',
          button: 'Send Message'
         },
         homeMain:{
          carrerButton: 'View Carrer Path',
          services: 'Services',
          experienceTitle: 'Experience teaching classes and conferences in:',
          tituloServicio1: 'Arbitration',
           tituloServicio2: 'Civil and Commercial Law',
           tituloServicio3: 'Mediation',
           servicio1points: [
            'Carolina Castellanos López serves as a private law arbitrator for the solution of civil and commercial disputes in national and international arbitration processes, administered or ad-hoc.',
            'Legal representative of natural and legal persons in national and international arbitration processes, administered or ad-hoc.',
            'Processing of judicial processes in relation to arbitration for: - Recognition and execution of arbitration awards. - Nullity of arbitration awards. - Judicial review of jurisdiction awards. - Judicial referral to arbitration. - Judicial appointment of arbitrators. - Precautionary measures to be dictated by a judge, in relation to an arbitration to be initiated, ongoing or concluded. - Execution of precautionary measures dictated by an arbitral tribunal. '
           ],
           servicio2points: [
            'Legal advice. ',
            'Development of legal strategies.',
            'Review of contracts.',
           ],
           servicio3points: [
            'Carolina Castellanos López serves as a private mediator for the solution of civil and commercial disputes in mediation processes.',
            'Legal representative of natural and legal persons in mediation processes.',
           ],
         },
         footer:{
          opc1: 'Home',
          opc2: 'Carrer Path',
          opc3: 'Services',
          opc4: 'Contact',
          social: 'Join the conversation',
         },
         about: {
          titleLittle: 'What is ADR? ',
          descriptionLittle: '•	By ADR we refer to Alternative Dispute Resolution Mechanisms. By mechanisms we mean processes, such as mediation and arbitration.',
          title: 'Alternative, to what?',
          description: '•	To the traditional and jurisdictional processes by which a competent authority knows and resolves the dispute that arises.<br/><br/>Mediation and arbitration are examples of ADR<br/><br/><span>•	Mediation</span> is a process in which a third-party facilitator (who is not a judge nor an arbitrator) professionally assist the parties involved in a dispute in family, civil and commercial matters, among others, with the purpose that they be the ones who resolve their dispute, and by doing that, they will meet their respective needs. <br/><br/> It is a negotiation assisted by a neutral third party: the mediator or facilitator.<br/><br/> A successful mediation allows us to avoid a trial or an arbitration, or to end the lawsuit or arbitration that has been initiated by one of the parties.  <br/><br/> The disputes that can be resolved in a mediation are those derived from familiar, civil and commercial conflicts related to a breach of contract.  In general, almost any type of matter can be subject to mediation and conciliation procedures.<br/><br/><span>•	Arbitration</span>    is a process in which an arbitrator (who is not a judge) knows and resolves any disputes arising from a contract or business relationship, in a final and binding way.<br/><br/> The disputes that can be resolved in an arbitration are those of a commercial nature, for example, contractual breaches and what legally derives from it.<br/><br/> The resolution issued by the arbitrator, the award, has the same legal force than the sentence rendered by a judge.',
         },
         trayectoria:{
          sendButton: 'Send Message',
          title: 'Professional Resume',
          details: `Carolina Castellanos López obtained her Law Degree from Instituto Tecnológico Autónomo de México (ITAM).  She has specialized in commercial arbitration and in the management and resolution of conflicts through alternative dispute resolution (ADR). She served as Secretary General of the Arbitration Center of Mexico (CAM) for 10 years, where she was in charge of the management of over 70 arbitration processes, national and international, related to commercial matters of the construction, telecommunications, franchising, energy and intellectual property sectors, inter alia. <br /><br /> Carolina has been professor at Universidad Panamericana’s law school and at the Instituto Tecnológico y de Estudios Superiores de Monterrey (ITESM) San Luis Potosi, Santa Fe and Mexican State campus. She has also been professor of the master programs of mediation offered by the Judicial Power of Guanajuato, México, and the Judicial Power of Guerrero, México. She is currently professor of the Diplomat on Corporate Law at the ITAM, as well as professor and academic coordinator of the Diplomat on ADR’s at the ITAM <br /><br /> On her independent legal practice, Carolina Castellanos López represents private companies as legal counsel in national and international arbitration, administered or ad hoc, as well on judicial proceedings related to arbitration; she serves as private law arbitrator; as private mediator; and provides consultancy on alternative dispute resolution mechanisms <br /><br /> President of the Arbitration Center of México (CAM) Board of Directors <br /><br />  <span>Professional summary</span> <br /><br /> <span>Consultant Lawyer in Alternative Dispute Resolution</span>, January 2014 – Currently <br /><br /><span> President of the Arbitration Center of México (CAM) Board of Directors</span>, March 2020 – Currently <br /><br /><span> CEO and Secretary General, Arbitration Center of México (CAM)</span>, November 2004 to December 2013 <br /><br /><span> Academic Coordinator of the Diplomat on Alternative Dispute Resolution Mechanisms (Diplomat on ADR) at ITAM</span>, 2017 <br /><br /> – Currently <br /><br /> <span>Professor at ITAM</span>, January 2015 - Currently. <br /><br /> <span>Professor of Mediation and Conciliation in the Master on Mediation offered by the Judicial Institute of the Judicial Power of Guerrero</span>, México (2017 - Currently). <br /><br /><span> Professor of Mediation and Conciliation in the Specialty in ADR and in the Master in Procedural Law offered by the Judicial School of the Judicial Power of Guanajuato</span>, México (August 2015 - 2017) <br /><br /> <span>Professor at Tecnológico de Monterrey, Mexican State campus</span>, August 2019 – Currently <br /><br /> <span>Professor at Tecnológico de Monterrey, Santa Fe campus</span>, August 2013 – 2015 <br /><br /> <span>Professor at Tecnológico de Monterrey, San Luis Potosí campus</span>, January to May, 2011; and from August to December, 2015 <br /><br /> <span>Visiting Lecturer at Penn State University</span>, November 2009. <br /><br /> <span>Professor at Universidad Panamericana</span>, August 2005 to December 2007 <br /><br /><span> Member of CAM’s Secretariat</span>, July 2002 to November 2004.`,
         }
        }
      }  
    }
}

languageSignal = (a) =>{
 this.setState({
  language: {
   ...this.state.language,
   actual: a,

  }
 })
 
}

sendData = () => {
 if(this.state.language.actual==='En'){
  console.log(this.state.language.en)
  // debugger
  return this.state.language.en
 }else if(this.state.language.actual==='Es'){
  
  return this.state.language.es
 }
}


differNav = (valor,whoIs) =>{
  if(whoIs!==null){

   let es
   let en
   let img
   let titleEs
   let detailsEs
   let titleEn
   let detailsEn
   
   switch(whoIs){
    case 'trayectoria':
     es='Trayectoria'
     en='Carrer Path'
     img=carrerImg
     titleEs= null
     detailsEs= null
     titleEn= null
     detailsEn= null
    break;
    case 'about':
     es=''
     en=''
     img=aboutImg
     titleEs= 'Consultoría en Solución Alternativa de Controversias'
     detailsEs= 'Gestión y solución alternativa de controversias comerciales por medio de procesos de mediación y arbitraje.'
     titleEn= 'Consultancy in Alternative Dispute Resolution'
     detailsEn= 'Management and dispute resolution of commercial disputes through mediation and arbitration processes.'
   }
   
   this.setState({
    
    language: {
     ...this.state.language,
     es:{
      ...this.state.language.es,
      nav: {
       ...this.state.language.es.nav,
       greenDecorateMessage: es,
       greenDecorateImg: img,
       title: titleEs,
       details: detailsEs,
      }
     },
     en: {
      ...this.state.language.en,
      nav: {
       ...this.state.language.en.nav,
       greenDecorateMessage: en,
       greenDecorateImg: img,
       title: titleEn,
       details: detailsEn,
      }
     }
    },
    nav: valor,
  
   }, console.log(this.state))
  }else{
   this.setState({
    // ...this.state,
    language: {
     ...this.state.language,
     es:{
      ...this.state.language.es,
      nav: {
       ...this.state.language.es.nav,
       greenDecorateMessage: ''
      }
     },
     en: {
      ...this.state.language.en,
      nav: {
       ...this.state.language.en.nav,
       greenDecorateMessage: ''
      }
     }
    },
    nav: valor,
  
   }, console.log(this.state))
 
  }

}


render(){
  return (
    <BrowserRouter>
      <Switch>
        <Layout 
        valor={this.state.nav}
        state={this.state.language}
        language={this.sendData()}
        languageSignal={this.languageSignal}
        >
          <Route exact path="/consultoria-carolina/" render={
            ()=> {
             return (
              <Home 
                state={this.sendData()}
                differNav={this.differNav}
                />
              )
            }
          } 
          />
          <Route exact path="/contact/" render={
           () => {
            return (
             <Contact 
             data={this.sendData()}
             differNav={this.differNav}
             />
            )
           }
          } 
          />
         <Route exact path="/trayectoria/"  render={
          () => {
           return (

             <Trayectoria 

             data={this.sendData()}
             differNav={this.differNav}
             
             />
           )
          }
         }
         />
         <Route exact path="/acerca-de/" render={
          () => {
           return (
            <About 
            differNav={this.differNav}
            data={this.sendData()}
            />
           )
          }
         } 
         />
        </Layout>
      </Switch>
    </BrowserRouter>
  )
}

}

export default App;
