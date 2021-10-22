import React,{ useContext } from 'react';
import { format } from 'date-fns';
import DayContext from '../../../Context';
const SelectedDay = () => {
const [currentDay] = useContext(DayContext)
  return (
    <div>
      <p>{format(currentDay, 'eeee')}</p>
      <h2>{format(currentDay, 'd')}</h2>
    </div>
  );
}

export default SelectedDay;