import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Reset } from 'styled-reset'
import { ThemeProvider }from 'styled-components';
import Home from './pages/home';
import theme from './theme';

function App() {
return (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Reset />
        <Home />
    </ThemeProvider>
  </Provider>
  );
}

export default App;
