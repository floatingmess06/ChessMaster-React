import {createPosition} from './helper'

export const Status = {
    'ongoing': 'Ongoing',
    'promoting': 'Promoting',
    'white': 'White wins',
    'black': 'Black wins',
    'stalemate':'Game draws due to stalemate',
    'insufficient':'Game draws due to insufficient material'

}

export const initGameState = {
    positions: [createPosition()],
    turn : 'w',
    movesList: [],
    candidateMoves: [],
    status : Status.ongoing,
    promotionSquare: null,
    castleDirection:{
        w:'both',
        b:'both',
    }
}
