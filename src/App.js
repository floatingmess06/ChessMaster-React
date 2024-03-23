import Board from './components/Board/Board';
import './App.css';
import AppContext from './contexts/Context';
import { useReducer } from 'react';
import {reducer} from './reducer/reducer'
import { initGameState } from './constants';

function App() {

  const [appState, dispatch] = useReducer(reducer, initGameState)
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
