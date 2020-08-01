import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store  from "./redux/store";


function rerenderEntireTree(state){
  console.log( state );
  return ReactDOM.render(
    <React.StrictMode>
          <App state={state}
               dispatch ={store.dispatch.bind(store)} />
    </React.StrictMode>,
    document.getElementById('root')
  )
}
rerenderEntireTree(store._state);
store.subscriber(rerenderEntireTree);

