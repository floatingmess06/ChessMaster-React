import "./Pieces.css";
import Piece from "./Piece";
// import { copyPosition } from "../../helper";
import { useRef } from "react";
import { useAppContext } from "../../contexts/Context";
import { makeNewMove, clearCandidates } from "../../reducer/actions/move";
import arbiter from "../../arbiter/arbiter";
const Pieces = () => {
  const { appState, dispatch } = useAppContext();
  // const [state,setState] = useState(createPosition())
  const ref = useRef();

  const currentPosition = appState.positions[appState.positions.length - 1];

  const calculateCoords = (e) => {
    const { width, left, top } = ref.current.getBoundingClientRect();
    const size = width / 8;
    const y = Math.floor((e.clientX - left) / size);
    const x = 7 - Math.floor((e.clientY - top) / size);
    return { x, y };
  };

  const move = (e) => {
    // console.log(e.clientX, e.clientY);
    const { x, y } = calculateCoords(e);
    const [piece, rank, file] = e.dataTransfer.getData("text").split(",");
    if (appState.candidateMoves?.find((m) => m[0] === x && m[1] === y)) {
      const newPosition = arbiter.performMove({
        position: currentPosition,
        piece,
        rank,
        file,
        x,
        y,
      });
      dispatch(makeNewMove({ newPosition }));
    }
    dispatch(clearCandidates());
  };
  //     const newPosition = copyPosition(currentPosition)
  //         if(p.endsWith('p') && newPosition[x][y] === '' && rank !== x && file !== y){
  //             newPosition[rank][y] = ''
  //         }
  //         newPosition[rank][file] = ''
  //         newPosition[x][y] = p
  //         dispatch(makeNewMove({newPosition}))
  //     dispatch(clearCandidates())
  // }

  const onDrop = (e) => {
    e.preventDefault();

    move(e);
  };
  const onDragOver = (e) => e.preventDefault();

  return (
    <div className="pieces" ref={ref} onDrop={onDrop} onDragOver={onDragOver}>
      {currentPosition.map((r, rank) =>
        r.map((f, file) =>
          currentPosition[rank][file] ? (
            <Piece
              key={rank + "-" + file}
              rank={rank}
              file={file}
              piece={currentPosition[rank][file]}
            />
          ) : null
        )
      )}
    </div>
  );
};

export default Pieces;
