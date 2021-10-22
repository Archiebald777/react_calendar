import { format, startOfWeek, addDays } from "date-fns";
import React, { useContext } from "react";
import Month from "../Month";
import DayContext from "../../../Context";
import styles from './calendarBody.module.scss'
const CalendarBody = () => {
  const [currentDay] = useContext(DayContext);
  return (
    <div className={styles.calendarBodyWrapper}>
      <h2 className={styles.monthSizer}>{format(currentDay, "LLLL yyyy")}</h2>
      <DaysOfWeek />
      <Month />
    </div>
  );
};

function DaysOfWeek() {
  const [currentDay] = useContext(DayContext);
  const startingDate = startOfWeek(currentDay);
  const daysArr = new Array(7).fill(null).map((_, index) => {
    return <div className={styles.sevenDays}>{format(addDays(startingDate, index), "EEEEE")}</div>;
  });
  return <div className={styles.sevenDays}>{daysArr}</div>;
}

export default CalendarBody;
