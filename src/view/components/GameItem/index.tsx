
import React, { FC } from 'react';

import cx from 'classnames';

import styles from './gameItem.module.scss';

export interface GameItemPropTypes {
    isUsed: boolean;
    isActive: boolean;
    handleClick: () => void;
}

export const GameItem: FC<GameItemPropTypes> = ({ isUsed, isActive, handleClick }) => {

    return (
        <div 
             className = { cx(styles.item, isUsed && styles.isUsed, isActive && styles.isActive) } 
             onClick = { handleClick }
        >
        </div>
    );
};
