import React, { useState, useRef, useEffect } from "react";
import { Form } from "@/Components/atoms/form";
import Cardlist from "../card/Cardlist";

// Define the type for a card item
interface CardItem {
  id: string;
  name: string;
  image: string;
  description: string;
  category: string;
  joinedDate: string;
  role: string;
}

const Button: React.FC<{ position: "top-left" | "top-right"; children?: React.ReactNode }> = ({ position, children }) => {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  // Initialize cards state with data from localStorage or default data
  const [cards, setCards] = useState<CardItem[]>(() => {
    const savedCards = localStorage.getItem("cards");
    return savedCards ? JSON.parse(savedCards) : [
     
    ];
  });
  const handleUpdate = (id: string) => {
    const cardToUpdate = cards.find((card) => card.id === id);
    if (cardToUpdate) {
      setCards(prev => {
        // Update the card in the state
        return prev.map((card) => (card.id === id ? { ...cardToUpdate } : card));
      });
      setShowForm(true); // Show the form
    }
  };
  
  // Save cards to localStorage whenever cards state changes
  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  const handleDelete = (id: string) => {
    setCards(prev => prev.filter(card => card.id !== id));
  };

  useEffect(() => {
    console.log("Cards updated:", cards); // Debugging the updated cards
  }, [cards]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        setShowForm(false);
      }
    };

    if (showForm) {
      document.body.style.overflow = "hidden"; // Prevent scrolling when form is open
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.style.overflow = ""; // Allow scrolling again
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showForm]);

  return (
    <div className="flex relative">
      {/* Floating Button */}
      <div className={`absolute ${position === "top-right" ? "top-8 right-8" : "top-8 left-8"}`}>
        <button
          className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out"
          onClick={() => setShowForm(!showForm)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </button>
      </div>

      {/* Form (conditionally rendered based on showForm state) */}
      {showForm && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center z-50">
          <div ref={formRef} className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full transition-transform transform ease-in-out duration-300">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setShowForm(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Form setCard={setCards} />
          </div>
        </div>
      )}

      <div className="flex justify-center items-center w-full mt-40">
        <Cardlist card={cards} onDelete={handleDelete} handleUpdate={handleUpdate} />
      </div>
    </div>
  );
};

export { Button };
