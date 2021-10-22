import { addDays, format, startOfWeek } from "date-fns";
import Day from "../Day";
import styles from './week.module.scss'
const Week = (props) => {
  const weekStarter = startOfWeek(props.useDay);
  const daysArr = new Array(7).fill(null).map((_, index) => {
    return <Day thisDay={addDays(weekStarter, index)} />;
  });
  return <div className={styles.weekWrapper}>{daysArr}</div>;
};

export default Week;
