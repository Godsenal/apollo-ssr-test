import { hydrate } from 'react-dom'
import renderApp from '../src/client'

hydrate(renderApp, document.getElementById('app'))
