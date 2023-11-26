
import React, { FC } from "react";

import { RiCloseLine } from "react-icons/ri";
import { Button } from '@components/Button';

import styles from "./modal.module.scss";

export interface ModalPropTypes {
  isWin: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: FC<ModalPropTypes> = ({ isWin, setIsOpen }) => {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Результати</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modalContent}>
             <h3> Ти { isWin ? 'виграв' : 'програв'}</h3>
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <Button text = 'Закрити' onClick={() => setIsOpen(false)} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;