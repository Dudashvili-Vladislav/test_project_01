import { JSX } from 'react';

import './App.css';

import { AppLayout } from './layout/AppLayout';
import ErrorBoundary from './providers/ErrorBoundary/ErrorBoundary';
import AppRouter from './providers/router/AppRouter';
import ThemeProvider from './providers/ThemeProvider/ThemeProvider';

export const App = (): JSX.Element => {
  return (
    <ThemeProvider>
      <ErrorBoundary>
        <AppLayout>
          <AppRouter />
        </AppLayout>
      </ErrorBoundary>
    </ThemeProvider>
  );
};

export default App;
