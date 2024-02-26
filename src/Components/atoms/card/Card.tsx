import React from "react";
import Image from "next/image"; // Import Image from "next/image"

interface CardProps {
  id: string,
  name: string;
  image: string;
  ondelete: () => void;
}

const Card: React.FC<CardProps> = ({ id, name = "", image = "", ondelete }) => {
  const handleDelete = (id: string) => {
    ondelete(id);
     // Call the delete function passed from the parent component
  };

  return (
    <div className="bg-blue-500 w-[300px] rounded-lg shadow-md p-4 flex flex-col items-center justify-center mx-auto mt-2">
      {/* Add Tailwind CSS classes */}
      <div className="relative w-24 h-24 mb-4">
        {/* Set the width and height of the container */}
        <Image
          alt="me"
          src={image}
          layout="fill" // Make the image fill its container
          objectFit="cover" // Cover the container with the image
          className="rounded-full"
        />
      </div>
      <h4 className="text-xl font-bold mb-2">{name}</h4>
      <div className="flex">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
          Preview
        </button>
        <button onClick={ondelete} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Delete
        </button>
      </div>
    </div>
  );
};

export { Card };
