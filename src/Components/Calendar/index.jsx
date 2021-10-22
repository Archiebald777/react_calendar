import React, { useState } from "react";
import CalendarBody from "./CalendarBody";
import SelectedDay from "./SelectedDay";
import DayContext from "../../Context";

const Calendar = () => {
  const [currentDay, setCurrentDay] = useState(new Date());
  return (
    <DayContext.Provider value={[currentDay, setCurrentDay]}>
      <SelectedDay currentDay={currentDay} />
      <CalendarBody currentDay={currentDay} setCurrentDay={setCurrentDay} />
    </DayContext.Provider>
  );
};

export default Calendar;
