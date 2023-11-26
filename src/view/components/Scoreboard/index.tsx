import React from 'react';
import { COUNT_TO_WIN } from '@utils/settings';

interface ScoreboardProps {
  playerScore: number;
  computerScore: number;
}

const Scoreboard: React.FC<ScoreboardProps> = ({ playerScore, computerScore }) => {
  return (
    <div className="scoreboard">
      <p>Гравець: {playerScore} / { COUNT_TO_WIN }</p>
      <p>Комп'ютер: {computerScore} / { COUNT_TO_WIN }</p>
    </div>
  );
};

export default Scoreboard;
