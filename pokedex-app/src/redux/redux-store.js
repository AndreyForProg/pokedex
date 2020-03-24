import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {allPokemonsReduser} from './allPokemonsReduser'
import {aboutPageReduser} from './aboutPageReduser'

const reducers = combineReducers({
  allPokemons: allPokemonsReduser,
  aboutPage: aboutPageReduser
})

const store = createStore(reducers, applyMiddleware(thunk))
window.store = store

export default store