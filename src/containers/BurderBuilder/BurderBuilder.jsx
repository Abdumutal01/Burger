import React, { Component } from 'react'
import Auks from '../../hoc/Auks'
import Burger from '../../components/Burger/Burger'

export default class BurderBuilder extends Component {
  render() {
    return (
      <div>
        <Auks>
            <Burger />
            <div>Burger Controls  </div>
        </Auks>
      </div>
    )
  }
}
