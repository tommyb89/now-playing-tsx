import './App.scss';
import {FC} from 'react';
import Dashboard from './containers/Dashboard/Dashboard';

const App: FC = () => {
  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;
