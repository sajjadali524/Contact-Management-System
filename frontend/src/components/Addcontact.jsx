import { useState } from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"

const Addcontact = () => {
  const [form, setForm] = useState({
    fname: '',
    lname: '',
    number: ''
  })

  const navigate = useNavigate();

  const handleForm = (event) => {
    setForm({...form, [event.target.name]: event.target.value})
  }

  const getuserID = () => {
    return localStorage.getItem("token");
  }

  const addContact = async(event) => {
    event.preventDefault();
    try {
      const userID = getuserID;
      await axios.post("http://localhost:8000/api/contacts/add-contact", {userID, ...form})
      navigate("/contacts")
      console.log(userID)
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <form className="space-y-3" onSubmit={addContact}>
        <div className="flex flex-col space-y-1">
            <label htmlFor="fname">First Name</label>
            <input className="outline-none border border-gray-300 py-1 rounded-md px-3" type="text" placeholder="john" name="fname" onChange={handleForm} />
        </div>
        <div className="flex flex-col space-y-2">
            <label htmlFor="fname">Last Name</label>
            <input className="outline-none border border-gray-300 py-1 rounded-md px-3" type="text" placeholder="Doe" name="lname" onChange={handleForm} />
        </div>
        <div className="flex flex-col space-y-2">
            <label htmlFor="fname">Number</label>
            <input className="outline-none border border-gray-300 py-1 rounded-md px-3" type="number" placeholder="12345" name="number" onChange={handleForm} />
        </div>
        <div className="flex flex-col space-y-2">
          <button type="submit" className="bg-green-500 text-white outline-none border border-gray-300 py-1 rounded-md px-3">Done</button>
        </div>
    </form>
  )
}

export default Addcontact