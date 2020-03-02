import React from 'react'
import { Link } from 'react-router-dom';
import { Alert } from 'react-bootstrap';
import { MDBIcon } from 'mdbreact';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

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

const ProfileEdit = (props) => {
  const classes = useStyles();

  const errorAlerts = () => {
    const uniqErrors = [...new Set(props.errorMessage)].join(', ')
    const errorsArr = <Alert style={{ marginTop: 5 }} variant='danger'>{uniqErrors}.</Alert>
    return errorsArr
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Link to="/" >
          <Avatar className={classes.avatar}>
            <MDBIcon far icon="user-circle" />
          </Avatar>
        </Link>
        <Typography component="h1" variant="h5">
          User Profile
        </Typography>
        { props.errorMessage ? errorAlerts() : '' }
        <form className={classes.form} onSubmit={props.handleSubmit} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="first_name"
                variant="outlined"
                fullWidth
                value={props.user.first_name}
                id="first_name"
                label="First Name"
                autoFocus
                onChange={props.handleInputChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                value={props.user.last_name}
                id="last_name"
                label="Last Name"
                name="last_name"
                autoComplete="lname"
                onChange={props.handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                value={props.user.location}
                id="location"
                label="Location"
                name="location"
                autoComplete="location"
                onChange={props.handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                multiline
                rows="3"
                value={props.user.about}
                id="about"
                label="About Me"
                name="about"
                autoComplete="about"
                onChange={props.handleInputChange}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Update Profile
          </Button>
          <Button
            onClick={props.handleCancel}
            type="submit"
            fullWidth
            variant="contained"
            className={classes.submit}
          >
            Cancel
          </Button>          
        </form>
      </div>
    </Container>
  )  
}

export default ProfileEdit;