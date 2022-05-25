import React from 'react'
import MiniDrawer from './sidebar'
import './App.css'
import TaskHelpers from './takshelpers'

export default function ProjectDashboard(){

    return(
        <React.Fragment>
            <MiniDrawer component={<TaskHelpers/>}/>
        </React.Fragment>
    )
}
