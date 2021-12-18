import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import { useRoutes } from 'react-router';
import routes from './routes';
import { createCustomTheme } from './theme';
import useSettings from './hooks/useSettings';
import { ThemeProvider } from '@material-ui/core';

function App() {
  const content = useRoutes(routes);
  const { settings } = useSettings();

  const theme = createCustomTheme({
    direction: settings.direction,
    responsiveFontSizes: settings.responsiveFontSizes,
    roundedCorners: settings.roundedCorners,
    theme: settings.theme
  });
  
  return (
    <ThemeProvider theme={theme}>
      {content}
    </ThemeProvider>
    
  )
}

export default App;
