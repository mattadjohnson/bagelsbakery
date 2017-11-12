import React, { Component } from 'react'
import logo from './bagel-logo.png'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to Bagel's Bakery</h1>
        </header>
        <p className='App-intro'>
          Under Construction
        </p>
      </div>
    )
  }
}

export default App
