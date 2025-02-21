import React from "react";
import Image from "next/image";
import { FaEye, FaTrash } from "react-icons/fa";

interface CardProps {
  id: string;
  name: string;
  image: string;
  category: string;
  description: string;
  joinedDate: string;
  role: string ;
  handleUpdate:(id: string) => void;
  ondelete: (id: string) => void;
}

const Card: React.FC<CardProps> = ({ id, name, image, role ,category, description, joinedDate, ondelete,handleUpdate }) => {
  return (
    <div className="bg-white w-full max-w-[400px] rounded-xl shadow-xl p-6 flex flex-col items-center justify-center mx-auto mt-6 border border-gray-300 transition-all duration-300 hover:shadow-2xl hover:scale-105">
      {/* Image Wrapper */}
      <div className="relative w-36 h-36 mb-4 overflow-hidden rounded-md border-4 border-blue-500 shadow-md">
        <Image
          alt={name}
            src={image}
            width={144}
          height={144}
          className="object-contain w-full h-full"
        />
      </div>

      {/* Name */}
      <h4 className="text-xl font-bold text-gray-800">{name}</h4>
      {category && <p className="text-blue-600 text-sm font-medium mt-1">{category}</p>}
      {role && <p className="text-blue-600 text-sm font-medium mt-1">{role}</p>}

      {/* Description */}
      {description && (
        <p className="text-gray-600 text-center text-sm mt-2 px-4">
          {description}
        </p>
      )}

      {/* Joined Date */}
      {joinedDate && (
        <p className="text-gray-400 text-xs mt-2">Joined: {joinedDate}</p>
      )}

      {/* Action Buttons */}
      <div className="flex space-x-4 mt-4">
        <button
        onClick={()=>handleUpdate(id)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded flex items-center space-x-2 transition">
          <FaEye className="w-5 h-5" />
          <span>Preview</span>
        </button>
        <button
          onClick={() => ondelete(id)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-5 rounded flex items-center space-x-2 transition"
        >
          <FaTrash className="w-5 h-5" />
          <span>Delete</span>
        </button>
      </div>
    </div>
  );
};

export { Card };
