import React from 'react'
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
function Showmap() {
  return (
    <div className='d-flex justify-content-center align-items-center'>

        <button className='btn  btn-dark text-light shadow rounded-5 b-2 text-center position-fixed z-2'>Show map <MapOutlinedIcon/></button>
    </div>
  )
}

export default Showmap