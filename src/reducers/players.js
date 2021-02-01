import { TYPES } from '../actions/players';

const INITIAL_STATE = '';

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.SELECT_PLAYER:
      return action.player
    default: return state
  }
}
