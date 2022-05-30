import { Grid, Modal } from '@mui/material'
import { Box } from '@mui/system'
import React,{useContext} from 'react'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {InputBox,DropBox ,Button}from './template'
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import HighlightOffTwoToneIcon from '@material-ui/icons/HighlightOffTwoTone';
import ClearTwoToneIcon from '@material-ui/icons/ClearTwoTone';
import GroupIcon from '@material-ui/icons/Group';
import Store from '../Store/index'


// lighter #2F3439 darker #1A1D20
export default function UserFunc() {
    const ThemeContext = useContext(Store())
    // let users=[
    //     {"username":"XYX",'email':"xyz77@gmail.com",'role':'Admin'},
    //     {"username":"XYX",'email':"xyz77@gmail.com",'role':'Developer'},
    //     {"username":"XYX",'email':"xyz77@gmail.com",'role':'Support'},
    //     {"username":"XYX",'email':"xyz77@gmail.com",'role':'Admin'},
    
        

    // ]
    let [users,setUsers]=React.useState()
     users=ThemeContext.users
    let[uname,setName]=React.useState("");let[email,setEmail]=React.useState("")
    let[pass,setPass]=React.useState('');let[role,setRole]=React.useState("")
    const AddUser=()=>{
          let a={
              username:uname,email:email,password:pass,role:role
          }
          
          let b=document.getElementById('success')
          

          if(uname==""|| email=='' || pass=='' || role ==""){
            b.style.display='block'
            b.innerHTML="Please Fill All Fields"
            b.style.color='red'
            setTimeout(()=>{
              b.style.display='none'
            },3000)
          }
          else{
            ThemeContext.users.push(a)
            b.style.display='block'
            b.innerHTML="User Added Successfully"
            b.style.color='green'
            setTimeout(()=>{
              b.style.display='none'
            },5000)
            setName('')
          setEmail('')
          setPass('')
          setRole('')

          }
          
    } 

    const updateUser=()=>{

    }
    const deleteUser=(ind)=>{
          users.splice(ind)
          setUsers(users)
          ThemeContext.users=users
    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        height:630,
        bgcolor: '#1A1D20',
        border: '2px solid #E1A100',
        boxShadow: 24,
        p: 4,
      };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [open1, setOpen1] = React.useState(false);
    const handleOpen1 = () => setOpen1(true);
    const handleClose1 = () => setOpen1(false);

    return (
        <>
            <Grid>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', borderLeft: '4px solid #E1A100', borderRadius: '10px', backgroundColor: '#2F3439' }}>
                    <h3 style={{ marginLeft: '2rem' }}>Add Users</h3>
                    <div className="iconcontainer" style={{ display: 'flex', marginRight: '2rem' }}>
                        <AddCircleOutlineIcon onClick={handleOpen} style={{ color: '#E1A100', marginTop: '0.9rem', fontSize: '32px', alignItems: 'center', textAlign: 'center' }} />
                        <Modal sx={{background:'#1A1D20'}}
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                            <ClearTwoToneIcon onClick={handleClose} style={{color:'#E1A100',position:"absolute",left:'90%'}}/>

                              <div style={{alignItems:'center',textAlign:'center'}}>
                                       <h2 style={{ color: '#E1A100',margin:'0px'}}>Add Users Information</h2>
                                       <p id="success" style={{color:'green',margin:"1px",display:'none'}}> User Successfully Added</p>
                                           <div style={{marginTop:'1.5rem'}}>
                                        <InputBox label={"Enter Email Address"} onChange={(e) => setEmail(e.target.value)} value={email}></InputBox>
                                       <InputBox label={"Enter Username"} onChange={(e) => setName(e.target.value)} value={uname} ></InputBox>
                                       <InputBox label={"Enter Password"} type={'Password'} onChange={(e) => setPass(e.target.value)} value={pass}></InputBox>

                                       <DropBox label={"Enter User's Role"} onChange={(e) => setRole(e.target.value)} value={role} options={['Admin','Developer','Supporter']} />
                                       <Button name={"Add Users"} onClick={()=>AddUser()}/>
                                       </div>
                                      
                              </div>
                            </Box>
                        </Modal>

                    </div>
                </Box>
                {/* Users View */}
                <br /><br /><br />
                <Grid sx={{ padding:'3rem',alignItems:'center', width: '100%', borderRadius: '10px', backgroundColor: '#2F3439' }}>
                  <Grid>
                  <Box sx={{  borderLeft: '4px solid #E1A100', borderRadius: '10px', backgroundColor: '#1A1D20',width:'15%',padding:'1px' }}>
                <h2 style={{marginLeft:'10px',marginRight:'2 rem'}}>User List</h2>
                </Box>
                  </Grid>
                  <br/>
                <Grid sx={{display: 'flex',flexDirection:'column' , justifyContent: 'center',}}>
               
                    {users.length ?<>
                        <Box sx={{ display: 'flex',color: "#E1A100", justifyContent: 'space-between',marginBottom:'2rem', width: '100%', borderLeft: '4px solid #E1A100', borderRadius: '10px', backgroundColor: '#1A1D20' }}>
                    
                    <div style={{marginLeft:'10px',width:'20%'}}><p>Username</p></div>
                    <div style={{width:'25%'}}><p>Email</p></div>
                    <div style={{width:'20%'}}> <p >Role</p>   </div>
                    <div style={{width:'10%'}}>  <p>Update</p></div>
                    <div style={{width:'10%',marginRight:'10px'}}> <p>Delete</p>     </div>               
                        
                        
                        </Box>
                    {
                        users.map((v,i)=>(
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom:'1rem',width: '100%', borderLeft: '4px solid #E1A100', borderRadius: '10px', backgroundColor: '#1A1D20' }}>
                    
                                           <div style={{marginLeft:'10px',width:'20%'}}><p >{v.username}</p></div>
                            <div style={{width:'25%'}}> <p>{v.email}</p></div>
                            <div style={{width:'20%'}}><p >{v.role}</p>  </div>
                           
                            <div style={{width:'10%'}}>
                            <DynamicFeedIcon onClick={handleOpen1} style={{ boxShadow: '2px 3px 8px 2px #e67e22',color: "#E1A100", background: 'transparent',fontSize: '24px',margin:'10px' }} />    
                            <Modal sx={{background:'#1A1D20'}}
                            open={open1}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            
                            <Box sx={style}>
                            <ClearTwoToneIcon onClick={handleClose1} style={{color:'#E1A100',position:"absolute",left:'90%'}}/>

                              <div style={{alignItems:'center',textAlign:'center'}}>
                                       <h2 style={{ color: '#E1A100'}}>Update Users Information</h2>
                                       <InputBox label={"Enter Email Address"} value={v.email}></InputBox>
                                       <InputBox label={"Enter Username"} value={v.username}></InputBox>
                                       <InputBox label={"Enter Password"} value={v.password}></InputBox>
                                       <DropBox label={"Enter User's Role"} value={v.role} options={['Admin','Developer','Supporter']} />
                                       <Button name={"Update Users"} onClick={()=>{updateUser()}}/>
                                      
                              </div>
                            </Box>
                        </Modal>
                            </div>
                            <div style={{width:'10%'}}>
                            <HighlightOffTwoToneIcon onClick={()=>deleteUser(i)} style={{ boxShadow: '2px 3px 8px 2px #e67e22',color: "#E1A100", background: 'transparent',fontSize: '24px',margin:'10px' }} />    
                            </div>

                            
                            
                            </Box> 
                        ))
                    }</>
                    :<div>
                            <Grid sx={{display: 'flex',flexDirection:'column' ,alignItems:'center', justifyContent: 'center',}}>
                               <GroupIcon style={{fontSize:'6rem' ,color: '#E1A100'}}/>
                               <h1>There are No Users Right Now</h1>
                            </Grid>
                    </div>
                    }
                     
                </Grid>
                </Grid>
            </Grid>










        </>
    )
}