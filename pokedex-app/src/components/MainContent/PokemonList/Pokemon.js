import React from 'react'
import pokemon from '../../../assets/images/5.jpg'
import {Link} from 'react-router-dom'


const Pokemon = (props) => {
  return (
    <Link to={'/aboutPage/' + props.id}>
      <div className="pokemon">
        <img src={props.photo} alt=""/>
        <div className='pokemonList_pokemonName'><span>{props.id}</span> {props.name}</div>
      </div>
    </Link>
    )
}

export default Pokemon