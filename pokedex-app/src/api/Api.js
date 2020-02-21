import * as axios from 'axios'

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://pokeapi.co/api/v2/'
})

export const API ={
  getAllPokemons( activePage=0, countOnPage=70 ) {
    return instance.get(`pokemon/?limit=${activePage}&offset=${countOnPage}`)
  }
}