import React, { Component } from 'react'

import InputForm from './components/InputForm'

import logo from './logo.svg'

import './App.css'

class App extends Component { 
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">headspace calculator</h1>
        </header>
        <InputForm />
      </div>
    )
  }
}

export default App
