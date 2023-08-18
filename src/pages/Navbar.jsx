import {Link, useNavigate} from 'react-router-dom'
import { useUserAuth } from "../context/UserAuthContext";
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import logo from './logo.jpeg'
import { Button } from '@mui/material';

export default function NavBar() {
    const [navbar, setNavbar] = useState(false);
    let { user } = useUserAuth();

    const {logOut} = useUserAuth();
    const navigate = useNavigate();
  
  const handleSubmit = async () => {
    try{
      await logOut();
      navigate('/')
    }catch(err){
      console.log(err)
    }
  }

  const [click,setClick] = useState(false)
  const handleClick = () => setClick(!click)

  const [color,setColor]=useState(false);
  const changeColor = () =>{
      if(window.scrollY >= 100){
          setColor(true);
      }else{
          setColor(false);
      }
  };

  window.addEventListener("scroll",changeColor);

    return (
        <div className='nav'>
        <div className={color ? "header header-bg" : "header"}>
        <Link to='/'>
                  <img src={logo} height="60" alt="Talentship"/>
              </Link>
        <ul className={click ? "nav-menu active":"nav-menu"} style={{cursor:"pointer"}}>
            <li>
                <Link to='/' className='text-dark'>  Home </Link>
            </li>
            <li>
                <Link className='text-dark' to="/principles"> Principles </Link>
            </li>
            <li>
                <Link className='text-dark' to="/allprojects"> Projects </Link>
            </li>
            <li>
                <Link className='text-dark' to="/team"> Team </Link>
            </li>
            <li>
                <Link className='text-dark' to="/contact"> Contact </Link>
            </li>
            {!user && (
                <Link to='/login' className='mx-3'>
                    <Button variant='contained'>Admin</Button>
                </Link>
            )}
            {user && (
                <>
                <Link to='/dashboard'>
                    <Button variant="contained" color='success' className='mx-3 navBtn'>Dashboard</Button>
                </Link>
                <a onClick={handleSubmit}>
                    <Button variant='contained' color='error'>Logout</Button>
                </a>
                </>
            )}
        </ul>
        <div className="ham" onClick={handleClick}>
            {click ? (<CloseIcon fontSize='large' size={25} style={{color: "black"}}/>) : (<MenuIcon fontSize='large' size={25} style={{color: "black"}}/>)}
        </div>
    </div>
        </div>
    );
}