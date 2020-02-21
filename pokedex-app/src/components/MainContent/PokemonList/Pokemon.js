import React from 'react'
import pokemon from '../../../assets/images/5.jpg'
import {Link} from 'react-router-dom'


const Pokemon = (props) => {
  return (
    <Link to='/aboutPage'>
      <div className="pokemon">
        <img src={pokemon} alt=""/>
        <div><span>N1</span> some pokemon</div>
      </div>
    </Link>
    )
}

export default Pokemon