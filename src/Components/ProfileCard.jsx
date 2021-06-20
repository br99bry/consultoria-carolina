import React from 'react';

import './styles/ProfileCard.scss';

const profileCard = (props) => {
  return (
    <div className="ProfileCard">
      <img src={props.profile} alt="" className="ProfileCard__img"/>
      <h4 className="ProfileCard__name"> {props.name} </h4>
      <h6 className="ProfileCard__titleJob"> {props.job} </h6>
      <div className="ProfileCard__social">
        <div className="ProfileCard__social-item">
          <img src={props.Facebook} alt=""/>
        </div>
        <div className="ProfileCard__social-item">
          <img src={props.Twitter} alt=""/>
        </div>
        <div className="ProfileCard__social-item">
          <img src={props.Linkedln} alt=""/>
        </div>
      </div>
      <h6 className="ProfileCard__option"> {props.option} </h6>
    </div>
  )
}

export default profileCard;