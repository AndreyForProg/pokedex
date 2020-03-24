import React from 'react'
import { connect } from 'react-redux'
import { setPokemons, setPokemonsGroup, setPaginationAC } from '../../../redux/allPokemonsReduser'

const Filters = (props) => {
  return (
    <div className="filters">
      <button className='btn filters_btn' onClick={() => {props.setPokemonsGroup(1)
      props.setPaginationAC(false)}}>Monster</button>
      <button className='btn filters_btn' onClick={() => {props.setPokemonsGroup(2)
      props.setPaginationAC(false)}}>Water</button>
      <button className='btn filters_btn' onClick={() => {props.setPokemonsGroup(3)
      props.setPaginationAC(false)}}>Bug</button>
      <button className='btn filters_btn' onClick={() => {props.setPokemonsGroup(4)
      props.setPaginationAC(false)}}>Flying</button>
      <button className='btn filters_btn' onClick={() => {props.setPokemonsGroup(6)
      props.setPaginationAC(false)}}>Fairy</button>
      <button className='btn filters_btn' onClick={() => {props.setPokemonsGroup(7)
      props.setPaginationAC(false)}}>Plant</button>
      <button className='btn filters_btn' onClick={() => {props.setPokemonsGroup(8)
      props.setPaginationAC(false)}}>Humanshape</button>
      <button className='btn filters_btn' onClick={() => {props.setPokemonsGroup(9)
      props.setPaginationAC(false)}}>Water3</button>
      <button className='btn filters_btn' onClick={() => {props.setPokemonsGroup(10)
      props.setPaginationAC(false)}}>Mineral</button>
      <button className='btn filters_btn' onClick={() => {props.setPokemonsGroup(11)
      props.setPaginationAC(false)}}>Indeterminate</button>
      <button className='btn filters_btn' onClick={() => {props.setPokemonsGroup(12)
      props.setPaginationAC(false)}}>Water2</button>
      <button className='btn filters_btn' onClick={() => {props.setPokemonsGroup(14)
      props.setPaginationAC(false)}}>Dragon</button>
      <button className='btn filters_btn' onClick={() => {props.setPokemons()
      props.setPaginationAC(true)}}>all</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  count: state.allPokemons.count,
  countPokOnPage: state.allPokemons.countPokOnPage,
  activeP: state.allPokemons.activeP,
  paginationOnPage: state.allPokemons.paginationOnPage
})

export default connect(mapStateToProps, { setPokemons, setPokemonsGroup, setPaginationAC })(Filters)