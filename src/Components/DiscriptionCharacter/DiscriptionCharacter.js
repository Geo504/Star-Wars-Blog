import React from 'react'

import style from './DiscriptionCharacter.module.css'

export const DiscriptionCharacter = ({id ,character}) => {
  const {name, gender, height, mass, skin_color, birth_year} = character;

  return (
    <>

    <div className={`${style.card} card my-4`}>
      <div className="row g-0">

        <div className="col-md-8">
          <img src={`../assets/characters/${id}.jpg`} className={`${style.img} img-fluid rounded-start`} />
        </div>

        <div className={`${style.cardBody} col-md-4`}>
          <div className="card-body">
            <h5 className="card-title text-center">{name}</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
            </p>
          </div>
        </div>

      </div>
    </div>

    <div className={`${style.cardGroup} card-group`}>
      <div className={`${style.cardData} card`}>
        <p className='card-text'>Gender:</p>
        <p className='card-text'>{gender}</p>
      </div>

      <div className={`${style.cardData} card`}>
        <p className='card-text'>Height:</p>
        <p className='card-text'>{height} cm.</p>
      </div>

      <div className={`${style.cardData} card`}>
        <p className='card-text'>Mass:</p>
        <p className='card-text'>{mass} kg.</p>
      </div>

      <div className={`${style.cardData} card`}>
        <p className='card-text'>Skin color:</p>
        <p className='card-text'>{skin_color}</p>
      </div>

      <div className={`${style.cardData} card`}>
        <p className='card-text'>Birth Year:</p>
        <p className='card-text'>{birth_year}</p>
      </div>
    </div>

    </>
    
  )
}
