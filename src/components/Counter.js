import React from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'

@observer
class Counter extends React.Component {
  @observable counter = 0

  increment = () => {
    this.counter = this.counter + 1
  }

  render () {
    return (
      <div>
        <p>{this.counter}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    )
  }
}

export default Counter
