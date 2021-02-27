import logo from './logo.svg';
import './App.css';

import ComponentA from './components/ComponentA/A.component';

import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" />
        </header>
        <ComponentA />
      </div>
    </Provider>
  );
}

export default App;
