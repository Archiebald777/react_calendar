import { addDays, format, startOfWeek } from "date-fns";
import Day from "../Day";
const Week = (props) => {
  const weekStarter = startOfWeek(props.useDay);
  const daysArr = new Array(7).fill(null).map((_, index) => {
    return <Day thisDay={addDays(weekStarter, index)} />;
  });
  return <div style = {{display: 'flex'}}>{daysArr}</div>;
};

export default Week;
