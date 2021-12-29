import { Provider } from 'react-redux';
// import { SecureAppRouter } from './routes/SecureAppRouter';

import store from './redux/store/store';

import './App.css';
import AppRouter from './routes/AppRouter';

const App = () => {
  return (
    <Provider store={store}>
        {/* <SecureAppRouter/> */}
        <AppRouter />
    </Provider>
  );
}

export default App;
