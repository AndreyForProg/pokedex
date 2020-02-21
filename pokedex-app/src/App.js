import React from 'react'
import './App.scss'
import {Route, BrowserRouter, Link} from 'react-router-dom'
import {GetStartPage} from './components/GetStartedPage/GetStartedPage'
import MainContent from './components/MainContent/MainContent'
import AboutPage from './components/AboutPage/AboutPage'

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Route exact path='/' render={() => <GetStartPage/>}/>
        <Route path='/mainContent'  render={() => <MainContent />}/>
        <Route path='/aboutPage'  render={() => <AboutPage />}/>

      </div>
    </BrowserRouter>
  )
}

export default App
