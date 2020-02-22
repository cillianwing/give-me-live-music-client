import React from 'react';
import { connect } from 'react-redux';
import Input from '../components/Input';
import SelectDates from '../components/SelectDates';
import { updateSearchForm } from '../actions/searchForm';
import { getConcerts } from '../actions/search';

const SearchForm = (props) => {
  const { location, within, startDate, endDate } = props.searchFormData

  const handleChange = (event) => {
    const { name, value } = event.target
    const updatedSearchInfo = {
      ...props.searchFormData,
      [name]: value
    }
    props.updateSearchForm(updatedSearchInfo)
  }

  const handleStartChange = (date) => {
    const updatedSearchInfo = {
      ...props.searchFormData,
      startDate: date
    }
    props.updateSearchForm(updatedSearchInfo)
  }

  const handleEndChange = (date) => {
    const updatedSearchInfo = {
      ...props.searchFormData,
      endDate: date
    }
    props.updateSearchForm(updatedSearchInfo)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.getConcerts(props.searchFormData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input type={'text'} title={'Location'} name={'location'} value={location} placeholder={'Location'} handleChange={handleChange}  />
      <Input type={'number'} title={'Search Radius (mi)'} name={'within'} value={within} placeholder={'Search Radius (mi)'} handleChange={handleChange} />
      <SelectDates startDate={startDate} endDate={endDate} handleStartChange={handleStartChange} handleEndChange={handleEndChange} />
      <Input type={'submit'} value={'Submit'} />
    </form>
  )
}

const mapStateToProps = (state) => {
  return {
    searchFormData: state.searchForm
  }
}

export default connect(mapStateToProps, { updateSearchForm, getConcerts })(SearchForm);