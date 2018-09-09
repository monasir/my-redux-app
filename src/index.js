import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Votes from './data/Votes';
//import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
//import myApp from './reducers';
import rootReducer from './reducers';
import {Provider} from 'react-redux';
//import Results from './components/results';
const defaultData = {
  Votes
}


const store = createStore(rootReducer,defaultData);

/*function render() {
  ReactDOM.render(
    <div className="container">
      <App store={store}/>
      <hr />
      <Results store={store}/>
    </div>,
    document.getElementById('root')
  );
}
store.subscribe(render);
render();*/

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>  
, document.getElementById('root'));

