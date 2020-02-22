import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { connect } from 'react-redux';
import addDays from 'date-fns/addDays'
import "react-datepicker/dist/react-datepicker.css";

const SearchForm = (props) => {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(addDays(new Date(), 7))

  return (
    <>
      <DatePicker 
        selected={startDate} 
        onChange={date => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate} />
      <DatePicker 
        selected={endDate} 
        onChange={date => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate} />
    </>
  )
}

export default SearchForm;