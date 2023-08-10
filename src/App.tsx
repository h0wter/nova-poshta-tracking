import { createTheme } from '@mui/material';
import { Global, ThemeProvider } from '@emotion/react';
import { GlobalStyles } from './GlobalStyles';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';

const MainPage = lazy(() => import('./pages/Main/MainPage'));
const OfficesPage = lazy(() => import('./pages/Offices/OfficesPage'));

function App() {
  const theme = createTheme({
    palette: {
      mode: 'dark'
    }
  });
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/offices" element={<OfficesPage />} />
        </Route>
      </Routes>
      <Global styles={GlobalStyles} />
    </ThemeProvider>
  );
}

export default App;
