import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import theme from './assets/theme';
import { persistor, store } from './util/redux/store';
import ToxicTraitsMain from './ToxicTraits/ToxicTraitsMain';
import ToxicTraitsUser from './ToxicTraits/ToxicTraitsUser';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider theme={theme}>
              <CssBaseline>
                <Routes>
                  <Route path="/" element={<ToxicTraitsMain />} />
                  <Route path="/profile/:id" element={<ToxicTraitsUser />} />
                </Routes>
              </CssBaseline>
            </ThemeProvider>
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
