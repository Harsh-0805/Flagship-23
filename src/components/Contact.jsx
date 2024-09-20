import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import Popup from "./Popup";
import CompletedRegistration from "./completedRegistration";
import QRCode from "qrcode.react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    collegeName: "",
    Aemail: "",
  });

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  const [popupMessage, setPopupMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // New state for loader

  const navigate = useNavigate();
  const [registrationComplete, setRegistrationComplete] = useState(false);
  const [qrCodeData, setQRCodeData] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email" || name === "Aemail") {
      setFormData({ ...formData, [name]: value.toLowerCase() });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Start loading when form submission begins

    try {
      const response = await axios.post(
        "https://flagship-registration-bakend.onrender.com/api/register",
        formData
      );
      if (response.status === 200) {
        setRegistrationComplete(true);
        setIsSuccess(true);
        setPopupMessage("Registration completed successfully.");
        const userDataString = `id:fs-${formData.name}/-19987-12246/registered-19987-12246${formData.phoneNumber}`;
        const userDataURL = encodeURIComponent(userDataString);
        const googleChartAPIURL = `https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=${userDataURL}`;
        setQRCodeData(googleChartAPIURL);
      } else {
        navigate("/error");
        setIsSuccess(false);
        setPopupMessage("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      navigate("/error");
      setIsSuccess(false);
      setPopupMessage("Registration failed. Please try again.");
    }

    setIsPopupOpen(true);
    setIsLoading(false); // Stop loading after request completes
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div id="contact" className="h-full">
      {registrationComplete ? (
        <div>
          <div className="bg-gradient-to-r from-slate-900 to-blue-800 ">
            <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
              <div className="relative isolate overflow-hidden px-6 pt-16 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                  <img
                    className="m-[auto] pb-5"
                    src={qrCodeData}
                    alt="QR Code"
                  />
                  <h3>Keep screenshot of this page for verification</h3>
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    Registration successful.
                    <br />
                    <br />
                    Click below to know more about E-Cell Vnit
                  </h2>
                  <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                    <a
                      href="https://www.ecellvnit.org/"
                      className="text-sm font-semibold leading-6 text-white"
                    >
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
              Register <span className="text-[blue]">Here</span>
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
                  pattern="\d{10}"
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
                autoCapitalize="none"
                pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                style={{ textTransform: "none" }}
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
                autoCapitalize="none"
                pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                style={{ textTransform: "none" }}
                value={formData.Aemail}
                onChange={handleChange}
              />
              <div className="relative w-full ">
                <select
                  className="w-full p-2.5 text-gray-500 bg-[#121212] border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
                  name="collegeName"
                  id="collegeName"
                  value={formData.collegeName}
                  onChange={handleChange}
                >
                  <option value="Select from below">College Name</option>
                  <option value="Visvesvaraya National Institute of Technology(VNIT),Nagpur">
                    Visvesvaraya National Institute of Technology(VNIT),Nagpur
                  </option>
                  <option value="IIM Nagpur">IIM Nagpur</option>
                  <option value="AIIMS Nagpur">AIIMS Nagpur</option>
                  <option value="Yeshwantrao Chavan College of Engg (YCCE), Nagpur">
                    Yeshwantrao Chavan College of Engg (YCCE), Nagpur
                  </option>
                  <option value="Cummins College of Engineering for Women, Nagpur">
                    Cummins College of Engineering for Women, Nagpur
                  </option>
                  <option value="Symbiosis Institute of Technology [SIT], Nagpur">
                    Symbiosis Institute of Technology [SIT], Nagpur
                  </option>
                  <option value="GHRaisoni College of Engineering [GHRCE], Nagpur">
                    GHRaisoni College of Engineering [GHRCE], Nagpur
                  </option>
                  <option value="Indian Institute of Information Technology [IIIT], Nagpur">
                    Indian Institute of Information Technology [IIIT], Nagpur
                  </option>
                  <option value="Nagpur Institute of Technology [NIT], Nagpur">
                    Nagpur Institute of Technology [NIT], Nagpur
                  </option>
                  <option value="Ramdeobaba">Ramdeobaba</option>
                  <option value="Government Medical College Nagpur">
                    Government Medical College Nagpur
                  </option>
                </select>
              </div>

              {/* Conditional rendering for loader */}
              <button
                type="submit"
                className="btn btn-lg btn-blue w-full"
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Register"}
              </button>
            </motion.form>
          </div>
        </div>
      )}
      {isPopupOpen && (
        <Popup
          message={popupMessage}
          onClose={closePopup}
          isSuccess={isSuccess}
        />
      )}
    </div>
  );
};

export default Contact;
