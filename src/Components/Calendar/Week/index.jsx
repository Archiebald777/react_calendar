import { addDays, format, startOfWeek } from 'date-fns';

function Week( {startingDay} ) {
  const startingDate = startOfWeek(startingDay);
  const daysArr = new Array(7).fill(null).map((_, index) => {
    return (
      <div>
        {format(addDays(startingDate, index), 'd')}
      </div>
    );
  });
  return <div>{daysArr}</div>;
}

export default Week;