import React, { useState, useEffect } from 'react';

import { GamePanel } from '@components/GamePanel';
import { GameItem } from '@components/GameItem'
import { Timer } from '@components/Timer'
import Scoreboard from '@components/Scoreboard';
import Modal from '@components/Modal';

import { getRandomItem } from '@utils/getRandomItem';
import { fillDefaultCell } from '@utils/fillDefaultCell';
import { CELL_COUNT, DEFAULT_TIME_TO_CLICK, COUNT_TO_WIN } from '@utils/settings';

import styles from './gameBoard.module.scss'

const GameBoard = () => {
  const [cells, setCells] = useState(fillDefaultCell(CELL_COUNT));
  const [usedCell, setUsedCell] = useState<number[]>([]);
  const [activeCell, setActiveCell] = useState<number | null>();
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const [count, setCount] = useState<number>(DEFAULT_TIME_TO_CLICK);
  const [isStartGame, setIsStartGame] = useState<boolean>(false);
  const [timerKey, setTimerKey] = useState<number>(Date.now());

  useEffect(() => {
    if (playerScore === COUNT_TO_WIN || computerScore === COUNT_TO_WIN) {
      setIsStartGame(false);
      setIsOpenModal(true);
    }
  }, [playerScore, computerScore]);

  const dataForStart = {
    count,
    setCount,
  }

  const resetGame = () => {
    setActiveCell(null);
    setUsedCell([]);
    setPlayerScore(0);
    setComputerScore(0);
  }

  const onStartGame = () => {
    resetGame();
    setTimerKey(Date.now());
    const item = getRandomItem(cells, CELL_COUNT);
    
    setUsedCell((prevUsedCell) => ([
      ...prevUsedCell,
      item, 
    ]))

    setActiveCell(item);
    setIsStartGame(true);
  }

  const handleTimerEnd = () => {
    setComputerScore(prev => prev +1)

    if (playerScore !== COUNT_TO_WIN || computerScore !== COUNT_TO_WIN) {
      setTimerKey(Date.now());
      const item = getRandomItem(cells, CELL_COUNT);
      setActiveCell(item);
      setUsedCell((prevUsedCell) => ([
        ...prevUsedCell,
        item, 
      ]))
      
    }
  };

  const handleCellClick = (indx: number) => {

    if(indx === activeCell) {
      setPlayerScore(prev => prev +1)
    } else {
      setComputerScore(prev => prev +1)
    }

    const item = getRandomItem(cells, CELL_COUNT);

    setActiveCell(item);

    setUsedCell((prevUsedCell) => ([
      ...prevUsedCell,
      item, 
    ]))

    setTimerKey(Date.now());
  };

  const checkIsUsed = (indx: number) => usedCell.includes(indx);
  const checkIsActive = (indx: number) => activeCell === indx;

  const renderTimerBlock = () => {
    if(isStartGame) {
      return <Timer 
                count = { count } 
                key = { timerKey } 
                isStartGame = { isStartGame }
                onTimerEnd = { handleTimerEnd } 
            />
    }

    return <p className = { styles.timerTitle }>Час перемагати!</p>
  }

  const handleCloseModal = () => {
    setIsOpenModal(false);
    resetGame();
  }

  return (
    <div className = { styles.gameContainer }>
      <div>
        <GamePanel 
            dataForStart = { dataForStart } 
            isStartGame = { isStartGame } 
            handleStartGame = { onStartGame } 
        />
        <Scoreboard 
            playerScore = { playerScore } 
            computerScore = { computerScore } 
        />
      </div>
      <div>
        { renderTimerBlock() }
        <div className={ styles.gameBoard }>
          {cells.map((_, indx) => (
            <div key = { indx } >
              <GameItem 
                isActive = { checkIsActive(indx) }
                isUsed = { checkIsUsed(indx) } 
                handleClick = { () => handleCellClick(indx) } 
              />
            </div>
          ))}
        </div>
      </div>
      {isOpenModal && <Modal isWin = { playerScore === COUNT_TO_WIN } setIsOpen = { handleCloseModal }/>}
    </div>
  );
};

export default GameBoard;
