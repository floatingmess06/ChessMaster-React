

const Piece = ({rank,file,piece}) => {

    const onDragStart = e => {
        // for removing the + sign
        e.dataTransfer.effectAllowed = 'move'
        e.dataTransfer.setData('text/plain',`${piece},${rank},${file}`)
        // to prevent instant hidening
        setTimeout(() => {
            e.target.style.display = 'none'
        }, 0)
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