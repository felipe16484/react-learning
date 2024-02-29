export const TURNS = {
    X:'x',
    O:'o'
  }
  
export const WINNER_COMBOS = [
    [0,1,2], //
    [3,4,5], // Verticales
    [6,7,8], //____________
    [0,3,6], //
    [1,4,7], // Horizontales
    [2,5,8], //____________
    [0,4,8], //
    [2,4,6]  // Diagonales
]