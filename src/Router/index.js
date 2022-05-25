import React from 'react'
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom';
import Login from '../Components/Login'
import UserDashboard from '../Components/users'
import ProjectDashboard from '../Components/tasks'

function AppRouter (){
    return(
        <>
        <Router>
               
                
               <Routes>
               <Route path='/' element={<Login />}></Route>
               </Routes>

               <Routes>
               <Route path='/userdashboard' element={<UserDashboard />}></Route>
               </Routes>

               <Routes>
               <Route path='/projectdashboard' element={<ProjectDashboard />}></Route>
               </Routes>

               </Router>
        </>
    )
}

export default AppRouter;