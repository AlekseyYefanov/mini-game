
import React, { FC } from 'react';

import cx from 'classnames';

import { Button } from '@components/Button';
import styles from './gamePanel.module.scss';

export interface GamePanelPropTypes {
    dataForStart: {
        count: number;
        setCount: React.Dispatch<React.SetStateAction<number>>;
    }
    isStartGame: boolean;
    handleStartGame: () => void;
}

export const GamePanel: FC<GamePanelPropTypes> = ({ dataForStart, isStartGame, handleStartGame }) => {

    const { count, setCount } = dataForStart;
    
    const handleChangeCount = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCount(Number(event.target.value))
    }

    return (
        <div className = { cx(styles.wrap) }>
            <h1>Міні гра</h1>
           <div>
                <p>Швидкість для вибору (у мілісекундах)</p>
                <label>
                    <input 
                        type='number' 
                        placeholder='Час у мілісекундах' 
                        value = { count } 
                        onChange={handleChangeCount}
                        disabled = { isStartGame }
                    />
                </label>
           </div>
           <Button text = { isStartGame ? 'Почати заново' : "Старт" } onClick={handleStartGame} />
        </div>
    );
};
