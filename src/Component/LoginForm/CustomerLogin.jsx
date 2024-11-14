import React from 'react'
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import './CustomerLogin.css';
import logo from '../Assests/loginimage.jpeg';
import { UIPanel } from '../../constrants/UIPanel';
import { useDispatch } from 'react-redux';
import { switchActivePanel } from '../../redux/AppUIStateReducer';

function CustomerLogin() {
  const dispatch = useDispatch();
  const handleBack=(panel)=>{
    dispatch(switchActivePanel(panel));
  }
  return (
    <div className='customerLogin' style={{ margin: 0, padding: 0, boxSizing: 'border-box', height: '100vh', width: '100vw', position: 'relative' }}>
        <img src={logo} style={{ height: '100%', width: '100%', position: 'absolute', top: 0, left: 0, objectFit: 'cover' }} alt='background' />

{/* Login Form */}
<div className='wrapper' style={{
  position: 'absolute', // Changed to absolute to fix centering issues
  background: 'rgba(255, 255, 255, 0.1);', 
  border: '1px solid rgba(255, 255, 255, 0.3)', 
  boxShadow: '0 0 5px #000000', 
  width: '420px', 
  color: '#fff', 
  borderRadius: '10px', 
  padding: '30px 40px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)', // Fully centers the wrapper horizontally and vertically
}}>
  <form action="">
    <h1 style={{ fontSize: '36px', textAlign: 'center' }}>Customer Login</h1>
    <div className='input-box' style={{ position: 'relative', marginBottom: '20px' }}>
      <input type='text' placeholder='Customer_Name' required style={{ width: '100%', padding: '10px 40px', borderRadius: '5px' }} />
      <FaUserAlt className='icon' style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} />
    </div>
    <div className='input-box' style={{ position: 'relative', marginBottom: '20px' }}>
      <input type='text' placeholder='Customer_Id' required style={{ width: '100%', padding: '10px 40px', borderRadius: '5px' }} />
      <FaUserAlt className='icon' style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} />
    </div>
    <div className="input-box" style={{ position: 'relative', marginBottom: '20px' }}>
      <input type="password" placeholder='Customer_Password' required style={{ width: '100%', padding: '10px 40px', borderRadius: '5px' }} />
      <FaLock className='icon' style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} />
    </div>
    <div className="remember-forgot" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
      <label><input type="checkbox" /> Remember me</label>
      <a href="#">Forgot password</a>
    </div>
    <button type='submit' style={{
      width: '100%', padding: '10px', background: '#E600E6', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer'
    }}>Login</button>
    <button type='submit' style={{
      width: '100%', padding: '10px', background: '#E600E6', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop:'15px'
    }} onClick={()=>handleBack(UIPanel.LoginForm)}>Back</button>
  </form>
</div>
    </div>
  )
}

export default CustomerLogin
