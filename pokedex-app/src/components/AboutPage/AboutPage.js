import React from 'react'
import pokemon from '../../assets/images/5.jpg'
import '../../App.scss'
import {Link} from 'react-router-dom'

export default function AboutPage() {
  return (
    <div className="about-page">
      <div className="about-page_wrapper">

        <Link to='/MainContent'>
          <button className="btn about-page_btn-back">go to all</button>
        </Link>

        <div className="about-page_descr">
          <div className="about-page_title">
            <h4>some title</h4>
            <div className="about-page_subtitle">some sub</div>
            <div className="about-page_subtitle">some sub</div>
            <div className="about-page_subtitle">some sub</div>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat similique in numquam ab saepe dolores odio architecto eaque. Nam, quos.</p>
        </div>

        <div className="about-page_photos">
          <img src={pokemon} alt="" className="about-page_mainPhoto"/>
          <div className="about-page_diferentPhotos">
            <img src={pokemon} alt=""/>
            <img src={pokemon} alt=""/>
            <img src={pokemon} alt=""/>
            <img src={pokemon} alt=""/>
            <img src={pokemon} alt=""/>
          </div>
        </div>

      </div>
    </div>
  )
}
