import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [input, setInput] = useState({
    username: '',
    email: '',
    password: ''
  })
  const navigate = useNavigate();

  const handleForm = (e) => {
    setInput({...input, [e.target.name]: e.target.value})
  }

  const registerUser = async(e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/auth/register", input);
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex items-center justify-center bg-red-400 w-full h-[85vh]">
      <form className="w-1/3 px-10 space-y-3" onSubmit={registerUser}>
        <h1 className="text-[20px] font-semibold text-center">Register Your Account</h1>
        <div className="flex flex-col">
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="Enter Username" name="username" onChange={handleForm} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Enter Email" name="email" onChange={handleForm} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Enter Password" name="password" onChange={handleForm} />
        </div>
        <div className="flex flex-col space-y-2">
          <h1>Already have an account? <Link to="/" className="text-blue-700">Login</Link></h1>
          <button type="submit" className="w-full py-2 bg-gray-200">Register</button>
        </div>
      </form>
    </div>
  )
}

export default Register