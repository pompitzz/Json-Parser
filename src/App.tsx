import React, { useState } from 'react';
import { createMuiTheme, CssBaseline, MuiThemeProvider } from '@material-ui/core';
import MainTemplate from './components/MainTemplate';
import routes from './routes/routes';

const DARK_THEME = 'theme';

function App() {
  const [darkTheme, setDarkTheme] = useState(localStorage.getItem(DARK_THEME) === 'true');
  const changeTheme = () => {
    const themeToBeChanged = !darkTheme;
    setDarkTheme(themeToBeChanged);
    localStorage.setItem(DARK_THEME, themeToBeChanged.toString());
  };
  const theme = createMuiTheme({
    palette: {
      type: darkTheme ? 'dark' : 'light',
    }
  });
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <MainTemplate routes={routes} changeTheme={changeTheme} darkTheme={darkTheme} />
    </MuiThemeProvider>
  );
}

export default App;
