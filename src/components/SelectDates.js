import React from 'react';
import DatePicker from 'react-datepicker';
import addDays from 'date-fns/addDays'
import "react-datepicker/dist/react-datepicker.css";

const SearchDates = (props) => {
  return (
    <>
        <DatePicker 
        selected={props.startDate} 
        onChange={props.handleStartChange}
        selectsStart
        startDate={props.startDate}
        endDate={props.endDate} />
      <DatePicker 
        selected={props.endDate} 
        onChange={props.handleEndChange}
        selectsEnd
        startDate={props.startDate}
        endDate={props.endDate}
        minDate={props.startDate} />
    </>
  )
}

export default SearchDates;