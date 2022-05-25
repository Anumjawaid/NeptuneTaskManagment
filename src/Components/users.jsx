import React from 'react'
import MiniDrawer from './sidebar'
import './App.css'
import UserFunc from './userfunc'

export default function UserDashboard(){

    return(
        <React.Fragment>
            <MiniDrawer component={<UserFunc/>}/>
        </React.Fragment>
    )
}
