import React from 'react'
import { Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import {logo} from '../utils/constants';
import SearcBar from './SearchBar';




const Navbar = () => {
  return (
    <Stack 
            direction="row" 
            alignItems="center" 
            sx={{
                position:'sticky' , 
                background:'#000' , 
                top:0 , 
                justifyContent:'space-between',
                padding:'20px'
                }}
    >
                {/* Logo */}
                <Link to="/" style={{display:'flex' , alignItems:'center'}}>
                    <img  src={logo} alt="logo" height={45}/>
                </Link>
                {/* search bar */}
                <SearcBar/>


    </Stack>
  )
}

export default Navbar