import './Pieces.css'
import Piece from './Piece'
import { createPosition, copyPosition } from '../../helper'
import { useState, useRef } from 'react'
const Pieces =  () => {
    
    const [state,setState] = useState(createPosition())
    const ref = useRef()

    const calculateCoords = e =>{
        const {width, left, top} = ref.current.getBoundingClientRect();
        const size = width / 8
        const y = Math.floor((e.clientX - left) / size)
        const x = 7-Math.floor((e.clientY - top) / size)
        return {x,y};
    }

    const onDrop = e =>{
        const newPosition = copyPosition(state)

        // console.log(e.clientX, e.clientY);
        const {x,y} = calculateCoords(e)
        const [p,rank,file] = e.dataTransfer.getData('text').split(',')

        newPosition[rank][file] = ''
        newPosition[x][y] = p

        setState(newPosition)
    }
    const onDragOver = e => e.preventDefault()

    return <div 
        ref={ref}
        onDrop={onDrop}
        onDragOver={onDragOver}
        className="pieces">
        {state.map((r,rank) => 
            r.map((f,file) => 
                state[rank][file]
                ? <Piece
                    key={rank+'-'+file}
                    rank={rank}
                    file={file}
                    piece={state[rank][file]}
                /> : null 
            )
        )}
    </div>
}

export default Pieces