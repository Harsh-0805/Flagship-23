import React, { useState, useEffect } from "react";
import axios from "axios";

function QRCodeGenerator() {
  const [number, setNumber] = useState(0);
  const [qrCodeData, setQRCodeData] = useState("");

  // const generateQRCode = () => {
  //   const url = `http://localhost:3000/register/${number}`;
  //   setQRCodeData(url);
  //   setNumber(number + 1); // Increment 'number' by 1
  // };

  useEffect(() => {
    // Fetch the initial 'n' value from the backend when the component mounts
    axios
      .get("https://backend-qr-flagship.onrender.com/api/n") // Update the URL for your backend
      .then((response) => {
        setNumber(response.data.n);
      })
      .catch((error) => {
        console.error("Error fetching initial n:", error);
      });
  }, []);

  const generateQRCode = () => {
    // Increment the 'n' value locally
    const updatedN = number + 1;
    setNumber(updatedN);

    // Update the 'n' value on the backend using a POST request
    axios
      .post("https://backend-qr-flagship.onrender.com/api/n", { n: updatedN }) // Update the URL for your backend
      .then(() => {
        // Successfully updated 'n' on the backend
        console.log(qrCodeData);
      })
      .catch((error) => {
        console.error("Error updating n:", error);
      });
    const url = `https://flagship.ecellvnit.org/registration/fg-reg-1x33d/${number}`;
    setQRCodeData(url);
  };

  return (
    <div className="bg-white">
      {/* <h2>flagship Registration</h2> */}
      {/* <p>Current value of 'n': {number}</p> */}
      {/* <button
      className='text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
      onClick={generateQRCode}>Generate QR Code</button>
      {qrCodeData && (
        <div>
          <p>QR Code for {qrCodeData}</p>
          <img src={`https://api.qrserver.com/v1/create-qr-code/?data=${qrCodeData}&size=200x200`} alt="QR Code" />
        </div>
      )} */}

      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Register For Flagship 2023
          </h1>
          <p className="text-1xl tracking-tight text-gray-900 mt-10 sm:text-2xl">
            <h1 className="text-2xl">{qrCodeData}</h1>
          </p>
          <img
            className="justify-center align-center mt-4 m-auto"
            src={`https://api.qrserver.com/v1/create-qr-code/?data=${qrCodeData}&size=200x200`}
            alt="QR Code"
          />
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              onClick={generateQRCode}
            >
              Generate QR Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QRCodeGenerator;
