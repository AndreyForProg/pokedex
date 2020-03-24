import React from 'react'
import './App.scss'
import {Route, BrowserRouter, Link} from 'react-router-dom'
import {GetStartPage} from './components/GetStartedPage/GetStartedPage'
import MainContent from './components/MainContent/MainContent'
import AboutPageContainer from './components/AboutPage/AboutPageContainer'

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Route exact path='/' render={() => <GetStartPage/>}/>
        <Route path='/mainContent/'  render={() => <MainContent />}/>
        <Route path='/aboutPage/:id'  render={() => <AboutPageContainer />}/>

      </div>
    </BrowserRouter>
  )
}

export default App
