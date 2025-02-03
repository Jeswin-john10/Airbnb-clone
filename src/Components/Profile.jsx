
import React from 'react'
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
function Profile() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div >
     <div className=' '>
     <Dropdown>
      <div className='profile'><MenuButton><span className='p-2'><MenuRoundedIcon/></span><AccountCircleIcon/></MenuButton></div>
      <Menu>
        <MenuItem onClick={handleShow}>Sign up</MenuItem>
        <MenuItem onClick={handleShow}>Login</MenuItem>
      <hr></hr>
        <MenuItem>Airbnb your home</MenuItem>
        <MenuItem>Host an experience</MenuItem>
        <MenuItem>Help center</MenuItem>

      </Menu>
    </Dropdown>  
     </div>
    
   {/* modal */}
   
   <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-center'> <h5 className='text-center'>Log in or Sign up</h5></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <h4>Welcome to Airbnb</h4>
          <input type="number" placeholder='Country /region' className='w-100 h-100 p-2 mt-2 border-1 shadow rounded-1'/>
          <input type="number" placeholder='phone number' className='w-100 h-100 mt-2 p-2 border-1 shadow rounded-1' />

          <p className='mt-2' style={{fontSize:"10px"}}>We’ll call or text you to confirm your number. Standard message and data rates apply.<span style={{borderBottom:"1px solid black"}}>Privacy Policy</span> </p>
        <button className='btn border-1 shadow rounded-2 w-100 text-light' style={{backgroundColor:"#FF385C"}}>Cotinue</button>
<p className='text-center mt-2'>or</p>
<hr></hr>
<button className='btn w-100 border-2 rounded-2 shadow mt-2 '><img className='img-google' src="https://w7.pngwing.com/pngs/989/129/png-transparent-google-logo-google-search-meng-meng-company-text-logo-thumbnail.png" alt="" />  Google</button>
<button className='btn w-100 border-2 rounded-2 shadow mt-2'><img className='img-google' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCvh-j7HsTHJ8ZckknAoiZMx9VcFmsFkv72g&s" alt="" />  Apple</button>
<button className='btn w-100 border-2 rounded-2 shadow mt-2'><img className='img-google' src="https://t3.ftcdn.net/jpg/07/93/63/68/360_F_793636894_LDL95n6pMIsJNahYHirh7kThodeoxN0B.jpg" alt="" />  Mail</button>
<button className='btn w-100 border-2 rounded-2 shadow mt-2'><img className='img-google' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/768px-Facebook_Logo_%282019%29.png" alt="" />  Facebook</button>

          </Form>
        </Modal.Body>
      
      </Modal>
     
    </div>
  )
}

export default Profile