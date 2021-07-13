import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AppRouter from './routes/AppRouter'

function App() {
  return (
    <AppRouter/>
  );
}

export default App;
