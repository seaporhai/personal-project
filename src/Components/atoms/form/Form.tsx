import React, { useState } from "react";
import { PopupModal } from "./popup"; // Import PopupModal

interface FormProps {
  setCard: React.Dispatch<
    React.SetStateAction<
      { id: string; name: string; image: string; description: string; category: string; joinedDate: string; role: string }[]
    >
  >;
}

const Form: React.FC<FormProps> = ({ setCard }) => {
  // Initialize the form data with today's date for the joinedDate
  const getTodayDate = (): string => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, "0");
    const month = String(today.getMonth() + 1).padStart(2, "0"); // Month is 0-based
    const year = today.getFullYear();
    return `${year}-${month}-${day}`; // Format as yyyy-mm-dd
  };

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    description: "",
    category: "",
    joinedDate: getTodayDate(), // Set default to today's date
    role: "", // Added role here
  });

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({ ...prevData, image: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Updated validation to include role
    if (!formData.name || !formData.image || !formData.description || !formData.category || !formData.joinedDate || !formData.role) {
      setModalMessage("All fields are required.");
      setShowModal(true);
      return;
    }
    const newCard = { id: crypto.randomUUID(), ...formData };
    setCard((prev) => {
      const updatedCards = [...prev, newCard];
      console.log("Updated Cards:", updatedCards); // Debugging
      return updatedCards;
    });

    // Reset form data after submission
    setFormData({ name: "", image: "", description: "", category: "", joinedDate: getTodayDate(), role: "" });
  }

  const closeModal = () => setShowModal(false);

  return (
    <div className="max-w-lg mx-auto mt-10 px-6">
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-bold text-center mb-5 text-gray-800">Add New Card</h2>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name:
          </label>
          <input
            className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="name"
            type="text"
            placeholder="Enter name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        {/* Image Upload */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
            Image:
          </label>
          <input
            className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none"
            id="image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description:
          </label>
          <textarea
            className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="description"
            placeholder="Enter description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={3}
          ></textarea>
        </div>

        {/* Category Dropdown */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
            Category:
          </label>
          <select
            className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="">Select Category</option>
            <option value="Technology">Technology</option>
            <option value="Business">Business</option>
            <option value="Education">Education</option>
            <option value="Health">Health</option>
          </select>
        </div>

        {/* Date Picker */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
            Date:
          </label>
          <input
            className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="joinDate"
            type="date"
            name="joinedDate"
            value={formData.joinedDate}
            onChange={handleChange}
          />
        </div>

        {/* Role Input */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="role">
            Role:
          </label>
          <input
            className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="role"
            type="text"
            placeholder="Enter role"
            name="role"
            value={formData.role}
            onChange={handleChange}
          />
        </div>

        {/* Submit Button */}
        <div className="w-full flex justify-center">
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded w-full transition"
            type="submit"
          >
            Add Card
          </button>
        </div>
      </form>

      {/* Popup Modal */}
      {showModal && <PopupModal message={modalMessage} onClose={closeModal} />}
    </div>
  );
};

export default Form;
