import { useState } from 'react';
import Addcontact from "../components/Addcontact";

const Home = () => {
  const [toggle, setToggle] = useState(false);

  const toggleForm = () => {
    setToggle(!toggle);
  };

  return (
    <div className="relative">
      {toggle && <div className="absolute inset-0 bg-black opacity-50 z-10"></div>}
      <div className="flex flex-col items-center py-10 w-full h-[85vh]">
        <button className="bg-green-700 text-white py-3 px-10" onClick={toggleForm}>Add +</button>
        {toggle && (
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-20">
            <div className="relative w-1/3 bg-white p-6 rounded-lg">
              <button className="absolute top-1 right-1 bg-red-500 text-white px-2 rounded-full" onClick={toggleForm}>X</button>
              <Addcontact />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
