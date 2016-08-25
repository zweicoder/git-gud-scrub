import styles from './styles.css';
import React from 'react';
import {Card} from 'react-toolbox/lib/card';

export default function AnimatedCard(props) {
  return <Card {...props} className={styles['hvr-back-pulse']}/>
}