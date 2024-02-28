import { useState } from 'react'
import './App.css'

const TURNS = {
  X:'x',
  O:'o'
}

const Square = ({children,isSelected,updateBoard,index}) =>{

  const className = `square ${isSelected ? 'is-selected' : '' }`

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className} key={index}>
      {children}
    </div>
  )
}

const WINNER_COMBOS = [
  [0,1,2], //
  [3,4,5], // Verticales
  [6,7,8], //____________
  [0,3,6], //
  [1,4,7], // Horizontales
  [2,5,8], //____________
  [0,4,8], //
  [2,4,6]  // Diagonales
]

function App() {
  // Estado del tablero
  const [board, setBoard] = useState(Array(9).fill(null))
  // Estado del turno
  const [turn, setTurn] = useState(TURNS.X)
  // Estado del ganador
  //  Null es que no hay ganador, false es que hay un empate.
  const [winner,setWinner] = useState(null)

  const checkWinner = (boardToCheck) => {
    
    for (const combo of WINNER_COMBOS) {
      // Revisamos todos los combos posibles para ver si X ó O es ganador
      const [a,b,c] = combo
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ){
        return boardToCheck[a]
      }
    }
    // Si no hay ganador
    return null
  }

  const updateBoard = (index) => {
    // Si la posición tiene algo, no actualizamos.
    // Si tenemos ganador, no actualizamos.
    if(board[index] || winner) return
    // Actualizamos el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    // Cambiamos el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    // Revisar si hay ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner){
      setWinner(newWinner)
      alert(`El ganador es ${newWinner}`)
    }
  }

  return (

    <main className='board'>
      <h1>Tic-Tac-Toe</h1>
      <section className='game'>
        {
          board.map((_,index)=>{
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
    </main>
  )
}

export default App
