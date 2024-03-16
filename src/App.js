import Board from './components/Boards/Board';
import './App.css';
import AppContext from './contexts/Context';
import { useReducer } from 'react';
import reducer from './reducer/reducer'

function App() {

  const [appState, dispatch] = useReducer(reducer, {})
  const providerState = {
    appState,
    dispatch
  }
  return (
    <AppContext.Provider value={providerState}>
      <div className="App">
        <Board/>
      </div>
    </AppContext.Provider>
     
  );
}

export default App;
