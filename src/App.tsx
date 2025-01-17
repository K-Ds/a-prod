import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store';
import Router from './routes';

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    </Provider>
  );
}

export default App;
