import React from 'react'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
function Bottomnan() {
    const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className='bottom-nav d-flex justify-content-center d-md-none '>
        
        <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
      <BottomNavigationAction 
        label="Recents"
        value="recents"
        icon={<SearchRoundedIcon />}
      />
      <BottomNavigationAction
        label="Favorites"
        value="favorites"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label="Nearby"
        value="nearby"
        icon={<PersonOutlineIcon/>}
      />
    </BottomNavigation>
    </div>
  )
}

export default Bottomnan
