import 'ress'

import React from 'react'
import { render } from 'react-dom'

const App: React.FC = () => {
  return <h1>Hello React!</h1>
}

render(<App />, document.getElementById('root'))
