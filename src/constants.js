import {createPosition} from './helper'

export const initGameState = {
    positions: [createPosition()],
    turn : 'w',
    candidateMoves: [],
}
