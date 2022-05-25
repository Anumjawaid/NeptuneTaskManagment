import React from 'react'

const inputstyle = {
    boxSizing: "border-box",
    width: '350px',
    height: '40px',
    border: " 2px solid #e67e22",
    backgroundColor: 'hsl(220, 17%, 21%)',
    color: 'white',
    fontSize: '20px',
    margin: '1em 0',
    borderRadius: "8px"
}
function InputBox(props) {
    let val=props.value
    console.log(val,"values")
    if(val == undefined || val== null){
            val=" "
    }
    else{
        val=props.value
    }

   
    return (
        <>
                        <label style={{ fontSize: '18px', color: '#E1A100',display:'block' }}>{props.label}</label>



            <input

                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                style={inputstyle}
                
            />
            <br />
        </>
    )
}


function DropBox(props) {
    let options = props.options
    // console.log('options', options)
    const inputstyle = {
        boxSizing: "border-box",
        width: '350px',
        height: '40px',
        border: " 2px solid #e67e22",
        backgroundColor: 'hsl(220, 17%, 21%)',
        color: 'white',
        fontSize: '20px',
        margin: '1em 0',
        borderRadius: "8px"
    }
    return (
        <>
            <label style={{ fontSize: '18px', color: '#E1A100',display:'block' }}>{props.label}</label>
          
            <select name="drop" id="drop" style={inputstyle}>
            {options.map((v,i)=>(
                    <option value={v}>{v}</option>
                ))}
            </select>
            <br />
           

        </>
    )
}
function Calendar(props){
    return(
        <>
        <label style={{ fontSize: '18px', color: '#E1A100' }}>{props.label}</label>
            <br />
        <input type='date' style={inputstyle} />
        <br /><br />
        </>
    )
}

function Button(props){
    const ContainerLoginButton = {
        backgroundColor: "#E1A100",
        width: '350px',
        height: '40px',
        borderRadius: "8px",
        color:'white',
        fontSize:"21px",
        border :"1px solid #E1A100"
    };
    return(
        <>
        <button style={ContainerLoginButton} onClick={props.onClick}>{props.name}</button>
        </>
    )
}

export { InputBox, DropBox ,Button,Calendar}