import { useState } from "react";
import {  NavLink, useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate()
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  })

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setUserData(prev => ({...prev, [name]: value}))
  }

  const verifyUser = (e) => {
    e.preventDefault();
    if(JSON.parse(localStorage.getItem('userData') == null)){
      alert(`you don't have account signup first`)
    }else{    
    const data = JSON.parse(localStorage.getItem('userData'));
    if(data.email == userData.email && data.password == userData.password){
      alert('you logged in')
      navigate('/')
    }else{
      if(userData.email !== data.email){
        alert('incorrect email')
      }else{
        alert('incorrect password')
      }
    }}

  }


    return (<>
      <div className="login-container">
    <div className="form-container login">
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="Email" required value={userData.email} onChange={(e) => handleInputChange(e)} autoComplete="off" name="email"/>
        <input type="password" placeholder="Password" required value={userData.password} onChange={(e) => handleInputChange(e)} autoComplete="off" name="password"/>
        <button type="submit" onClick={(e) => verifyUser(e)}>Login</button>
        <NavLink to='/'><button className="home-button">Home</button></NavLink>
      </form>
      <div className="toggle-container">
        <p>Don't have an account? <NavLink to='/signup'>Sign Up</NavLink></p>
      </div>
    </div>
    </div>
    </>
);
}

export default Login;