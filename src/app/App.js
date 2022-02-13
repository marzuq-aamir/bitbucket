import './App.css';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import RoutesMap from './route';

function App() {
  return (
    <Router>
        <RoutesMap/>
    </Router>
  );
}

export default App;
