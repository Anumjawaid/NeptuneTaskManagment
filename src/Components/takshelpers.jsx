import { Grid, Modal } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext } from 'react'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { InputBox, DropBox, Button, Calendar } from './template'
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import HighlightOffTwoToneIcon from '@material-ui/icons/HighlightOffTwoTone';
import ClearTwoToneIcon from '@material-ui/icons/ClearTwoTone';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import Store from '../Store/index'

// lighter #2F3439 darker #1A1D20



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1200,
    height: 650,
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
    height: 600,
    bgcolor: '#1A1D20',
    border: '2px solid #E1A100',
    boxShadow: 54,
    p: 4,
};


export default function TaskHelper() {
    let [box1, setBox1] = React.useState('none')
    const ThemeContext = useContext(Store())
    let [projects, setProjects] = React.useState(ThemeContext.projects)


    const [open1, setOpen1] = React.useState(false);
    const handleOpen1 = () => setOpen1(true);
    const handleClose1 = () => setOpen1(false);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [opentask, setOpentask] = React.useState(false);
    const handleOpentask = () => setOpentask(true);
    const handleClosetask = () => setOpentask(false);
    let [projname, setProjname] = React.useState(); let [projdesc, setProjdesc] = React.useState();
    let [projdate, setProjdate] = React.useState()
    let [taskname, setTname] = React.useState()
    let [taskedited, setEdited] = React.useState()
    let [tpriority, setTpriority] = React.useState()
    let [tdesc, setTdesc] = React.useState()
    const [open2, setOpen2] = React.useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);
    const [openupproject, setOpenupproject] = React.useState(false);
    const handleOpenup = () => setOpenupproject(true);
    const handleCloseup = () => setOpenupproject(false);
    const [box, setBox] = React.useState('none')
    const adProject = () => {
        let a = {
            projname: projname, projdesc: projdesc, projdate: projdate,
            tasks: taskname == undefined || tdesc == undefined || taskedited == undefined || tpriority == undefined ? [] : [{ taskname: taskname, taskdesc: tdesc, taskedited: taskedited, taskpriority: tpriority }]
        }
        ThemeContext.projects.push(a)
        projname = ""; projdate = ""; projdesc = ""
        setProjname('')
        setProjdate('')
        setProjdesc('')
        setOpen(false)
        setProjects(ThemeContext.projects)

    }

    const changevisibility = (ind) => {
        let bo = document.getElementById(ind)
        if (bo.style.display == 'block') {
            bo.style.display = 'none'
        }
        else {
            bo.style.display = 'block'
        }
    }

    return (
        <>
            <Grid>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', borderLeft: '4px solid #E1A100', borderRadius: '10px', backgroundColor: '#2F3439' }}>
                    <h3 style={{ marginLeft: '2rem' }}>Add Projects</h3>
                    <div className="iconcontainer" style={{ display: 'flex', marginRight: '2rem' }}>
                        <AddCircleOutlineIcon onClick={handleOpen2} style={{ color: '#E1A100', marginTop: '0.9rem', fontSize: '32px', alignItems: 'center', textAlign: 'center' }} />
                        <Modal sx={{ background: '#1A1D20' }}
                            open={open2}
                            onClose={handleClose2}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <ClearTwoToneIcon onClick={handleClose2} style={{ color: '#E1A100', position: "absolute", left: '97%', top: '2%' }} />
                                <div className="main" style={{ alignItems: 'center', textAlign: 'center' }}>
                                    <h2 style={{ color: '#E1A100', position: "absolute", top: '-1%', left: '35%' }}>Add Project Information</h2>

                                    <div className="two" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
                                        <div style={{ alignItems: 'center', textAlign: 'center' }}>

                                            <InputBox label={"Enter Project's Name"} onChange={(e) => setProjname(e.target.value)} value={projname}></InputBox>
                                            <InputBox label={"Enter Project's Description"} onChange={(e) => setProjdesc(e.target.value)} value={projdesc}></InputBox>
                                            <Calendar label={"Enter EndDate"} onChange={(e) => setProjdate(e.target.value)} value={projdate} />

                                        </div>
                                        <div className="tasksdiv" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '50%', height: "20%", borderLeft: '4px solid #E1A100', borderRadius: '10px', backgroundColor: '#2F3439' }}>
                                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <h4 style={{ color: '#E1A100', marginLeft: '10px' }}>Add Tasks Information</h4>
                                                {box === 'none' ? <AddCircleOutlineIcon onClick={() => { setBox('block') }} style={{ color: '#E1A100', marginTop: '0.9rem', fontSize: '32px', alignItems: 'center', textAlign: 'center' }} /> : <RemoveCircleOutlineIcon onClick={() => { setBox('none') }} style={{ color: '#E1A100', marginTop: '0.9rem', fontSize: '32px', alignItems: 'center', textAlign: 'center' }} />}
                                            </div>
                                            <div style={{ display: box, alignItems: 'center', textAlign: 'center', padding: '6px', marginBottom: '2px' }}>
                                                <InputBox label={"Edited by Username"} onChange={(e) => setEdited(e.target.value)} value={taskedited}></InputBox>
                                                <InputBox label={"Enter Task's Name"} onChange={(e) => setTname(e.target.value)} value={taskname}></InputBox>
                                                <InputBox label={"Enter Task's Description"} onChange={(e) => setTdesc(e.target.value)} value={tdesc}></InputBox>
                                                <DropBox label={"Enter Priority"} options={['High', 'Normal', 'Moderate']} onChange={(e) => setTpriority(e.target.value)} value={tpriority} />

                                            </div>

                                        </div>

                                    </div>
                                    <div style={{ marginTop: '1.5rem' }}>
                                        <Button name={"Add Project"} onClick={() => adProject()} />
                                    </div>

                                </div>


                            </Box>
                        </Modal>

                    </div>
                </Box>
                {/* Users View */}
                <br /><br /><br />
                <Grid sx={{ padding: '3rem', alignItems: 'center', width: '100%', borderRadius: '10px', backgroundColor: '#2F3439' }}>
                    <Grid>
                        <Box sx={{ borderLeft: '4px solid #E1A100', borderRadius: '10px', backgroundColor: '#1A1D20', width: '20%', padding: '1px' }}>
                            <h2 style={{ margin: ' 10px' }}>Project List</h2>
                        </Box>
                    </Grid>
                    <br />
                    <Grid sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', }}>
                        {projects.length
                            ? <>
                                <Box sx={{ display: 'flex', color: "#E1A100", justifyContent: 'space-between', marginBottom: '2rem', width: '100%', borderLeft: '4px solid #E1A100', borderRadius: '10px', backgroundColor: '#1A1D20' }}>

                                    <div style={{ marginLeft: '10px', width: '20%' }}><p >Project's Name</p></div>
                                    <div style={{ width: '25%' }}> <p >End Date</p></div>
                                    <div style={{ width: '25%' }}> <p>Update</p></div>
                                    <div style={{ width: '10%', marginRight: '10px' }}> <p>Delete</p></div>


                                </Box>
                                {
                                    projects.map((v, i) => (
                                        <>
                                            <Box onClick={() => (changevisibility(i))} sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', width: '100%', borderLeft: '4px solid #E1A100', borderRadius: '10px', backgroundColor: '#1A1D20' }}>

                                                <div style={{ marginLeft: '10px', width: '20%' }}><p >{v.projname}</p></div>
                                                <div style={{ width: '25%' }}> <p >{v.projdate}</p></div>
                                                <div style={{ width: '25%' }}><DynamicFeedIcon onClick={handleOpenup} style={{ boxShadow: '2px 3px 8px 2px #e67e22', color: "#E1A100", background: 'transparent', fontSize: '24px', margin: '10px' }} />
                                                </div>
                                                {/* Update Project Modal */}
                                                <Modal sx={{ background: '#1A1D20' }}
                                                    open={openupproject}
                                                    onClose={handleCloseup}
                                                    aria-labelledby="modal-modal-title"
                                                    aria-describedby="modal-modal-description"
                                                >
                                                    <Box sx={style}>
                                                        <ClearTwoToneIcon onClick={handleCloseup} style={{ color: '#E1A100', position: "absolute", left: '97%', top: '2%' }} />
                                                        <div className="main" style={{ alignItems: 'center', textAlign: 'center' }}>
                                                            <h2 style={{ color: '#E1A100', position: "absolute", top: '-1%', left: '35%' }}>Add Project Information</h2>

                                                            <div className="two" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2rem' }}>
                                                                <div style={{ alignItems: 'center', textAlign: 'center' }}>

                                                                    <InputBox label={"Enter Project's Name"} onChange={(e) => setProjname(e.target.value)} value={projname}></InputBox>
                                                                    <InputBox label={"Enter Project's Description"} onChange={(e) => setProjdesc(e.target.value)} value={projdesc}></InputBox>
                                                                    <Calendar label={"Enter EndDate"} onChange={(e) => setProjdate(e.target.value)} value={projdate} />

                                                                </div>
                                                                <div className="tasksdiv" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '50%', height: "20%", borderLeft: '4px solid #E1A100', borderRadius: '10px', backgroundColor: '#2F3439' }}>
                                                                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                                                        <h4 style={{ color: '#E1A100', marginLeft: '10px' }}>Add Tasks Information</h4>
                                                                        {box === 'none' ? <AddCircleOutlineIcon onClick={() => { setBox('block') }} style={{ color: '#E1A100', marginTop: '0.9rem', fontSize: '32px', alignItems: 'center', textAlign: 'center' }} /> : <RemoveCircleOutlineIcon onClick={() => { setBox('none') }} style={{ color: '#E1A100', marginTop: '0.9rem', fontSize: '32px', alignItems: 'center', textAlign: 'center' }} />}
                                                                    </div>
                                                                    <div style={{ display: box, alignItems: 'center', textAlign: 'center', padding: '6px', marginBottom: '2px' }}>
                                                                        <InputBox label={"Edited by Username"} onChange={(e) => setEdited(e.target.value)} value={taskedited}></InputBox>
                                                                        <InputBox label={"Enter Task's Name"} onChange={(e) => setTname(e.target.value)} value={taskname}></InputBox>
                                                                        <InputBox label={"Enter Task's Description"} onChange={(e) => setTdesc(e.target.value)} value={tdesc}></InputBox>
                                                                        <DropBox label={"Enter Priority"} options={['High', 'Normal', 'Moderate']} onChange={(e) => setTpriority(e.target.value)} value={tpriority} />

                                                                    </div>

                                                                </div>

                                                            </div>
                                                            <div style={{ marginTop: '1.5rem' }}>
                                                                <Button name={"Add Project"} onClick={() => adProject()} />
                                                            </div>

                                                        </div>


                                                    </Box>
                                                </Modal>
                                                {/* Update Project Modal */}
                                                <div style={{ width: '10%', marginRight: '10px' }}>   <HighlightOffTwoToneIcon style={{ boxShadow: '2px 3px 8px 2px #e67e22', color: "#E1A100", background: 'transparent', fontSize: '24px', margin: '10px' }} />
                                                </div>



                                            </Box>
                                            <Box id={i} sx={{ display: 'none', marginBottom: '1rem', width: '100%', borderLeft: '4px solid #E1A100', borderRadius: '10px', backgroundColor: '#1A1D20' }}>
                                                <div>
                                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                                                        <h2 style={{marginLeft:'10px'}}>Tasks</h2>
                                                        <RemoveCircleOutlineIcon onClick={() => (changevisibility(i))} style={{ color: '#E1A100', marginTop: '0.9rem', fontSize: '32px', alignItems: 'center', textAlign: 'center' }} />
                                                    </div>
                                                    <Grid sx={{ padding: '3rem', alignItems: 'center', textAlign: 'center', marginLeft: '1.5rem', marginBottom: '0.5rem', border: '1px solid #E1A100', width: '95%', borderRadius: '10px', backgroundColor: '#2F3439' }}>
                                                        {v.tasks.length ? <>
                                                            <Box sx={{ display: 'flex', color: "#E1A100", justifyContent: 'space-between', marginBottom: '2rem', width: '100%', borderLeft: '4px solid #E1A100', borderRadius: '10px', backgroundColor: '#1A1D20' }}>

                                                                <div style={{ marginLeft: '10px', width: '20%' }}><p >Task's Name</p></div>
                                                                <div style={{ width: '25%' }}> <p >Edited By(User)</p></div>
                                                                <div style={{ width: '25%' }}> <p >Priority</p></div>
                                                                <div style={{ width: '25%' }}> <p>Update</p></div>
                                                                <div style={{ width: '10%', marginRight: '10px' }}> <p>Delete</p></div>


                                                            </Box>
                                                            {

                                                                v.tasks.map((vt, ind) => (
                                                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', width: '100%', borderLeft: '4px solid #E1A100', borderRadius: '10px', backgroundColor: '#1A1D20' }}>

                                                                        <div style={{ marginLeft: '10px', width: '20%' }}><p >{vt.taskname}</p></div>
                                                                        <div style={{ width: '25%' }}> <p >{vt.editedby}</p>{vt.taskedited}</div>
                                                                        <div style={{ width: '25%' }}> <p >{vt.priority}</p>{
                                                                            vt.taskpriority == "High" ? <p style={{ color: 'red' }}>{vt.taskpriority}</p> : vt.taskpriority == "Moderate" ? <p style={{ color: 'green' }}>{vt.taskpriority}</p> : <p style={{ color: 'yellow' }}>{vt.taskpriority}</p>

                                                                        }</div>
                                                                        <div style={{ width: '25%' }}><DynamicFeedIcon onClick={handleOpen1} style={{ boxShadow: '2px 3px 8px 2px #e67e22', color: "#E1A100", background: 'transparent', fontSize: '24px', margin: '10px' }} />
                                                                        </div>
                                                                        <div style={{ width: '10%', marginRight: '10px' }}>   <HighlightOffTwoToneIcon style={{ boxShadow: '2px 3px 8px 2px #e67e22', color: "#E1A100", background: 'transparent', fontSize: '24px', margin: '10px' }} />
                                                                        </div>



                                                                    </Box>

                                                                ))
                                                            }
                                                            <div style={{ display: 'flex', color: '#E1A100', alignItems: 'center', textAlign: 'center', justifyContent: 'center' }}> 
                                                            <AddCircleOutlineIcon onClick={handleOpentask} style={{ fontSize: '22px' }} /></div>
                                                            {/* Add task Modal */}
                                                            <Modal sx={{ background: '#1A1D20' }}
                                                                open={opentask}
                                                                onClose={handleClosetask}
                                                                aria-labelledby="modal-modal-title"
                                                                aria-describedby="modal-modal-description"
                                                            >

                                                                <Box sx={style} >
                                                                    <ClearTwoToneIcon onClick={handleClosetask} style={{ color: '#E1A100', position: "absolute", left: '90%' }} />
                                                                    <div style={{ alignItems: 'center', textAlign: 'center' }}>

                                                                        <h2 style={{ color: '#E1A100' }}>Add Tasks Information</h2>

                                                                        <InputBox label={"Edited by Username"} onChange={(e) => setEdited(e.target.value)} value={taskedited}></InputBox>
                                                                        <InputBox label={"Enter Task's Name"} onChange={(e) => setTname(e.target.value)} value={taskname}></InputBox>
                                                                        <InputBox label={"Enter Task's Description"} onChange={(e) => setTdesc(e.target.value)} value={tdesc}></InputBox>
                                                                        <DropBox label={"Enter Priority"} options={['High', 'Normal', 'Moderate']} onChange={(e) => setTpriority(e.target.value)} value={tpriority} />
                                                                        <Button onClick={handleOpen} name={"Add Task"} />

                                                                    </div>
                                                                </Box>
                                                            </Modal>

                                                            {/* Add Task Modal */}
                                                        </> :
                                                            <div>
                                                                <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}>
                                                                    <DynamicFeedIcon style={{ fontSize: '6rem', color: '#E1A100' }} />
                                                                    <h1>There are No Taks Right Now</h1>
                                                                </Grid>
                                                            </div>

                                                        }


                                                    </Grid>

                                                </div>



                                            </Box>
                                        </>
                                    ))
                                }
                            </>
                            : <div>
                                <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}>
                                    <DynamicFeedIcon style={{ fontSize: '6rem', color: '#E1A100' }} />
                                    <h1>There are No Projects Right Now</h1>
                                </Grid>
                            </div>}

                        <Modal sx={{ background: '#1A1D20' }}
                            open={open1}
                            onClose={handleClose1}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >

                            <Box sx={style} >
                                <ClearTwoToneIcon onClick={handleClose1} style={{ color: '#E1A100', position: "absolute", left: '90%' }} />
                                <div style={{ alignItems: 'center', textAlign: 'center' }}>

                                    <h2 style={{ color: '#E1A100' }}>Updatee Tasks Information</h2>

                                    <InputBox label={"Edited by Username"} onChange={(e) => setEdited(e.target.value)} value={taskedited}></InputBox>
                                    <InputBox label={"Enter Task's Name"} onChange={(e) => setTname(e.target.value)} value={taskname}></InputBox>
                                    <InputBox label={"Enter Task's Description"} onChange={(e) => setTdesc(e.target.value)} value={tdesc}></InputBox>
                                    <DropBox label={"Enter Priority"} options={['High', 'Normal', 'Moderate']} onChange={(e) => setTpriority(e.target.value)} value={tpriority} />
                                    <Button onClick={handleOpen} name={"Update Project"} />

                                </div>
                            </Box>
                        </Modal>
                        <Modal sx={{ background: '#1A1D20', }}
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >

                            <Box sx={style1}>
                                <ClearTwoToneIcon onClick={handleClose} style={{ color: '#E1A100', position: "absolute", left: '90%' }} />
                                <div style={{ alignItems: 'center', textAlign: 'center' }}>

                                    <h2 style={{ color: '#E1A100' }}>Add Tasks Information</h2>
                                    <InputBox label={"Enter Task's Name"}></InputBox>
                                    <InputBox label={"Enter Task's Description"}></InputBox>
                                    <DropBox label={"Enter Priority"} options={['High', 'Normal', 'Middle']} />
                                    <Button name={"Add Task"} />

                                </div>
                            </Box>
                        </Modal>
                    </Grid>
                </Grid>
            </Grid>










        </>
    )
}