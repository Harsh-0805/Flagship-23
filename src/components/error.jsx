import React from "react";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const history = useNavigate();

  const goBack = () => {
    history(-1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="rounded-lg bg-white p-8 text-center shadow-xl">
        <h1 className="mb-4 text-4xl font-bold">Recheck</h1>
        <p className="text-gray-600">
          Please Write Valid E-mail ID or Phone number.
        </p>
        <button
          onClick={goBack}
          className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
        >
          Go back to form
        </button>
      </div>
    </div>
  );
}

export default ErrorPage;
