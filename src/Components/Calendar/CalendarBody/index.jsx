import { format, startOfWeek, addDays } from "date-fns";
import React, { useContext } from "react";
import Month from "../Month";
import DayContext from "../../../Context";

const CalendarBody = () => {
  const [currentDay] = useContext(DayContext);
  return (
    <div>
      <h2>{format(currentDay, "LLLL yyyy")}</h2>
      <DaysOfWeek />
      <Month />
    </div>
  );
};

function DaysOfWeek() {
  const [currentDay] = useContext(DayContext);
  const startingDate = startOfWeek(currentDay);
  const daysArr = new Array(7).fill(null).map((_, index) => {
    return <div>{format(addDays(startingDate, index), "EEEEE")}</div>;
  });
  return <div style = {{display: 'flex'}}>{daysArr}</div>;
}

export default CalendarBody;
