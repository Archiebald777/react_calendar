import React, { useContext } from "react";
import { startOfWeek, addDays, getWeeksInMonth, startOfMonth } from "date-fns";
import Week from "../Week";
import DayContext from "../../../Context";

const Month = () => {
  const [currentDay] = useContext(DayContext);
  const amountOfWeeks = getWeeksInMonth(currentDay);
  const monthStarter = startOfMonth(currentDay);
  return (
    <div>
      {new Array(Number([amountOfWeeks])).fill(null).map((_, index) => {
        return <Week useDay={addDays(monthStarter, 7 * index)} />;
      })}
    </div>
  );
};

export default Month;
