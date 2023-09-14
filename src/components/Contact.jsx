import React, { useState } from "react";
import { useParams,useNavigate } from 'react-router-dom';
import axios from "axios";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import Popup from './Popup';
import CompletedRegistration from "./completedRegistration";

const Contact = () => {

  // const { n } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    collegeName:"",
    Aemail:"",
  });

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  const [popupMessage, setPopupMessage] = useState('');

  const navigate = useNavigate()

  const [registrationComplete, setRegistrationComplete] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://flagship-registeration-backend.onrender.com/api/register", formData);
      if (response.status === 200) {
        console.log("Registration successful");
        setRegistrationComplete(true);
        setIsSuccess(true);
        setPopupMessage('Registration completed successfully.');
      } else {
        console.error("Registration failed");
        navigate('/error');
        setIsSuccess(false);
        setPopupMessage('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error("Error:", error);
      navigate('/error');
      setIsSuccess(false);
      setPopupMessage('Registration failed. Please try again.');
    }
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };



  return (
    <div id="contact" className="h-full">
      {registrationComplete ? (
        <CompletedRegistration/>
      ) : (
      <div className="container mx-auto py-32 px-5 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px] ">
          <motion.h2
            variants={fadeIn("up", "spring", 0.5, 0.75)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-21"
          >
            Register <span className="text-[blue]">Now</span>
          </motion.h2>
          <motion.form
      variants={fadeIn("up", "spring", 0.5, 0.75)}
      initial="hidden"
      animate="show"
      exit="hidden"
      action="#"
      method="POST"
      onSubmit={handleSubmit}
      className={`${textVariant()} flex-1 flex flex-col gap-6 w-full mx-auto`}
    >
      <div className="flex gap-x-6 w-full">
        <input
          type="text"
          placeholder="name"
          className="input"
          id="name"
          name="name"
          autoComplete="Full Name"
          required
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="number"
          className="input"
          id="phoneNumber"
          name="phoneNumber"
          autoComplete="phoneNumber"
          required
          value={formData.phoneNumber}
          onChange={handleChange}
        />
      </div>
      <input
        type="email"
        placeholder="email"
        className="input"
        id="email"
        name="email"
        autoComplete="email"
        required
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="email"
        placeholder="Alternate email address"
        className="input"
        id="Aemail"
        name="Aemail"
        autoComplete="Aemail"
        required
        value={formData.Aemail}
        onChange={handleChange}
      />
      <div className="relative w-full lg:max-w-sm">
        {/* <label htmlFor="collegeName" className="block text-sm font-medium leading-6 text-gray-900">
          College Name
        </label> */}
        <select
          className="w-full p-2.5 text-gray-500 bg-[#121212] border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
          name="collegeName"
          id="collegeName"
          value={formData.collegeName}
          onChange={handleChange}
        >
          <option value="Select from below">College Name</option>
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
      <button
        type="submit"
        className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent-group hover:shadow-[inset_0_0_0.5rem_4em_blue] hover:translate-y-[-0.5rem] hover:text-[color:var(--hover-b)]"
      >
        <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
          Register
        </span>
      </button>
    </motion.form>
    {isPopupOpen && (
        <Popup message={popupMessage} isSuccess={isSuccess} onClose={closePopup} />
      )}
        </div>
      </div>
      )};
    </div>
  );
};

export default Contact;
