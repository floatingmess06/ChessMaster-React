import { Status } from "../../../constants";
import { useAppContext } from "../../../contexts/Context";
import { setupNewgame } from "../../../reducer/actions/game";
import "./GameEnds.css";

const GameEnds = () => {
  const {
    appState: { status },
    dispatch,
  } = useAppContext();

  if (status === Status.ongoing || status === Status.promoting) {
    return null;
  }

  const iswin = status.endsWith("wins");
  const newGame = () => {
    dispatch(setupNewgame());
  };

  return (
    <div className="popup-inner popup-inner__center">
      <h1>{iswin ? status : "Draw"}</h1>
      <p>{!iswin && status}</p>
      <div className={status}></div>
      <button onClick={newGame}>New Game</button>
    </div>
  );
};

export default GameEnds;
