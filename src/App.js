import './App.css';
import React from 'react';
import { Score } from './components/score/Score.js';
import { Board } from './components/board/Board.js';
import { useDispatch } from 'react-redux';
import { setBoard, resetCards } from  './components/board/boardAction.js'




const App = () => {
  const dispatch = useDispatch(setBoard());


  const startGameHandler = () => {
    dispatch(setBoard());
  };
  const tryAgainHandler = () => {
    dispatch(resetCards())

  };



  return (
    <div className="App">
      <Score />
      <Board />
      <footer className="footer">
        <button onClick={startGameHandler} className="start-button">
          Start Game
        </button>
        <button onClick={tryAgainHandler} className="try-new-pair-button">
          Click New Pair
        </button>
      </footer>
    </div>
  );
};

export default App;
