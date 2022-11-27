import React, {memo} from "react";
import Counter from "./Counter";
import Icon from "./Icon";
import PropTypes  from "prop-types";

const Player = ({name, score, id, removePlayer, changeScore, isHighestScore}) => {
    return (
      <div className="player">
      {console.log(name + 'render')}
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
          <Icon isHighestScore={isHighestScore} />

  
          {name}
        </span>
  
        <Counter 
        score={score}
        id={id}
        changeScore={changeScore}

         />
      </div>
    );
  }
  Player.propTypes = {
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    removePlayer: PropTypes.func.isRequired,
    changeScore: PropTypes.func.isRequired,
    isHighestScore: PropTypes.bool.isRequired
  }
const playerPropsAreEqual = (prevProps, nextProps) =>{
  return prevProps.score === nextProps.score && prevProps.isHighestScore === nextProps.isHighestScore;
}
  export default memo(Player, playerPropsAreEqual);