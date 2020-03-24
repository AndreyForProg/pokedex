import React from 'react'

const PokemonType = (props) => {
  const BColor = () => {
    switch(props.types) {
      case 'poison':
        return  '#a59'
      case 'grass':
        return  '#7c5'
      case 'normal':
        return  '#aa9'
      case 'grass':
        return  '#7c5'
      case 'water':
        return  '#39f'
      case 'electric':
        return  '#fc3'
      case 'ice':
        return  '#6cf'
      case 'fighting':
        return  '#b54'
      case 'ground':
        return  '#db5'
      case 'flying':
        return  '#89f'
      case 'psychic':
        return  '#f59'
      case 'bug':
        return  '#ab2'
      case 'rock':
        return  '#ba6'
      case 'chost':
        return  '#66b'
      case 'dragon':
        return  '#76e'
      case 'dark':
        return  '#754'
      case 'steel':
        return  '#aab'
      case 'fire':
        return  '#e9e'

      default: return '#aa9'
      }
    }
  const typeColor = {
    backgroundColor: BColor()
  }
  return (
    <div className='pokemon_type' style={typeColor}>
      {props.types}
    </div>
  )
}

export default PokemonType