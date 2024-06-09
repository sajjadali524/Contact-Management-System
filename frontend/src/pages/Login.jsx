import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [input, setInput] = useState({
    emain: '',
    password: ''
  })
  const navigate = useNavigate();

  const handleForm = (e) => {
    setInput({...input, [e.target.name]: e.target.value})
  }

  axios.defaults.withCredentials = true;
  window.history.forward();
  const registerUser = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/auth/login", input)
      const token = response.data;
      console.log(token)
      window.localStorage.setItem("token", "ksdlkflkdsbkskjsadbckjsd")
      window.localStorage.setItem("name", token);
      navigate("/home")
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <div className="flex items-center justify-center bg-red-400 w-full h-[85vh]">
      <form className="w-1/3 px-10 space-y-3" onSubmit={registerUser}>
        <h1 className="text-[20px] font-semibold text-center">Login Your Account</h1>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Enter Email" name="email" onChange={handleForm} />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Enter Password" name="password" onChange={handleForm} />
        </div>
        <div className="flex flex-col space-y-2">
          <h1>Dont have an account? <Link to="/register" className="text-blue-700">Register</Link></h1>
          <button type="submit" className="w-full py-2 bg-gray-200">Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login