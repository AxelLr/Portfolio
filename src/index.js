import React,{lazy, Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import CircularProgress from '@material-ui/core/CircularProgress';
const TotalContainer = lazy(() => import('./components/total-container/TotalContainer'))

ReactDOM.render(
<Suspense fallback={

    <div className='lazy-loading'> 
        <span> <CircularProgress style={{margin: 'auto'}} size={200} /> </span> 
    </div>}> < TotalContainer />

</Suspense>, document.getElementById('root'));

serviceWorker.unregister();
