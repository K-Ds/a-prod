import Calendar from 'react-calendar';
import { FaLessThan, FaGreaterThan } from 'react-icons/fa6';

const CalendarView = () => {
  return (
    <Calendar
      prevLabel={
        <div className="text-sm">
          <FaLessThan />
        </div>
      }
      nextLabel={
        <div className="text-sm">
          <FaGreaterThan />
        </div>
      }
      navigationLabel={({ date, label, locale, view }) => (
        <div className="font-semibold mx-3 mb-5 flex items-center">{label}</div>
      )}
      next2Label={<div className="hidden"></div>}
      prev2Label={<div className="hidden"></div>}
      showNeighboringMonth={false}
      tileClassName="my-2"
    />
  );
};

export default CalendarView;
