import React from 'react'
import {observer} from 'mobx-react'
import {observable, computed} from 'mobx'

@observer 
class Calculator extends React.Component {
  @observable amount1 = 0
  @observable amount2 = 0

  @computed
  get total() {
    return +this.amount1 + +this.amount2
  }

  render () {
    const {amount1, amount2, total} = this

    return (
      <div>
        <h2>Calculator (@computed)</h2>
        <div>
          <div>
          Amount 1:
            <input
              type='number' 
              onChange={(e) => {Object.assign(this, {amount1: e.target.value})}}
              value={amount1}/>
          </div>

          <div>
          Amount 2:
            <input
              type='number'
              onChange={(e) => {Object.assign(this, {amount2: e.target.value})}}
              value={amount2}/>
          </div>
        <div>
          Total : {total}
        </div>
        </div>
      </div>
    )
  }
}

export default Calculator
