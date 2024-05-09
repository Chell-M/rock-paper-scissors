//requirements
//user must select an option before starting game
// start game button should be disabled until user selects option
// clicking on start game runs cpu logic(generates random option)
// display reset button thats dissabled until winner is announced
//
//add reset function
//start game
import './App.css';
import React, { useState } from 'react'

function App() {

  const [userSelection, setUserSelection] = useState('')
  const [cpuSelection, setCpuSelection] = useState('')
  const [winner, setWinner] = useState()

  const generateCpuSelection = () => {
    const options = ['rock', 'paper', 'scissors']
    const randomIndex = Math.floor(Math.random() * options.length);
    setCpuSelection(options[randomIndex])
  }

  const updateUserSelection = (selection) => {
    setUserSelection(selection)
  }


  const calculateWinner = () => {
    //value is what loses
    const lookup = {
      rock: 'paper',
      paper: 'scissors',
      scissors: 'rock'
    }
    if (userSelection === cpuSelection) {
      setWinner('Tie')
      return;
    }
    if (lookup[userSelection] === cpuSelection) {
      setWinner('Cpu')
      return;
    }
    setWinner('User')
  }

  const resetGame = () => {
    //reset stats
  }

  const startGame = () => {
  }





  return (
    <div className="App">
      <button>Start Game</button>
      <p>selected option: {userSelection}</p>
      <h3>user options</h3>
      <button onClick={() => updateUserSelection('rock')}>Rock</button>
      <button onClick={() => updateUserSelection('paper')}>Paper</button>
      <button onClick={() => updateUserSelection('scissors')}>Scissors</button>
      <p>selected CPU Option: {cpuSelection}</p>
      <p>display winner</p>
      <button onClick={() => calculateWinner()}>View Results</button>
      <h1>{winner}</h1>
    </div>
  );
}

export default App;
