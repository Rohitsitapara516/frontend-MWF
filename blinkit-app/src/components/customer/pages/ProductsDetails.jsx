import React from "react";

export default function ProductDetails() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 to-green-300 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-green-800 mb-4">
        🌿 Welcome to Fresh Vegetables
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        100% Organic & Farm Fresh Vegetables Delivered to Your Doorstep!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Product Card */}
        <div className="bg-white shadow-xl rounded-2xl p-6 text-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/89/Tomato_je.jpg"
            alt="Tomato"
            className="w-48 h-48 object-cover mx-auto rounded-xl"
          />
          <h2 className="text-2xl font-semibold mt-4">Tomato</h2>
          <p className="text-gray-600">Fresh Organic Tomatoes</p>
          <p className="text-green-600 text-xl mt-2">₹30 / kg</p>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg mt-4">
            Add to Cart 🛒
          </button>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-6 text-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/47/Green_peas.jpg"
            alt="Peas"
            className="w-48 h-48 object-cover mx-auto rounded-xl"
          />
          <h2 className="text-2xl font-semibold mt-4">Green Peas</h2>
          <p className="text-gray-600">Fresh & Sweet Peas</p>
          <p className="text-green-600 text-xl mt-2">₹40 / kg</p>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg mt-4">
            Add to Cart 🛒
          </button>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-6 text-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6f/Carrots.jpg"
            alt="Carrot"
            className="w-48 h-48 object-cover mx-auto rounded-xl"
          />
          <h2 className="text-2xl font-semibold mt-4">Carrot</h2>
          <p className="text-gray-600">Crunchy & Sweet Carrots</p>
          <p className="text-green-600 text-xl mt-2">₹25 / kg</p>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg mt-4">
            Add to Cart 🛒
          </button>
        </div>
      </div>
    </div>
  );
}