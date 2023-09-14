import React, { useState } from "react";
import { useParams,useNavigate } from 'react-router-dom';
import axios from "axios";
// import { Select, Option } from "@material-tailwind/react";
import CompletedRegistration from "./completedRegistration";



function RegistrationForm() {
  const { n } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    collegeName:"",
    Aemail:"",
  });
  const navigate = useNavigate()

  const [registrationComplete, setRegistrationComplete] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value ,n:n});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://flagship-registeration-backend.onrender.com/api/register", formData);
      if (response.status === 200) {
        console.log("Registration successful");
        setRegistrationComplete(true);
      } else {
        console.error("Registration failed");
        navigate('/error');
      }
    } catch (error) {
      console.error("Error:", error);
      navigate('/error');
    }
  };

  return (
    <div>
      {registrationComplete ? (
        <CompletedRegistration/>
      ) : (
        
        <div className=" sm:mx-auto sm:w-full sm:max-w-sm ">
          <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center">
          <img
            src="fsfs.png"
            className="h-8 mr-3"
            alt=""
            // alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            flagship
          </span>
        </a>
      </div>
    </nav>
          <form className="space-y-6 mt-10 " action="#" method="POST" onSubmit={handleSubmit}>
          <div>
              <label  htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Full Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="Full Name"
                  placeholder="    Your Full Name"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label  htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="    Your email address"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label  htmlFor="Aemail" className="block text-sm font-medium leading-6 text-gray-900">
                Alternate Email address
              </label>
              <div className="mt-2">
                <input
                  id="Aemail"
                  name="Aemail"
                  type="Aemail"
                  autoComplete="Aemail"
                  placeholder="    Alternate email address"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={formData.Aemail}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label  htmlFor="phoneNumber" className="block text-sm font-medium leading-6 text-gray-900">
                Whatsapp number
              </label>
              <div className="mt-2">
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="number"
                  autoComplete="phoneNumber"
                  placeholder="    Phone Number"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="relative w-full lg:max-w-sm">
            <label  htmlFor="CollegeName" className="block text-sm font-medium leading-6 text-gray-900">
                College Name
              </label>
            <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
            name="collegeName"
            value={formData.collegeName}
            onChange={handleChange}>
              <option value="Select from below">Select from below</option>
              <option value="IIM Nagpur">IIM Nagpur</option>
              <option value="AIIMS Nagpur">AIIMS Nagpur</option>
              <option value="Yeshwantrao Chavan College of Engg (YCCE), Nagpur">Yeshwantrao Chavan College of Engg (YCCE), Nagpur</option>
              <option value="Cummins College of Engineering for Women, Nagpur">Cummins College of Engineering for Women, Nagpur</option>
              <option value="Symbiosis Institute of Technology [SIT], Nagpur">Symbiosis Institute of Technology [SIT], Nagpur</option>
              <option value="GHRaisoni College of Engineering [GHRCE], Nagpur">GHRaisoni College of Engineering [GHRCE], Nagpur</option>
              <option value="Indian Institute of Information Technology [IIIT], Nagpur">Indian Institute of Information Technology [IIIT], Nagpur</option>
              <option value="Nagpur Institute of Technology [NIT], Nagpur">Nagpur Institute of Technology [NIT], Nagpur</option>
              <option value="Ramdeobaba">Ramdeobaba</option>
              <option value="Government Medical College Nagpur">Government Medical College Nagpur</option>
              <option value="Priyadarshini College of Engineering">Priyadarshini College of Engineering</option>
              <option value="others">Other</option>
            </select>
        </div>
        <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register Now
              </button>
            </div>
          </form>
          </div>
      )}
    </div>
  );
}

export default RegistrationForm;
