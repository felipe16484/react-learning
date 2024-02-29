import { WINNER_COMBOS } from '../constants.js'

export const checkWinner = (boardToCheck) => {
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