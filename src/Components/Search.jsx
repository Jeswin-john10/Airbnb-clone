import React from 'react'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export function Search() {
      const [show, setShow] = useState(false);
    
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);
  return (
    <div>
        <div className='d-flex justify-content-center align-items-center  d-md-none search-header'>
<div className='d-flex justify-content-center align-items-ccenter'>
<Button onClick={handleShow} variant="light" className='mt-4 text-center' style={{width:"300px",backgroundColor:"white",border:"1px solid grey",boxShadow:"10px 15px 20px white",borderRadius:"200px"}}><FontAwesomeIcon icon={faMagnifyingGlass} />  Start your search</Button>
</div>

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Where to?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <input className='w-100 p-3 rounded-2' type="text" placeholder='  Search destination ' />
            <h6 className='mt-2' style={{textTransform:"lowercase"}}>suggest destination</h6>

            <div className='d-flex align-items-center'>
              <div><img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/fa32e243-625d-486b-80d2-0a1bd74e214f.png" alt="" style={{width:"50px"}} /></div>
             <div> <h6 className='ms-3' style={{fontSize:"10px"}}> Kochi,Kerala <br></br>For nature lovers</h6></div>
            </div>
            <div className='d-flex align-items-center'>
              <div><img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/b5648dad-1d76-43e4-9bbd-18ebce84ab7f.png" alt="" style={{width:"50px"}} /></div>
             <div> <h6 className='ms-3' style={{fontSize:"10px"}}> new delhi,delhi <br></br>For sights like india gate</h6></div>
            </div>
            <div className='d-flex align-items-center'>
              <div><img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/06f0f050-c167-4d1e-89e1-2775be94f82a.png" alt="" style={{width:"50px"}} /></div>
             <div> <h6 className='ms-3' style={{fontSize:"10px"}}> north goa,goa<br></br>popular beach destination</h6></div>
            </div>
            <div className='d-flex align-items-center'>
              <div><img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/ebb968b2-3fb6-45d3-b675-7765e487f7b9.png" alt="" style={{width:"50px"}} /></div>
             <div> <h6 className='ms-3' style={{fontSize:"10px"}}> south goa,goa<br></br>For nature lovers</h6></div>
            </div>
            <div className='d-flex align-items-center'>
              <div><img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/ed75c050-042b-44ba-a991-54044d93a91b.png" alt="" style={{width:"50px"}} /></div>
             <div> <h6 className='ms-3' style={{fontSize:"10px"}}> jaipur,rajasthan<br></br>For its stunning architecture</h6></div>
            </div>
            
            <div className='d-flex align-items-center'>
              <div><img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-hawaii-autosuggest-destination-icons-1/original/41bb6ae3-07f4-4ef4-b9d7-37d9f7a55d2b.png" alt="" style={{width:"50px"}} /></div>
             <div> <h6 className='ms-3' style={{fontSize:"10px"}}> bangaluru,karnataka<br></br>For its top-notch dining</h6></div>
            </div>
          
          </form>
          <div className='mt-2 d-flex justify-content-between align-items-center p-2 bg-light rounded-3' style={{border:"1px solid black",boxShadow:"0px 10px 15px white"}}>
              <div>when</div>
              <div><h6>Add dates</h6></div>
              </div>
              <div className='mt-2 d-flex justify-content-between align-items-center p-2 bg-light rounded-3' style={{border:"1px solid black",boxShadow:"0px 10px 15px white"}}>
              <div>who</div>
              <div><h6>Add guests</h6></div>
              </div>
        </Modal.Body>
        
        <Modal.Footer>
       
          <Button variant="secondary" onClick={handleClose}>
          <a href=""> clear all</a>
          </Button>
          <Button variant="" style={{backgroundColor:"#FF385c",color:"white"}} onClick={handleClose}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className='me-2 text-light'/>Search
          </Button>
        </Modal.Footer>
      </Modal>

</div>
    </div>
  )
}

export default Search