import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'
import { Square } from './components/Square.jsx'
import { TURNS } from './constants.js'
import { checkWinner } from './logic/board.js'

function App() {
  // Estado del tablero
  const [board, setBoard] = useState(Array(9).fill(null))
  // Estado del turno
  const [turn, setTurn] = useState(TURNS.X)
  // Estado del ganador
  //  Null es que no hay ganador, false es que hay un empate.
  const [winner,setWinner] = useState(null)

  

  const checkEndGame = (newBoard) => {
    // Verificamos si todas las posiciones del board 
    // son diferentes a null.
    return newBoard.every((square)=> square !== null )
  }

  const updateBoard = (index) => {
    // Si la posición tiene algo, no actualizamos.
    // Si tenemos ganador, no actualizamos.
    if(board[index] || winner) return
    // Actualizamos el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    // Cambiamos el turno.
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    // Revisar si hay ganador.
    const newWinner = checkWinner(newBoard)
    if (newWinner){
      confetti()
      setWinner(newWinner) // Ganador.
    } else if (checkEndGame(newBoard)){
      setWinner(false) // Empate.
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  return (

    <main className='board'>
      <h1>Tic-Tac-Toe</h1>
      <button onClick={resetGame}>Restart</button>
      <section className='game'>
        {
          board.map((square,index)=>{
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          <span className='turn-text'>
            {TURNS.X}
          </span>
        </Square>
        <Square isSelected={turn === TURNS.O}>
          <span className='turn-text'>
            {TURNS.O}
          </span>
        </Square>
      </section>

      {
        winner !== null && (
          <section className='winner'>
            <div className="text">
              <h2>
                {
                  winner === false
                  ? '¡Empate!'
                  : '¡Ganó!'                   
                }
              </h2>
              {
                winner !== false && (
                  <header className='win'>
                    {winner && <Square>{winner}</Square>}
                  </header>
                )
              }
              <footer>
                <button onClick={resetGame}>Empezar de nuevo</button>
              </footer>
            </div>
          </section>
        )
      }
    </main>
  )
}

export default App
