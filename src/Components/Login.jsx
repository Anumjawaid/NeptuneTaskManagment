import React from 'react'
import { autocompleteClasses, Grid } from '@mui/material';
import SignIn from './logincontainer'

export default function Login() {
    const background = {
        poition: 'abolute',
        
       background:'#171A26',
    //    background:'#f39c12',
        backgroundRepeat: 'no-repeat',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
        height: '100vh',
        backgroundSize: 'cover',


    }
    const transparent={
        backgroundColor: '#272F3F',
         margin:'0 auto',
        width:'50%',
        backdropFilter: 'blur(10px)',
        zIndex:'-1',
        boxShadow: '2px 3px 8px 0px #e67e22',
    }
      
        const circle1=(topposition,leftposition)=>{
           return(
            {width: '200px',
            height: '200px',
            backgroundImage:'linear-gradient(to top, #f39c12,#d3722b, #a94f32, #783530)',
            borderRadius: '50%',
            position:'absolute',
            top:topposition,
            left:leftposition,
           
        }
           )
    }
    return (
        <React.Fragment >
            <div style={background}>
            <div style={circle1('2%','15%')}>
        </div>
        <div style={circle1('65%','70%')}>
        </div>
        
                <div style={{paddingTop:'2.5rem',}}></div>
                <div style={transparent}>
                <SignIn/>
                </div>
       
        



            </div>
        </React.Fragment>
    )
}