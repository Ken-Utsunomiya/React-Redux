// Import the React and ReactDOM libraries
import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay.js'
import Spinner from './Spinner.js'

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
//   )
//   return <div>Latitude: </div>
// }

class App extends React.Component {
  // constructor(props) {
  //   super(props)

  //   // state initialization
  //   // this.state = { lat: null, errorMessage: '' }
  // }

  // constructor not needed
  state = { lat: null, errorMessage: '' }

  // data loading
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    )
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }
    return <Spinner message="Please accept location request."/>
  }

  // only one return statement is better
  render () {
    return (
      <div className="border red">
        {this.renderContent()}
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector("#root"))
