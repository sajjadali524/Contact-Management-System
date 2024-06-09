import { useEffect, useState } from "react";
import axios from "axios";

const Contacts = () => {
  // State to store contacts
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        // Fetch contacts from backend API
        const response = await axios.get(`http://localhost:8000/api/contacts/contact`);
        // Update contacts state with the fetched data
        setContacts(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchContacts(); // Call the function to fetch contacts
  }, []);

  return (
    <div>
      <h1>Contacts</h1>
      <ul>
        {/* Map over contacts array and display each contact */}
        {contacts.map(contact => (
          <li key={contact._id}>
            {contact.fname} {contact.lname} - {contact.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;