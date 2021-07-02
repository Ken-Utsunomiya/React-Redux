// Import the React and ReactDOM libraries
import React from 'react'
import ReactDOM from 'react-dom'
import faker from 'faker'
import CommentDetail from './CommentDetail.js'
import ApprovalCard from './ApprovalCard.js'

// Create a React component
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          name="Sam"
          time="18:00"
          text="Nice comment!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          name="Tim"
          time="12:00"
          text="Second comment!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          name="Chuck"
          time="1:00"
          text="Last comment!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  )
}

// Take the React component nd show it on the browser
ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
