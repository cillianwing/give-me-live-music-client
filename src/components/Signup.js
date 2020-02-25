import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { updateSignupForm } from '../actions/authForm'
import { signupUser, clearErrorMessage } from '../actions/currentUser'
import { Alert } from 'react-bootstrap';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
        Give Me Live Music!{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Signup = (props) => {
  const classes = useStyles();

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token !== '') {
      props.history.push('/')
    }
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...props.signupFormData,
      [name]: value
    }
    props.updateSignupForm(updatedFormInfo)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.signupUser({user: props.signupFormData})
  }

  const errorAlerts = () => {
    const uniqErrors = [...new Set(props.errorMessage)].join(', ')
    const errorsArr = <Alert style={{ marginTop: 5 }} variant='danger'>{uniqErrors}.</Alert>
    return errorsArr
  }

  return(
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Link to="/" >
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
        </Link>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        { props.errorMessage ? errorAlerts() : '' }
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="first_name"
                variant="outlined"
                required
                fullWidth
                value={props.signupFormData.first_name}
                id="first_name"
                label="First Name"
                autoFocus
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value={props.signupFormData.last_name}
                id="last_name"
                label="Last Name"
                name="last_name"
                autoComplete="lname"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value={props.signupFormData.email}
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={props.signupFormData.password}
                autoComplete="current-password"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password_confirmation"
                label="Confirm Password"
                type="password"
                id="password_confirmation"
                value={props.signupFormData.password_confirmation}
                autoComplete="current-password"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value={props.signupFormData.location}
                id="location"
                label="Location"
                name="location"
                autoComplete="location"
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                multiline
                rows="3"
                value={props.signupFormData.biography}
                id="about"
                label="About Me"
                name="about"
                autoComplete="about"
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/login" variant="body2" onClick={() => props.clearErrorMessage() }>
                Already have an account? Login
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>    
  )
}

const mapStateToProps = (state) => {
  return {
    signupFormData: state.signupForm,
    loggedIn: state.currentUser.isAuthenticated,
    errorMessage: state.currentUser.errorMessage
  }
}

export default connect(mapStateToProps, { updateSignupForm, signupUser, clearErrorMessage })(Signup);