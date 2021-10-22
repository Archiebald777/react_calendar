import React, { useContext } from "react";
import { format, isSameDay, isSameMonth} from "date-fns";
import DayContext from "../../../Context";
import styles from './day.module.scss'
import cx from 'classnames'
const Day = ({ thisDay }) => {
  const [currentDay, setCurrentDay] = useContext(DayContext);

  
  
  const daySelector = () => {
    setCurrentDay(thisDay);
  };
  const selectedDay = {
    [styles.selectedDay] : isSameDay(thisDay,currentDay)
  }

  const hiddenDays = {
    [styles.hiddenDays] : !isSameMonth(thisDay, new Date)
  }

   
  return (
    <div onClick={daySelector} className={cx(styles.dayWrapper, selectedDay, hiddenDays)}>
      {format(thisDay, "d")}
    </div>
  );
};

export default Day;
