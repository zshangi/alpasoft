import React, { useState, useEffect } from 'react'
import { Form,  Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { userLoginAction } from '../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

const defaultTheme = createTheme();

function LoginScreen({ location, history }) {
  let navigate = useNavigate()

    var redirect = '/home'
    const tokenResult =  ""

    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const { error, userInfo, loading } = userLogin

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [activationMessage, setActivationMessage] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(userLoginAction(email, password))
    }

    useEffect(() => {
        if (userInfo) {
          navigate(redirect)
        } else if (!userInfo) {
            switch (tokenResult) {

                case 'success':
                    setActivationMessage('Your account successfully activated. Now you can login')
                    break;

                case 'fail':
                    setActivationMessage('Your activation link isn\'t valid. Please go to register page and try again.')
                    break;

                default:
                    setActivationMessage('')
            }
        }

    }, [history, userInfo, redirect, tokenResult])


    return (



<ThemeProvider theme={defaultTheme}>
{
                loading ? <Loader />
                    : error ? <Message variant='danger' text={error} />
                        : tokenResult === 'success' ? <Message variant='success' text={activationMessage} />
                            : tokenResult === 'fail' ? <Message variant='danger' text={activationMessage} />
                                : <></>
            }
          
<Container component="main" maxWidth="xs">
  <CssBaseline />
  <Box
    sx={{
      marginTop: 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
      <LockOutlinedIcon />
    </Avatar>
    <Typography component="h1" variant="h5">
      Sign in
    </Typography>
    <Box component="form" onSubmit={submitHandler} noValidate sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="email"
        label="Email Address"
        name="email"
        autoComplete="email"
 	onChange={(e) => setEmail(e.target.value)}
        
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="password"
        label="Password"
        type="password"
        id="password"
        autoComplete="current-password"
onChange={(e) => setPassword(e.target.value)}
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Sign In
      </Button>
      <Grid container>
        <Grid item xs>
          <Link href="#" variant="body2">
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" variant="body2">
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
    </Box>
  </Box>
</Container>
</ThemeProvider>
    )
}

export default LoginScreen