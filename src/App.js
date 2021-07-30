import { useReducer } from 'react';
import reducer, { initReducer } from './reducer';
import AppContext from './reducer/AppContext';
import App from './components/index';
import ErrorBoundary from './components/errorBoundry';

function MainPage() {
  const [state, dispatch] = useReducer(reducer, initReducer);
  return (
    <ErrorBoundary>
      <AppContext.Provider value={{ state, dispatch }}>
        <App />
      </AppContext.Provider>
    </ErrorBoundary>
  );
}

export default MainPage;
