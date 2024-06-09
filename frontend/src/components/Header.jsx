import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

const Header = () => {
  const token = window.localStorage.getItem("token");
  const navigate = useNavigate();

  window.history.forward();
  const logoutUser = (e) => {
    e.preventDefault();
    try {
      axios.get("http://localhost:8000/api/auth/logout")
      window.localStorage.removeItem("token");
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex items-center justify-between px-20 py-3 bg-green-200">
      <Link to={token ? "/home" : "/"}>Header</Link>
      {token ? <div className="space-x-10">
        <Link to="/Home">Home</Link>
        <Link to="/Contacts">Contacts</Link>
        <button onClick={logoutUser}>Logout</button>
      </div> :
      <div className="space-x-10">
        <Link to="/register">Register</Link>
        <Link to="/">Login</Link>
      </div>}
    </div>
  )
}

export default Header