import React from 'react';
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import './LoginForm.css';
import logo from '../Assests/loginimage.jpeg';
import { UIPanel } from '../../constrants/UIPanel';
import { switchActivePanel } from '../../redux/AppUIStateReducer';
import { useDispatch } from 'react-redux';
import { checkLogin } from '../../redux/LogisticStateReducer';

function LoginForm() {
  const dispatch = useDispatch();
  
  const handleLogin=(panel)=>{
    dispatch(checkLogin(true));
    dispatch(switchActivePanel(panel));
  }
  return (
    <div className='login' style={{ margin: 0, padding: 0, boxSizing: 'border-box', height: '100vh', width: '100vw', position: 'relative' }}>
      {/* Background Image */}
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
          <h1 style={{ fontSize: '36px', textAlign: 'center' }}>Login</h1>
          <div className='input-box' style={{ position: 'relative', marginBottom: '20px' }}>
            <input type='text' placeholder='UserName' required style={{ width: '100%', padding: '10px 40px', borderRadius: '5px' }} />
            <FaUserAlt className='icon' style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} />
          </div>
          <div className="input-box" style={{ position: 'relative', marginBottom: '20px' }}>
            <input type="password" placeholder='Password' required style={{ width: '100%', padding: '10px 40px', borderRadius: '5px' }} />
            <FaLock className='icon' style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)' }} />
          </div>
          <div className="remember-forgot" style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            <label><input type="checkbox" /> Remember me</label>
            <a href="#">Forgot password</a>
          </div>
          <button type='submit' style={{
            width: '100%', padding: '10px', background: '#E600E6', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer'
          }} onClick={()=>handleLogin(UIPanel.AdminDashboard)}>Login</button>
          <div className="register-link">
                <p>If you're a customer? <a href="#" onClick={()=>handleLogin(UIPanel.CustomerLoginForm)}>Click Here</a></p>
            </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
