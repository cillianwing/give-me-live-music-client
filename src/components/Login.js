import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { updateLoginForm } from '../actions/authForm'
import { loginUser, clearErrorMessage } from '../actions/currentUser'
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = (props) => {
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
      ...props.loginFormData,
      [name]: value
    }
    props.updateLoginForm(updatedFormInfo)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.loginUser({user: props.loginFormData})
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Link to="/">
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
        </Link>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        { props.errorMessage ? <Alert style={{ marginTop: 15 }} variant='danger'>{props.errorMessage}</Alert> : '' }
        <form className={classes.form} onSubmit={handleSubmit} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={props.loginFormData.email}
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={props.loginFormData.password}
            onChange={handleInputChange}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Login
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link to="/signup" variant="body2" onClick={() => props.clearErrorMessage() } >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>    
  )
}

const mapStateToProps = (state) => {
  return {
    loginFormData: state.loginForm,
    loggedIn: state.currentUser.isAuthenticated,
    errorMessage: state.currentUser.errorMessage
  }
}

export default connect(mapStateToProps, { updateLoginForm, loginUser, clearErrorMessage })(Login)