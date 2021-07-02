import React, { useState } from 'react'
import Dropdown from './components/Dropdown'
import Accordion from './components/Accordion'
import Search from './components/Search'
import Translate from './components/Translate'
import Route from './components/Route'
import Header from './components/Header'

const items = [
  {
    title: 'What is react?',
    content: 'Javascript framework'
  },
  {
    title: 'Dog name?',
    content: 'Jack'
  },
  {
    title: 'Cat name?',
    content: 'Mochi'
  }
]

const options = [
  {
    label: 'The color Red',
    value: 'red'
  },
  {
    label: 'The color Blue',
    value: 'blue'
  },
  {
    label: 'The color Green',
    value: 'green'
  }
]

const App = () => {
  const [selected, setSelected] = useState(options[0])
  return (
    <div>
      <div>
        <Header />
      </div>
      <Route path='/'>
        <Accordion items={items}/>
      </Route>
      <Route path='/list'>
        <Search />
      </Route>
      <Route path='/dropdown'>
        <Dropdown
          label='Select a color'
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path='/translate'>
        <Translate />
      </Route>
    </div>
  )
}

export default App
