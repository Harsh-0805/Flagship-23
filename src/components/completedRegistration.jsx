import React from "react";
// import {image} from "../../public/fs.jpg"

function CompletedRegistration() {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-blue-800 ">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden px-6 pt-16  sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
          <img src={qrCodeData} alt="QR Code" />
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Registration successful.
              <br />
              <br/>
              Click below to know more about E-Cell Vnit
            </h2>
            
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              
              <a href="https://www.ecellvnit.org/" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          {/* <div className="relative mt-16 h-80 lg:mt-8">
            <img
              className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src="https://drive.google.com/file/d/1N85rcpFjV55v--Fwxz03wC6KoFeSxDn7/view?usp=sharing"
              alt="App screenshot"
              // width={1824}
              // height={1080}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default CompletedRegistration;
