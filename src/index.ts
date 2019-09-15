import { app } from 'react-replay/src'
import { firstComponent } from './components/first-component/first-component'
import { reducer } from './reducers/master-reducer'
import { loadPolyfills } from './utils/polyfills/load-polyfills'

const mount = document.getElementById('app')
loadPolyfills()
app(firstComponent, reducer, mount)
