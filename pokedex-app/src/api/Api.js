import * as axios from 'axios'

const instance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/'
})

export const API ={
  getAllPokemons( activePage, countOnPage ) {
    return instance.get(`pokemon/?limit=${countOnPage}&offset=${activePage}`)
    .then(response => response.data)
  },

  getPhoto(name) {
    return instance.get(`pokemon/${name}/`)
    .then(response => response.data)
  },

  getAboutPokemon(id) {
    return instance.get(`pokemon/${id}`)
    .then(response => response.data)
  },

  getEggGroupPokemon(id) {
    return instance.get(`egg-group/${id}`)
    .then(response => response.data.pokemon_species)
  }
}