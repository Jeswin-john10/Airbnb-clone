
import React from 'react'
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function Profile() {
  return (
    <div >
     <div className=' '>
     <Dropdown>
      <div className='profile'><MenuButton><span className='p-2'><MenuRoundedIcon/></span><AccountCircleIcon/></MenuButton></div>
      <Menu>
        <MenuItem>Sign up</MenuItem>
        <MenuItem>Login</MenuItem>
      <hr></hr>
        <MenuItem>Airbnb your home</MenuItem>
        <MenuItem>Host an experience</MenuItem>
        <MenuItem>Help center</MenuItem>

      </Menu>
    </Dropdown>  
     </div>
    
   
     
    </div>
  )
}

export default Profile