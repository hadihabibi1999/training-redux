import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import Counter from './App'
import store from './redux';

const App = () => (
<Provider store={store}>
    <Counter/>
</Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));

