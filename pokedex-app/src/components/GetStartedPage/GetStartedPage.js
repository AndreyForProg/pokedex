import React from 'react'
import '../../App.scss'
import {NavLink} from 'react-router-dom'

export const GetStartPage = () => {
  return (
    <div className="start_wrapper">
      <NavLink to='/MainContent'>
        <button className="btn start_btn">Get Starting</button>
      </NavLink>
    </div>
  )
}