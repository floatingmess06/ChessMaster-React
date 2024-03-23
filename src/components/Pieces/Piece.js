import arbiter from '../../arbiter/arbiter';
import { useAppContext }from '../../contexts/Context'
import { generateCandidateMoves } from '../../reducer/actions/move';

const Piece = ({rank,file,piece}) => {

    const {appState, dispatch} = useAppContext()
    const { turn,positions} = appState
    const currentPosition = positions[positions.length - 1]
    const prevPosition = positions[positions.length - 2]


    
    const onDragStart = e => {
        // for removing the + sign
        e.dataTransfer.effectAllowed = "move"
        e.dataTransfer.setData("text/plain",`${piece},${rank},${file}`)
        // to prevent instant hidening
        setTimeout(() => {
            e.target.style.display = 'none'
        }, 0)
        if(turn === piece[0]){
            const candidateMoves = arbiter.getValidMoves({position:currentPosition,prevPosition:prevPosition, piece, file,rank})
            dispatch(generateCandidateMoves({candidateMoves}));
        }
    }
    
    const onDragEnd = e => e.target.style.display = 'block'
    
    return (<div 
        className={`piece ${piece} p-${file}${rank}`}
        draggable={true}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
    />)
}

export default Piece 
