"use client";

import { DateRange, Range, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

interface CalendarProps {
  value: Range;
  onChange: (value: RangeKeyDict) => void;
  disabledDates?: Date[];
}

const Calendar = ({ value, onChange, disabledDates }: CalendarProps) => {
  return (
    <DateRange
      onChange={onChange}
      disabledDates={disabledDates}
      rangeColors={["#262626"]}
      ranges={[value]}
      date={new Date()}
      direction="vertical"
      minDate={new Date()}
      showDateDisplay={false}
    />
  );
};

export default Calendar;
