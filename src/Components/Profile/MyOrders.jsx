import React from "react";
import { FiPackage, FiClock, FiCheck, FiTruck } from "react-icons/fi";

const MyOrders = () => {
  // Mock data - replace with actual API call
  const orders = [
    {
      id: "1234",
      date: "2024-01-15",
      status: "Delivered",
      total: 129.99,
      items: 3,
    },
    {
      id: "1235",
      date: "2024-01-10",
      status: "In Transit",
      total: 89.99,
      items: 2,
    },
    {
      id: "1236",
      date: "2024-01-05",
      status: "Processing",
      total: 199.99,
      items: 4,
    },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case "Delivered":
        return <FiCheck className="w-5 h-5 text-green-500" />;
      case "In Transit":
        return <FiTruck className="w-5 h-5 text-blue-500" />;
      case "Processing":
        return <FiClock className="w-5 h-5 text-orange-500" />;
      default:
        return <FiPackage className="w-5 h-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-green-50 text-green-700";
      case "In Transit":
        return "bg-blue-50 text-blue-700";
      case "Processing":
        return "bg-orange-50 text-orange-700";
      default:
        return "bg-gray-50 text-gray-700";
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">My Orders</h2>

      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-white border border-gray-100 rounded-xl p-4 hover:border-blue-500 transition-colors"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gray-50 rounded-lg">
                  {getStatusIcon(order.status)}
                </div>
                <div>
                  <h3 className="font-medium">Order #{order.id}</h3>
                  <p className="text-sm text-gray-500">
                    {new Date(order.date).toLocaleDateString()} • {order.items}{" "}
                    items
                  </p>
                </div>
              </div>
              <div className="mt-4 sm:mt-0 flex items-center space-x-4">
                <span className="text-lg font-medium">${order.total}</span>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                    order.status
                  )}`}
                >
                  {order.status}
                </span>
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {orders.length === 0 && (
        <div className="text-center py-12">
          <FiPackage className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No Orders Yet
          </h3>
          <p className="text-gray-500">
            Start shopping to see your orders here
          </p>
        </div>
      )}
    </div>
  );
};

export default MyOrders;
