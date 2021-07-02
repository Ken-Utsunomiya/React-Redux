// Import the React and ReactDOM libraries
import React from 'react'
import ReactDOM from 'react-dom'

// function getButtonText() {
//   return 'Click me!'
// }

// Create a React component
const App = () => {
  const buttonText = 'Click me!'

  return (
    <div>
      <label className="label" htmlFor="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        { buttonText }
      </button>
    </div>
  )
}
// Take the React component nd show it on the browser
ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
