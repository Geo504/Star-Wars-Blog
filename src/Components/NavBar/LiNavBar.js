import React from 'react'

import style from "./NavBar.module.css"
import { BsTrash2 } from 'react-icons/bs';

export const LiNavBar = ({favorites, deleteFavorite}) => {
  if (favorites.length===0){
    return (
      <li className={`${style.liDropdown} li-Dropdown`}>
        <a className="dropdown-item pe-1" href="#">Empty</a>
      </li>
    )
  }

  if (favorites.length>0) {
    return (
      favorites.map(item=>{
        return (
          <li key={item._id} className={`${style.liDropdown} li-Dropdown`}>
            <a className={`${style.dropdownItem} dropdown-item pe-1`} href="#">{item.properties.name}</a>
            <BsTrash2 className={style.iconNavBar} onClick={()=>deleteFavorite(item._id)}/>
          </li>
        )
      })
    )
  }
}
