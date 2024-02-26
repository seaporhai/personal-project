"use client"
import React, { useState } from "react";
import { Form } from "@/Components/atoms/form";

const Button: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className=" w-64 bg-pink-200">
        {/* Button to toggle form */}
        <button
          className="bg-purple-500 text-white py-4 w-full text-center"
          onClick={() => setShowForm(!showForm)}
        >
            <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-10 h-10 ml-[9px]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        </button>
      </div>

      {/* Form (conditionally rendered based on showForm state) */}
      {showForm && (
        <div className="flex-grow bg-white p-4">
          <Form />
        </div>
      )}
    </div>
  );
};

export { Button };
