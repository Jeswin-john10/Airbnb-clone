import React from 'react'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
function Footer() {
  return (
    <>
    <div className='d-md-inline d-none'>
<h5 className='ms-4'>inspiration for future gateways</h5>
<div className='footer-head d-flex justify-content-start align-items-center shadow '>
  <div className='footer-hover p-2'>
    Popular
  </div>
  <div className='footer-hover p-2'>
    Art & culture
  </div> <div className='footer-hover p-2'>
    Outdoors
  </div> <div className='footer-hover p-2'>
    Mountains
  </div> <div className='footer-hover p-2'>
   Beach
  </div> <div className='footer-hover p-2'>
    Unique stays
  </div> <div className='footer-hover p-2'>
    Categories
  </div>
  <div className='footer-hover p-2'>
   Thing to do
  </div>
</div>


<div className='row mt-5 '>
<div className='col-2 mt-2'>
<div className='p-2'>
  <h6>can more</h6>
flat rendel
</div>
<div className='p-2'>
  <h6>tuk son</h6>
mantion rental
</div><div className='p-2'>
  <h6>anaheim</h6>
family-freindly rendel
</div>
</div>

<div className='col-2 mt-2'>
<div className='p-2'>
  <h6>banalmadenae</h6>
beach house rendal
</div>
<div className='p-2'>
  <h6>jasper</h6>
cabin rendal
</div><div className='p-2'>
  <h6>monterey</h6>
cottege rendal</div>
</div>

<div className='col-2 mt-2'>
<div className='p-2'>
  <h6>marbella</h6>
house rendel
</div>
<div className='p-2'>
  <h6>mountain view</h6>
family-frendly rental
</div><div className='p-2'>
  <h6>paso robles</h6>
house  rendel
</div>
</div>
<div className='col-2 mt-2'>
<div className='p-2'>
  <h6>prescott</h6>
pet-freindly rendel
</div>
<div className='p-2'>
  <h6>mallacotta</h6>
beach house rendal
</div><div className='p-2'>
  <h6>sonama</h6>
house rendel
</div>
</div>
<div className='col-2 mt-2'>
<div className='p-2'>
  <h6>scottdale</h6>
house rendel
</div>
<div>
  <h6>ibiza</h6>
holidays rental
</div><div className='p-2'>
  <h6>show more<KeyboardArrowDownOutlinedIcon/>
  </h6>
</div>
</div>
</div>


    </div>

<hr></hr>

{/*  */}

<div className='container-fluid d-flex justify-content-around align-items-center'>
<div className='row mt-2 mb-2 '>
  <div className='col-md-4 mt-3'>
<h6>support</h6>
Help center<br></br>
Aircover<br></br>
Anti-descrimination<br>
</br>
Disability support<br></br>
Cancelation option<br></br>
Report neighbourhood concert
  </div>
  <div className='col-md-4 mt-3'>
<h6>hosting</h6>
Airbnb your home<br></br>
Air cover for host<br></br>
Hosting resources<br>
</br>
Community forum<br>
</br>
Hosting responbly<br></br>
Join a free hosting class<br></br>
Find a co-host

  </div>
  <div className='col-md-4 mt-3'>
<h6>Airbnb</h6>
Newsroom<br></br>
New feature<br></br>
Careers<br></br>
Investors<br></br>
Airbnb.org emergency stays
</div>
</div>
</div>
<hr></hr>
<div className='row mt-2 mb-5'>
<div className='col-1'>

</div>
<div className='col-md-5'>
  © 2025 Airbnb,inc. Privacy . Terms . Sitemap . Company details
</div>
<div className='col-3'>

</div>
<div className='col-md-3'>
<LanguageOutlinedIcon/> English(IN)  ₹ INR  <FacebookOutlinedIcon/> <FontAwesomeIcon icon={faTwitter} /> <FontAwesomeIcon icon={faInstagram} />
</div>
</div>
    </>
  )
}

export default Footer