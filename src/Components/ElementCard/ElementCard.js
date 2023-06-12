import React from 'react'
import { Link } from 'react-router-dom';

import  style from './ElementCard.module.css'
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';

// const peopleImage = require.context('../../Images', true);
// peopleImage(`./Character-${id}.jpg`)

// `../../src/Images/Character-${id}.jpg`


export const ElementCard = ({elementType, uid, id, favorite, title, favoriteFuntion, children}) => {
  return (
    <div className={`${style.card} card g-col-12 g-col-sm-6 g-col-lg-3`}>
      <img src={`https://starwars-visualguide.com/assets/img/${elementType}/${uid}.jpg`} className={`${style.cardImgTop} card-img-top`} />
      
      <div className={`${style.cardBody} card-body`}>
        <h5 className={`${style.cardTitle} card-title`}>{title}</h5>
        
        <div className={`${style.cardText} card-text`}>
          {children}
        </div>
        
        <div className={`${style.containerButtons} container-Buttons`}>
          <Link to={`/${elementType}/${id}`} className="btn btn-dark">View more!</Link>
          {
            favorite
            ?<AiFillHeart className={style.iconCard} onClick={()=>favoriteFuntion(id)} />
            :<AiOutlineHeart className={style.iconCard} onClick={()=>favoriteFuntion(id)} />
          }
        </div>
        
      </div>
    </div>
  )
}