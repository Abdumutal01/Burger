import React, { Component } from 'react'
import './App.css'
import Layout from './components/Layout'
import BurderBuilder from './containers/BurderBuilder/BurderBuilder'

export default class App extends Component {
  constructor() {
    super()

  }
  render() {
    return (
      <div className='App'>
        <h2>Burger Builder</h2>

        <Layout>
          <BurderBuilder />
        </Layout>
      </div>
    )
  }
}
