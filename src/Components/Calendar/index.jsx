import React, { useState } from "react";
import CalendarBody from "./CalendarBody";
import SelectedDay from "./SelectedDay";
import DayContext from "../../Context";
import styles from './calendar.module.scss'

const Calendar = () => {
  const [currentDay, setCurrentDay] = useState(new Date());
  return (
    <DayContext.Provider  value={[currentDay, setCurrentDay]}>
      <div className={styles.calendarWrapper} >
      <SelectedDay currentDay={currentDay} />
      <CalendarBody currentDay={currentDay} setCurrentDay={setCurrentDay} />
      </div>
    </DayContext.Provider>
    
  );
};

export default Calendar;
