import React from 'react'
import Pokemon from './Pokemon'
import {Spring, config} from 'react-spring/renderprops'

export default function PokemonList() {
  return (
    <Spring
        from={{ opacity: '0' }}
        to={{ opacity: '1' }}
        config={{ duration: 1000 }}>
      {props => <div style={props} className="pokemonList">

        <Pokemon />
        <Pokemon />
        <Pokemon />
        <Pokemon />
        <Pokemon />
        <Pokemon />
        <Pokemon />
        <Pokemon />
        <Pokemon />
        <Pokemon />

      </div>}
    </Spring>
  )
}