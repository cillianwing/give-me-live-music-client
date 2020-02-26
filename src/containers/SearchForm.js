import React from 'react';
import { connect } from 'react-redux';
import Input from '../components/input/Input';
import SelectDates from '../components/input/SelectDates';
import { updateSearchForm, resetSearchForm } from '../actions/searchForm';
import { getConcerts } from '../actions/search';
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";
import {Typeahead} from 'react-bootstrap-typeahead';
import states from 'states-us';

const SearchForm = (props) => {
  const statesArr = states.map(state => state.abbreviation)

  const { city, region, startDate, endDate } = props.searchFormData

  const handleChange = (event) => {
    const { name, value } = event.target
    const updatedSearchInfo = {
      ...props.searchFormData,
      [name]: value
    }
    props.updateSearchForm(updatedSearchInfo)
  }

  const handleSelect = (event) => {
    const st = event[0]
    const updatedSearchInfo = {
      ...props.searchFormData,
      region: st
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
    props.getConcerts(props.searchFormData, props.page)
  }

  const handleResetClick = (event) => {
    event.preventDefault()
    props.resetSearchForm()
  }

  return (
    <MDBCol md="12">
      <MDBFormInline className="md-form mr-auto mb-4" onSubmit={handleSubmit}>
        <Input className={'form-control mr-sm-2 ml-sm-auto'} type={'text'} name={'city'} value={city} placeholder={'City'} handleChange={handleChange}  />
        <Typeahead id="region" className='mr-sm-2' name="region" options={statesArr} onChange={handleSelect} placeholder="Choose a state..." />
        <SelectDates className={'form-control mr-sm-2'} startDate={startDate} endDate={endDate} handleStartChange={handleStartChange} handleEndChange={handleEndChange} />
        <MDBBtn gradient='aqua' rounded size='sm' type='submit' className='mr-2'>Search</MDBBtn>
        <MDBBtn outline color='info' rounded size='sm' className='mr-auto' onClick={handleResetClick}>Reset Form</MDBBtn>
      </MDBFormInline> 
    </MDBCol>
  )
}

const mapStateToProps = (state) => {
  return {
    searchFormData: state.searchForm,
    page: state.search.page,
    pages: state.search.pages
  }
}

export default connect(mapStateToProps, { updateSearchForm, resetSearchForm, getConcerts })(SearchForm);