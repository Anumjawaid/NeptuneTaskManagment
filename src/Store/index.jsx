import React from 'react'


const context={
    users:[],
    projects:[]
}

function Store(){
    const ThemeContext=React.createContext(context)
    return ThemeContext
}



export default Store;