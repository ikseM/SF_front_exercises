export const TYPES = {
  SELECT_PLAYER: 'SELECT_PLAYER'
}

export const selectPlayer = (player) => {
  return {
    type: TYPES.SELECT_PLAYER,
    player
  }
}
