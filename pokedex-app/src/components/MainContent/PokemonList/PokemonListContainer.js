import React, { Component } from 'react'
import { connect } from 'react-redux'
import Pokemon from './Pokemon'
import {Spring, config} from 'react-spring/renderprops'
import { setPokemons, setPokemonsGroup } from '../../../redux/allPokemonsReduser'


export class PokemonListApi extends Component {

  componentDidMount() {
    this.props.setPokemons()
  }

  pagination() {
    let paginationItems = []
    const countPages = this.props.count/this.props.countPokOnPage
    for(let i = 0; i < Math.ceil(countPages); i++) {
      paginationItems[i] = i + 1
    }
    return paginationItems
  }

  activePage(page) {
    this.props.setPokemons((page-1)*this.props.countPokOnPage)
  }

  render() {
    return (
      <Spring
        from={{ opacity: '0' }}
        to={{ opacity: '1' }}
        config={{ duration: 1000 }}>
      {props => <div style={props} className="allPlkemons">
        <div className='pagination'>
          <div className={this.props.paginationOnPage ? '' : 'none'}>
            <span onClick={(e) => {
              if (this.props.activeP < this.props.countPokOnPage) {
                return false
              }
              return this.props.setPokemons(this.props.activeP - this.props.countPokOnPage)}}>&larr;</span>

            {this.pagination().map((item, index) => <span className={((this.props.activeP+100)/100)==item ? 'activePagination' : ''} key={index} onClick={() => {this.activePage(item)}}>{item} </span>)}

            <span onClick={() => {this.props.setPokemons(this.props.activeP + this.props.countPokOnPage)}}>&rarr;</span>
          </div>
        </div>
        <div className='pokemonList'>
          {this.props.pokemonList}
        </div>
      </div>}
    </Spring>
    )
  }
}

const mapStateToProps = (state) => ({
  pokemonList: state.allPokemons.pokemonList.map((pokemon, index) => <Pokemon key={index} name={pokemon.name} url={pokemon.url} id={pokemon.id} photo={pokemon.photo} />),
  count: state.allPokemons.count,
  countPokOnPage: state.allPokemons.countPokOnPage,
  activeP: state.allPokemons.activeP,
  paginationOnPage: state.allPokemons.paginationOnPage
})

export default connect(mapStateToProps, {setPokemons, setPokemonsGroup})(PokemonListApi)
