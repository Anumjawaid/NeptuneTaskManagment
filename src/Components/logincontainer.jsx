import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const theme = createTheme();

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  const inputstyle={
    boxSizing:"border-box",
    width: "400px",
    height: "60px",
    border:" 2px solid #e67e22",
    backgroundColor:'hsl(220, 17%, 21%)',
    color:'white',
    fontSize:'20px',
    margin:'1em 0',
    borderRadius: "8px"}
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            color:'#e67e22',
            fontWeight:'bold',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#e67e22' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <label style={{fontSize:'21px'}}>Enter Your Username</label>
            <input
              
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              style={inputstyle}
            />
            <br/>
            <br/>

            <label style={{fontSize:'21px'}}>Enter Your Password</label>
            <input
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              style={inputstyle}
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2,backgroundColor:'#e67e22' }}
            >
              Sign In
            </Button>
            <br/>
            <Link style={{color:'#e67e22',textDecoration:'none',alignItems:'center'}}>Forgot Your Password ?</Link>
            <br/><br/><br/>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}