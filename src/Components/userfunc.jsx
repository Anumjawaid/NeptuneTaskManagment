import { Grid, Modal } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {InputBox,DropBox ,Button}from './template'
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import HighlightOffTwoToneIcon from '@material-ui/icons/HighlightOffTwoTone';
import ClearTwoToneIcon from '@material-ui/icons/ClearTwoTone';


// lighter #2F3439 darker #1A1D20
export default function UserFunc() {
    let users=[
        {"username":"XYX",'email':"xyz77@gmail.com",'role':'Admin'},
        {"username":"XYX",'email':"xyz77@gmail.com",'role':'Developer'},
        {"username":"XYX",'email':"xyz77@gmail.com",'role':'Support'},
        {"username":"XYX",'email':"xyz77@gmail.com",'role':'Admin'},
        

    ]
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        height:600,
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
                                       <h2 style={{ color: '#E1A100'}}>Add Users Information</h2>
                                       <InputBox label={"Enter Email Address"}></InputBox>
                                       <InputBox label={"Enter Username"}></InputBox>
                                       <InputBox label={"Enter Password"}></InputBox>

                                       <DropBox label={"Enter User's Role"} options={['Admin','Developer','Supporter']} />
                                       <Button name={"Add Users"}/>
                                      
                              </div>
                            </Box>
                        </Modal>

                    </div>
                </Box>
                {/* Users View */}
                <br /><br /><br />
                <Grid sx={{ padding:'3rem',alignItems:'center', width: '100%', borderRadius: '10px', backgroundColor: '#2F3439' }}>
                  <Grid>
                  <Box sx={{  borderLeft: '4px solid #E1A100', borderRadius: '10px', backgroundColor: '#1A1D20',width:'10%',padding:'1px' }}>
                <h2 style={{margin:' 10px'}}>UserList</h2>
                </Box>
                  </Grid>
                  <br/>
                <Grid sx={{display: 'flex',flexDirection:'column' , justifyContent: 'center',}}>
                <Box sx={{ display: 'flex',color: "#E1A100", justifyContent: 'space-between',marginBottom:'2rem', width: '100%', borderLeft: '4px solid #E1A100', borderRadius: '10px', backgroundColor: '#1A1D20' }}>
                    
                    <p style={{marginLeft:'10px'}}>Username</p>
                    <p>Email</p>
                    <p >Role</p>   
                    <p>Update</p>
                       <p style={{marginRight:'10px'}}>Delete</p>                    
                    
                    
                    </Box>
                    {
                        users.map((v,i)=>(
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom:'1rem',width: '100%', borderLeft: '4px solid #E1A100', borderRadius: '10px', backgroundColor: '#1A1D20' }}>
                    
                            <p style={{marginLeft:'10px'}}>{v.username}</p>
                            <p>{v.email}</p>
                            <p style={{marginRight:'10px'}}>{v.role}</p>  
                           
                            <DynamicFeedIcon onClick={handleOpen1} style={{ boxShadow: '2px 3px 8px 2px #e67e22',color: "#E1A100", background: 'transparent',fontSize: '24px',margin:'10px' }} />    
                            <HighlightOffTwoToneIcon style={{ boxShadow: '2px 3px 8px 2px #e67e22',color: "#E1A100", background: 'transparent',fontSize: '24px',margin:'10px' }} />    
                               

                            
                            
                            </Box> 
                        ))
                    }
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
                                       <InputBox label={"Enter Email Address"}></InputBox>
                                       <InputBox label={"Enter Username"}></InputBox>
                                       <InputBox label={"Enter Password"}></InputBox>
                                       <DropBox label={"Enter User's Role"} options={['Admin','Developer','Supporter']} />
                                       <Button name={"Add Users"}/>
                                      
                              </div>
                            </Box>
                        </Modal>
                </Grid>
                </Grid>
            </Grid>










        </>
    )
}