import React,{ useContext } from 'react';
import { format } from 'date-fns';
import DayContext from '../../../Context';
import styles from './selectedDay.module.scss'
const SelectedDay = () => {
const [currentDay] = useContext(DayContext)
  return (
    <div className={styles.selectedDayWrapper}>
      <p className={styles.bigDay}>{format(currentDay, 'eeee')}</p>
      <h2 className={styles.bigDate}>{format(currentDay, 'd')}</h2>
    </div>
  );
}

export default SelectedDay;