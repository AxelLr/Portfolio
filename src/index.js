import React,{ lazy, Suspense } from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import * as serviceWorker from './serviceWorker'
import Loading from './components/loading/Loading'
const TotalContainer = lazy(() => import('./App'))

ReactDOM.render(
<Suspense fallback={<Loading />} >

    < TotalContainer />

</Suspense>, document.getElementById('root'))

serviceWorker.unregister()
