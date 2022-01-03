import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import { useRoutes } from 'react-router';
import './App.css';
import useSettings from './hooks/useSettings';
import routes from './routes';
import { createCustomTheme } from './theme';

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
