import React, { Component } from 'react'
import pokemon from '../../assets/images/5.jpg'
import '../../App.scss'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { getAboutPokemonData } from '../../redux/aboutPageReduser'
import StatItem from './StatItem'
import PokemonType from './PokemonType'

export class AboutPage extends Component {

  componentDidMount() {
    this.props.getAboutPokemonData(this.props.match.params.id)
  }

  render() {
    return (
      <div className="about-page">
        <div className="about-page_wrapper">

          <Link to='/mainContent/'>
            <div className='about-page_btn-back'>
              <button className="btn">go to all</button>
            </div>
          </Link>

          <div className="about-page_descr">
            <div className="about-page_title">
              <h3>{this.props.id}. {this.props.name}</h3>
            </div>
              <div className='statItem'>
                <span>height:</span> {this.props.height/10}m
              </div>
              <div className='statItem'>
                <span>weight:</span> {this.props.weight}kg
              </div>
              <div className='statItem'>
                <span>stats:</span> <StatItem stats={this.props.stats}/>
              </div>
              <div className='statItem'>
                <span>type:</span>
                <div className='pokemonTypes'>
                  {this.props.types}
                </div>
              </div>
          </div>

          <div className="about-page_photos">
            <img src={this.props.imgs.front_default} alt="" className="about-page_mainPhoto"/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  id: state.aboutPage.id,
  name: state.aboutPage.name,
  stats: state.aboutPage.stats,
  types: state.aboutPage.types.map(type => <PokemonType types={type.type.name}/>),
  imgs: {...state.aboutPage.imgs},
  height: state.aboutPage.height,
  weight: state.aboutPage.weight,
  pageId: state.allPokemons.pageId
})

export default compose(
  connect(mapStateToProps, {getAboutPokemonData}),
  withRouter
  )(AboutPage)
