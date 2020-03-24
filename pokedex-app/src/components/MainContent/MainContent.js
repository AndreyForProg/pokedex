import React from 'react'
import '../../App.scss'
import {Spring, config} from 'react-spring/renderprops'
import PokemonListContainer from './PokemonList/PokemonListContainer'
import {Route} from 'react-router-dom'
import FiltersContainer from './FiltersContainer/FiltersContainer'

const MainContent = () => {
  return (
    <div className="main">
      <div className="wrapper">
        <FiltersContainer />
        <PokemonListContainer />
      </div>
    </div>
  )
}

export default MainContent