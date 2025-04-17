import React from "react";
import { FiHeart, FiShoppingCart, FiTrash2 } from "react-icons/fi";

const Wishlist = () => {
  // Mock data - replace with actual API call
  const wishlistItems = [
    {
      id: "1",
      name: "Wireless Headphones",
      price: 99.99,
      image: "https://via.placeholder.com/150",
      inStock: true,
    },
    {
      id: "2",
      name: "Smart Watch",
      price: 199.99,
      image: "https://via.placeholder.com/150",
      inStock: true,
    },
    {
      id: "3",
      name: "Bluetooth Speaker",
      price: 79.99,
      image: "https://via.placeholder.com/150",
      inStock: false,
    },
  ];

  const handleRemoveFromWishlist = (itemId) => {
    // Implement remove from wishlist functionality
    console.log("Remove item:", itemId);
  };

  const handleAddToCart = (itemId) => {
    // Implement add to cart functionality
    console.log("Add to cart:", itemId);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">My Wishlist</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlistItems.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:border-blue-500 transition-colors"
          >
            <div className="relative aspect-square">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => handleRemoveFromWishlist(item.id)}
                className="absolute top-2 right-2 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
              >
                <FiTrash2 className="w-4 h-4 text-red-500" />
              </button>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-gray-900">{item.name}</h3>
              <p className="mt-1 text-lg font-semibold text-blue-600">
                ${item.price}
              </p>
              <div className="mt-4">
                <button
                  onClick={() => handleAddToCart(item.id)}
                  disabled={!item.inStock}
                  className={`w-full py-2 px-4 rounded-lg flex items-center justify-center space-x-2 
                    ${
                      item.inStock
                        ? "bg-blue-500 text-white hover:bg-blue-600"
                        : "bg-gray-100 text-gray-400 cursor-not-allowed"
                    }`}
                >
                  <FiShoppingCart className="w-4 h-4" />
                  <span>{item.inStock ? "Add to Cart" : "Out of Stock"}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {wishlistItems.length === 0 && (
        <div className="text-center py-12">
          <FiHeart className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Your Wishlist is Empty
          </h3>
          <p className="text-gray-500">Save items you love to your wishlist</p>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
