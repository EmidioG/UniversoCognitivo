import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './global/style/theme';
import Routes from './routes';
import { ItensProvider } from './context/ItensContext';
const App = () => {
  return (
    <>
      <ItensProvider>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </ItensProvider>
    </>
  );
};

export default App;
