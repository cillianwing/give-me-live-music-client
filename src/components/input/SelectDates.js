import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const SearchDates = (props) => {
  return (
    <>
      <DatePicker 
        placeholderText="Start Date"
        className={props.className}
        selected={props.startDate} 
        onChange={props.handleStartChange}
        selectsStart
        startDate={props.startDate}
        endDate={props.endDate}
        minDate={new Date()} />
      <DatePicker 
        placeholderText="End Date"
        className={props.className}
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