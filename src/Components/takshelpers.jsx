import { Grid, Modal } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {InputBox,DropBox ,Button,Calendar}from './template'
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import HighlightOffTwoToneIcon from '@material-ui/icons/HighlightOffTwoTone';
import ClearTwoToneIcon from '@material-ui/icons/ClearTwoTone';
// lighter #2F3439 darker #1A1D20
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height:600,
    bgcolor: '#1A1D20',
    border: '2px solid #E1A100',
    boxShadow: 54,
    p: 4,
  };
  const style1 = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height:600,
    bgcolor: '#1A1D20',
    border: '2px solid #E1A100',
    boxShadow: 54,
    p: 4,
  };

  
export default function TaskHelper() {
    let [box1,setBox1]=React.useState('none')
    let users=[
        {"username":"XYX",'email':"xyz77@gmail.com",'role':'Admin'},
        {"username":"XYX",'email':"xyz77@gmail.com",'role':'Developer'},
        {"username":"XYX",'email':"xyz77@gmail.com",'role':'Support'},
        {"username":"XYX",'email':"xyz77@gmail.com",'role':'Admin'},
        

    ]
   
    
    const [open1, setOpen1] = React.useState(false);
    const handleOpen1 = () => setOpen1(true);
    const handleClose1 = () => setOpen1(false);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Grid>
               <ProjectBox />
                {/* Users View */}
                <br /><br /><br />
                <Grid sx={{ padding:'3rem',alignItems:'center', width: '100%', borderRadius: '10px', backgroundColor: '#2F3439' }}>
                  <Grid>
                  <Box sx={{  borderLeft: '4px solid #E1A100', borderRadius: '10px', backgroundColor: '#1A1D20',width:'20%',padding:'1px' }}>
                <h2 style={{margin:' 10px'}}>Project List</h2>
                </Box>
                  </Grid>
                  <br/>
                <Grid sx={{display: 'flex',flexDirection:'column' , justifyContent: 'center',}}>
                <Box sx={{ display: 'flex',color: "#E1A100", justifyContent: 'space-between',marginBottom:'2rem', width: '100%', borderLeft: '4px solid #E1A100', borderRadius: '10px', backgroundColor: '#1A1D20' }}>
                    
                    <p style={{marginLeft:'10px'}}>Project's Name</p>
                    <p >End Date</p>   
                    <p>Update</p>
                    <p style={{marginRight:'10px'}}>Delete</p>                    
                    
                    
                    </Box>
                    {
                        users.map((v,i)=>(
                            <>
                            <Box onClick={ ()=>(console.log("i",i)) } sx={{ display: 'flex', justifyContent: 'space-between', marginBottom:'1rem',width: '100%', borderLeft: '4px solid #E1A100', borderRadius: '10px', backgroundColor: '#1A1D20' }}>
                    
                            <p style={{marginLeft:'10px'}}>{v.username}</p>
                            <p style={{marginRight:'10px'}}>{v.role}</p>  
                           
                            <DynamicFeedIcon onClick={handleOpen1} style={{ boxShadow: '2px 3px 8px 2px #e67e22',color: "#E1A100", background: 'transparent',fontSize: '24px',margin:'10px' }} />    
                            <HighlightOffTwoToneIcon style={{ boxShadow: '2px 3px 8px 2px #e67e22',color: "#E1A100", background: 'transparent',fontSize: '24px',margin:'10px' }} />    
                               

                            
                            
                            </Box> 
                            <Box sx={{ display:box1, marginBottom:'1rem',width: '100%', borderLeft: '4px solid #E1A100', borderRadius: '10px', backgroundColor: '#1A1D20' }}>
                                   <h2>Here is the text</h2>
                            </Box>
                            </>
                        ))
                    }
                    <Modal sx={{background:'#1A1D20'}}
                            open={open1}
                            onClose={handleClose1}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            
                            <Box sx={style} > 
                            <ClearTwoToneIcon onClick={handleClose1} style={{color:'#E1A100',position:"absolute",left:'90%'}}/>
                              <div style={{alignItems:'center',textAlign:'center'}}>
                             
                                       <h2 style={{ color: '#E1A100'}}>Update Tasks Information</h2>


                                       <InputBox label={"Enter Project's Name"} value={"Projname"}></InputBox>
                                       <InputBox label={"Enter Project's Description"} value={"Projname"}></InputBox>
                                       <Calendar label={"Enter EndDate"} options={['High','Normal','Middle']}/>
                                       <Button onClick={handleOpen} name={"Update Project"}/>
                                      
                              </div>
                            </Box>
                        </Modal>
                     <Modal sx={{background:'#1A1D20',}}
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            
                            <Box sx={style1}>
                            <ClearTwoToneIcon onClick={handleClose} style={{color:'#E1A100',position:"absolute",left:'90%'}}/>
                              <div style={{alignItems:'center',textAlign:'center'}}>
                             
                                       <h2 style={{ color: '#E1A100'}}>Add Tasks Information</h2>
                                       <InputBox label={"Enter Task's Name"}></InputBox>
                                       <InputBox label={"Enter Task's Description"}></InputBox>
                                       <DropBox label={"Enter Priority"} options={['High','Normal','Middle']}/>
                                       <Button name={"Add Task"}/>
                                      
                              </div>
                            </Box>
                        </Modal>
                </Grid>
                </Grid>
            </Grid>










        </>
    )
}

function ProjectBox(props){
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return(
        <>
         <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', borderLeft: '4px solid #E1A100', borderRadius: '10px', backgroundColor: '#2F3439' }}>
                    <h3 style={{ marginLeft: '2rem' }}>Add Projects</h3>
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
                                       <h2 style={{ color: '#E1A100'}}>Add Project Information</h2>
                                       <InputBox label={"Enter Project's Name"}></InputBox>
                                       <InputBox label={"Enter Project's Description"}></InputBox>
                                       <Calendar label={"Enter EndDate"}/>
                                       <Button name={"Add Project"}/>
                                      
                              </div>
                            </Box>
                        </Modal>

                    </div>
                </Box>

        </>
    )
}