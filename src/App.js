import { Provider } from 'react-redux';
import './App.css';
import AppRouter from './routes/AppRouter'
import { SecureAppRouter } from './routes/SecureAppRouter';

import store from './redux/store/store';

function App() {
  return (
    <Provider store={store}>
        {/* <SecureAppRouter/> */}
        <AppRouter />
    </Provider>
  );
}

export default App;
