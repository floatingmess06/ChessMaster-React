import { actionTypes } from "./actionTypes";
export const reducer = (state, action) =>{
     switch (action.type) {
          case actionTypes.NEW_MOVE : {
               let {positions, turn} = state
               turn = turn === 'w'? 'b':'w'

               positions = [
                    ...positions,
                    action.payload.newPosition
               ]
               return {
                    ...state,
                    positions,
		    turn,
               }
          }

          case actionTypes.GENERATE_CANDIDATE_MOVES : {
		const {candidateMoves} = action.payload
               return {
                    ...state,
                    candidateMoves
               };
          }

          case actionTypes.CLEAR_CANDIDATE_MOVES : {
               return {
                    ...state,
                    candidateMoves: []
               };
          }
          default:
               return state
     }
}
