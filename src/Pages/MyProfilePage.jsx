import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileDetails from "../Components/Profile/ProfileDetails";
import MyOrders from "../Components/Profile/MyOrders";
import Wishlist from "../Components/Profile/Wishlist";
import { getUser } from "../redux/userSlice";
import {
  FiUser,
  FiShoppingBag,
  FiHeart,
  FiCamera,
  FiMapPin,
} from "react-icons/fi";
import AddressBook from "../Components/Profile/AddressBook";

const MyProfilePage = () => {
  const { isLoading, error, userData } = useSelector((state) => state.user);
  const { currentUser } = useSelector((state) => state.auth);
  const [activeTab, setActiveTab] = useState("profile");
  const dispatch = useDispatch();

  useEffect(() => {
    // kiểm tra userData có dữ liệu chưa, nếu chưa thì lấy dữ liệu từ API
    if (!userData) {
      // Gọi API để lấy thông tin người dùng
      dispatch(getUser(currentUser.id)); // userId là id của người dùng hiện tại
    }
  }, [currentUser.id, dispatch, userData]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const tabs = [
    { id: "profile", label: "Hồ sơ", icon: FiUser },
    { id: "orders", label: "Đơn hàng", icon: FiShoppingBag },
    { id: "wishlist", label: "Yêu thích", icon: FiHeart },
    { id: "addresses", label: "Addresses", icon: FiMapPin },
  ];

  const handleUpdateAvatar = () => {
    // Implement avatar update logic
    console.log("Update avatar");
  };

  const handleUpdateCover = () => {
    // Implement cover photo update logic
    console.log("Update cover");
  };

  if (!userData) return null; // Nếu không có dữ liệu người dùng, không render gì cả

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Profile Banner */}
      <div className="relative">
        {/* Cover Photo */}
        <div className="h-48 md:h-64 bg-gradient-to-r from-blue-400 to-blue-600 relative"></div>

        {/* Profile Info Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative -mt-24 sm:-mt-32 pb-4 sm:pb-0">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
              {/* Avatar */}
              <div className="relative">
                <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full ring-4 ring-white bg-white overflow-hidden">
                  {userData?.avatar?.url ? (
                    <img
                      src={userData?.avatar?.url}
                      alt={userData?.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-green-100 flex items-center justify-center">
                      <span className="text-green-600 font-medium text-sm">
                        {userData?.name?.charAt(0).toUpperCase() || "U"}
                      </span>
                    </div>
                  )}
                  <button
                    onClick={handleUpdateAvatar}
                    className="absolute bottom-2 right-2 p-2 bg-black/30 rounded-full text-white hover:bg-black/40 transition"
                  >
                    <FiCamera className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* User Info */}
              <div className="text-center sm:text-left">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  {userData?.name}
                </h1>
                <p className="mt-1 text-gray-600">{userData?.email}</p>
                <div className="mt-4 flex flex-wrap gap-2 justify-center sm:justify-start">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                    Thành viên kể từ{" "}
                    {new Date(userData?.createdAt || Date.now()).getFullYear()}
                  </span>
                  {userData?.role && (
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                      {userData?.role}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="bg-white rounded-xl shadow-sm mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    flex-1 px-4 py-4 text-sm font-medium text-center
                    ${
                      activeTab === tab.id
                        ? "border-b-2 border-blue-500 text-blue-600"
                        : "text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }
                  `}
                >
                  <tab.icon className="w-5 h-5 mx-auto mb-1" />
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-sm">
          {activeTab === "profile" && <ProfileDetails user={userData} />}
          {activeTab === "orders" && <MyOrders />}
          {activeTab === "wishlist" && <Wishlist />}
          {activeTab === "addresses" && <AddressBook />}
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;
