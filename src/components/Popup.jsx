import React from 'react';

function Popup({ message, isSuccess, onClose }) {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 ${isSuccess ? 'bg-green-500' : 'bg-red-500'} bg-opacity-75`}
    >
      <div className="bg-white rounded-lg p-8">
        <h2 className="text-xl font-semibold">{isSuccess ? 'Registration Complete' : 'Registration Failed'}</h2>
        <p>{message}</p>
        <button onClick={onClose} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Close
        </button>
      </div>
    </div>
  );
}

export default Popup;
