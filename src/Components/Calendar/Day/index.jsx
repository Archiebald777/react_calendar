import React, { useContext } from "react";
import { format } from "date-fns";
import DayContext from "../../../Context";
const Day = ({ thisDay }) => {
  const [currentDay, setCurrentDay] = useContext(DayContext);
  const daySelector = () => {
    setCurrentDay(thisDay);
  };
  return (
    <div onClick={daySelector} style={{ margin: "20px" }}>
      {format(thisDay, "d")}
    </div>
  );
};

export default Day;
