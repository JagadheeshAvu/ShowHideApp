// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isFirst: false, isLast: false}

  onClickFirst = () => {
    this.setState(prevState => ({isFirst: !prevState.isFirst}))
  }

  onClickLast = () => {
    this.setState(prevState => ({isLast: !prevState.isLast}))
  }

  render() {
    const {isFirst, isLast} = this.state
    return (
      <div className="container">
        <div>
          <h1 className="heading">Show/Hide</h1>
          <div>
            <div className="bg-container">
              <div className="button-container">
                <button
                  className="button"
                  type="button"
                  onClick={this.onClickFirst}
                >
                  Show/Hide Firstname
                </button>
                {isFirst && <p className="name">Joe</p>}
              </div>
              <div>
                <div className="button-container">
                  <button
                    className="button"
                    type="button"
                    onClick={this.onClickLast}
                  >
                    Show/Hide Lastname
                  </button>
                  {isLast && <p className="name">Jonas</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
