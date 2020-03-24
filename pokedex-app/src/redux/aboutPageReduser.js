import {API} from '../api/API'

const initState = {
  stats: [
    {
      base_stat: 40,
      stat: {
        name: 'speed'
      }
    },
    {
      base_stat: 50,
      stat: {
        name: 'speed'
      }
    }
  ],
  types: [
    {
      type: {name: 'posion'}
    }
  ]
}

export const aboutPageReduser = (state=initState, action) => {
  switch (action.type) {
    case 'SET_ABOUT_DATA':
      return {
        ...state,
        id: action.id,
        name: action.name,
        stats: action.stats,
        types: action.types,
        imgs: action.imgs,
        height: action.height,
        weight: action.weight
      }

    default: return {...state}
  }
}

export const setAboutPokemonDataAC = (id, name, stats, types, imgs, height, weight) => ({
  type: 'SET_ABOUT_DATA',
  id, name, stats, types, imgs, height, weight
})

export const getAboutPokemonData = (id) => {
  return (dispatch) => {
    API.getAboutPokemon(id)
    .then(response => {
      dispatch(setAboutPokemonDataAC(response.id, response.name, response.stats, response.types, response.sprites, response.height, response.weight))
    })
  }
}
