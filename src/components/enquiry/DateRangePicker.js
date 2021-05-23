import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

function DateRangePicker() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <>
      <div>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="number_of_people"
        >
          Check In
        </label>
        <div className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
          />
        </div>
      </div>
      <div>
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="number_of_people"
        >
          Check Out
        </label>
        <div className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight">
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
          />
        </div>
      </div>
    </>
  );
}

export default DateRangePicker;
