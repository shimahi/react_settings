import 'ress'
import React from 'react'
import { render } from 'react-dom'

import Hero from './components/Hero'

const App = () => <Hero />

render(<App />, document.getElementById('root'))
