import { lazy } from 'react';
import { createTheme } from '@mui/material';
import { Global, ThemeProvider } from '@emotion/react';
import { Toaster } from 'react-hot-toast';

import { GlobalStyles } from './GlobalStyles';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';

const MainPage = lazy(() => import('./pages/Main/MainPage'));
const OfficesPage = lazy(() => import('./pages/Offices/OfficesPage'));

function App() {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/offices" element={<OfficesPage />} />
        </Route>
      </Routes>
      <Toaster position="top-center" />
      <Global styles={GlobalStyles} />
    </ThemeProvider>
  );
}

export default App;
