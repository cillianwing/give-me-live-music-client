import React from 'react';
import { connect } from 'react-redux';
import Input from '../components/input/Input';
import SelectDates from '../components/input/SelectDates';
import { updateSearchForm, resetSearchForm } from '../actions/searchForm';
import { getConcerts } from '../actions/search';
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";

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
    props.getConcerts(props.searchFormData, props.page)
  }

  const handleResetClick = (event) => {
    event.preventDefault()
    props.resetSearchForm()
  }

  return (
    <MDBCol md="12">
      <MDBFormInline className="md-form mr-auto mb-4" onSubmit={handleSubmit}>
        <Input className={'form-control mr-sm-2 ml-sm-auto'} type={'text'} name={'location'} value={location} placeholder={'Location'} handleChange={handleChange}  />
        <Input className={'form-control mr-sm-2'} type={'number'} name={'within'} value={within} placeholder={'Search Radius (mi.)'} handleChange={handleChange}  />
        <SelectDates className={'form-control mr-sm-2'} startDate={startDate} endDate={endDate} handleStartChange={handleStartChange} handleEndChange={handleEndChange} />
        <MDBBtn gradient='aqua' rounded size='sm' type='submit' className='mr-2'>Search</MDBBtn>
        <MDBBtn outline color='info' rounded size='sm' className='mr-auto' onClick={handleResetClick}>Reset Form</MDBBtn>
      </MDBFormInline> 
    </MDBCol>

    // <form onSubmit={handleSubmit}>
    //   <Input type={'text'} title={'Location'} name={'location'} value={location} placeholder={'Location'} handleChange={handleChange}  />
    //   <Input type={'number'} title={'Search Radius (mi)'} name={'within'} value={within} placeholder={'Search Radius (mi)'} handleChange={handleChange} />
    //   <SelectDates startDate={startDate} endDate={endDate} handleStartChange={handleStartChange} handleEndChange={handleEndChange} />
    //   <Input type={'submit'} value={'Submit'} />
    //   <Input type="submit" value="Reset Form" handleClick={handleResetClick} />
    // </form>
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