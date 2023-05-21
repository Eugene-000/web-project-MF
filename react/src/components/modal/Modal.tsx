import React, { useEffect, useState } from 'react';
import styles from './Modal.module.scss';
import { useActions } from '../../hooks/useAction';

interface IProps {
    text: string | null
    isVisible: boolean
}

export const Modal:React.FC<IProps> = ({text, isVisible}) => {
    
    return (
        <div className={[styles.mask, isVisible ? styles.show : styles.hide].join(' ')}>
            <div className={styles.container}>
                <p className={styles.text}>{text}</p>
            </div>
        </div>
    )
}
