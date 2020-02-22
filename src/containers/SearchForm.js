import React, { useState } from 'react';
import { connect } from 'react-redux';
import Input from '../components/Input';
import SelectDates from '../components/SelectDates';
import SubmitButton from '../components/SubmitButton';
import { updateSearchForm } from '../actions/searchForm';
import { getConcerts } from '../actions/search';

const SearchForm = (props) => {
  // const [startDate, setStartDate] = useState(new Date())
  // const [endDate, setEndDate] = useState(addDays(new Date(), 7))

  return (
    <>
      
      {/* <DatePicker 
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
        minDate={startDate} /> */}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    searchFormData: state.searchForm
  }
}

export default connect(mapStateToProps, { updateSearchForm, getConcerts })(SearchForm);