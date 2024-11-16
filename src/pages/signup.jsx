import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'

function SignupPage() {

  const navigate = useNavigate()
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({...prev, [name]: value}))
  }


  const storeUserData = (e) => {
    e.preventDefault();
    if(JSON.parse(localStorage.getItem('userData')) === null){
      if(userData.name == '' || userData.email == '' || userData.password == ''){
        alert('Fill entire form to signup')
      }else{
        localStorage.setItem('userData', JSON.stringify(userData));
        navigate('/login')
      }
    }else{
      alert('you already have a account')
    }
  }


    return (
    <div className="form-container signup" id="signup">
      <h2>Sign Up</h2>
      <form>
        <input type="text" placeholder="Username" required value={userData.name} onChange={(e) => handleInputChange(e)} name='name' autoComplete='off'/>
        <input type="email" placeholder="Email" required value={userData.email} onChange={(e) => handleInputChange(e)} name='email' autoComplete='off'/>
        <input type="password" placeholder="Password" required value={userData.password} onChange={(e) => handleInputChange(e)} name='password' autoComplete='off'/>
        <button type="submit" onClick={(e) => storeUserData(e)}>Sign Up</button>
        <NavLink to='/'><button className="home-button">Home</button></NavLink> 
      </form>
      <div className="toggle-container">
        <p>Already have an account?<NavLink to='/login' style={{color: 'white'}}>Login</NavLink></p>
      </div>
    </div>
);
}

export default SignupPage;