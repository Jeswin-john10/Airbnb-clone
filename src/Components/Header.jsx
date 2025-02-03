import { faBars, faGlobe, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import Profile from './Profile';
import Bottomnan from './Bottomnan';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Search from './Search';

function Header() {

  return (
    <>
{/*  */}

    {/*  */}
    <div className=' d-md-inline d-none'>

    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
      <Navbar.Brand href="#" ><img src="https://img.icons8.com/?size=512&id=103424&format=png" alt="" style={{width:"50px"}}/></Navbar.Brand>
        <Navbar.Brand className='me-auto ' href="#" style={{textTransform:"lowercase",color:"#FF385C"}}>Airbnb</Navbar.Brand>
        <div className='search-bar me-auto'>
<div className='search-bar-text1'>Any where</div>
<div className='search-bar-text2'>Any weak</div>
<div className='search-bar-text3'>Add guests</div>
<div className='search-icon'>
<FontAwesomeIcon icon={faMagnifyingGlass} />

  </div></div>
  <div className='airbnb-log gap-3 d-lg-flex d-none justify-content-end align-items-center '>
    <div style={{color:"black"}}>Airbnb your home</div>   
    <div style={{fontSize:"1.2rem"}}><FontAwesomeIcon icon={faGlobe} /></div>
    <div className='air-style'>
      <Profile/>
    </div>
    </div>     
     
       
      </Container>
    </Navbar>

    {/* />
    <FontAwesomeIcon icon={faBars} /> */}

    </div>

<div>
<Bottomnan/>

</div>
</>
   
  )
}

export default Header