import React from 'react'
import '../../App.scss'
import {Spring, config} from 'react-spring/renderprops'
import PokemonList from './PokemonList/PokemonList'
import {Filters} from './Filters/Filters'

const MainContent = () => {
  return (
    <div className="main">
      <div className="wrapper">
        <Filters />
        <PokemonList />
      </div>
    </div>
  )
}

export default MainContent