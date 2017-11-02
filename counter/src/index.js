import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter'

import { createStore } from 'redux'
import counter from './reducers'

const store = createStore(counter)
const rootEl = document.getElementById('root');


const render = () => ReactDOM.render(
    <Counter value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}></Counter>,
    rootEl
)

render()
store.subscribe(render)



