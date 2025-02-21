import React from "react";

interface PopupModalProps {
  message: string;
  onClose: () => void;
}

const PopupModal: React.FC<PopupModalProps> = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      {/* Glassmorphism Warning Modal */}
      <div className="w-[400px] bg-white bg-opacity-10 backdrop-blur-lg border border-yellow-400 border-opacity-40 rounded-lg p-8 relative shadow-2xl transform transition-all duration-500 ease-in-out scale-95 hover:scale-100">
        {/* Header with Warning Icon */}
        <div className="flex items-center mb-6 space-x-4">
          <div className="w-14 h-14 rounded-full bg-yellow-500 flex items-center justify-center shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-white"
            >
              <path
                fill="currentColor"
                d="M12 2L1 21h22L12 2zm0 3.3l7.53 14.7H4.47L12 5.3zM11 10h2v5h-2v-5zm0 7h2v2h-2v-2z"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-extrabold text-yellow-300">Warning</h2>
        </div>

        {/* Horizontal Divider */}
        <hr className="border-t-2 border-red-400 opacity-40 mb-4" />

        {/* Warning Message */}
        <p className="text-red-500 text-lg mb-6">{message}</p>

        {/* Footer with 'OK' Button */}
        <div className="flex justify-center mt-4">
          <button
            onClick={onClose}
            className="bg-red-500 text-black px-10 py-3 rounded-full shadow-lg hover:bg-yellow-600 transform transition-all duration-300 ease-in-out hover:scale-105"
          >
            Close
          </button>
        </div>
      </div>
    </div>  
  );
};

export { PopupModal };
