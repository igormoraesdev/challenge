import React from 'react';
import {Provider} from 'react-redux';
import {Home} from './pages';
import {store} from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
};
export default App;
