import {API} from '../api/API'

const initState = {
  pokemonList: [],
  count:  '',
  countPokOnPage: 100,
  activeP: '0',
  paginationOnPage: true,
  pageId: 1
}

export const allPokemonsReduser = (state = initState, action) => {
  switch (action.type) {
    case 'SET_DATA_PAGE':
      return {
        ...state,
        pokemonList: [...action.pokemons],
        count: action.count,
        activeP: action.activeP
      }

    case 'SET_POKEMON' :
      return {
        ...state,
        pokemonList: state.pokemonList.map(pokemon => {
          if (pokemon.name === action.name) {
            return {...pokemon, photo: action.photo, id: action.id}
          }
          return pokemon
        })
      }

    case 'SET_PAGINATION' :
      return {
        ...state,
        paginationOnPage: action.paginationOnPage
      }

    default: return {...state, pokemonList: [...state.pokemonList]}
  }
}

export const setDataPageAC = (count, pokemons, activeP, countPokOnPage) => ({
  type: 'SET_DATA_PAGE',
  count, activeP, countPokOnPage, pokemons
})

export const setPokemonAC = (img, name, id) => ({
  type: 'SET_POKEMON',
  photo: img,
  name,
  id
})

export const setPokemonsGroupAC = (img, name, id) => ({
  type: 'SET_POKEMONS_GROUP',
  photo: img,
  name,
  id
})

export const setPaginationAC = (indicator) => ({
  type: 'SET_PAGINATION',
  paginationOnPage: indicator
})

export const setPokemons = (activeP=0, countPokOnPage=100) => {
  return (dispatch) => {
    API.getAllPokemons(activeP, countPokOnPage)
    .then(response => {
      dispatch(setDataPageAC(response.count, response.results, activeP, countPokOnPage))
      response.results.forEach(pokemon => {
        API.getPhoto(pokemon.name)
        .then(response => {
          dispatch(setPokemonAC(response.sprites.front_default, pokemon.name, response.id))
        })
      })
    })
  }
}

export const setPokemonsGroup = (id, activeP=0, countPokOnPage=100) => {
  return (dispatch) => {
    API.getEggGroupPokemon(id)
    .then(response => {
      dispatch(setDataPageAC(response.length, response, activeP, countPokOnPage))
      response.forEach(pokemon => {
        API.getPhoto(pokemon.name)
        .then(response => {
          dispatch(setPokemonAC(response.sprites.front_default, pokemon.name, response.id))
        })
      })
    })
  }
}