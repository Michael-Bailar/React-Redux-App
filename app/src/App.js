import React from 'react';
import './App.css';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import { mtgReducer as reducer } from './reducers/mtgReducer'
import CardList from './components/CardList'
import CardForm from './components/CardForm'

const store = createStore(reducer, applyMiddleware(thunk))

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>MTG Cards</h1>
        <CardForm />
        <CardList />
      </div>
    </Provider>
  );
}
