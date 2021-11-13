import React from 'react';
import {Provider as ReduxProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import {Home} from './pages';
import {persistor, store} from './store';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor}>
        <Home />
      </PersistGate>
    </ReduxProvider>
  );
};
export default App;
