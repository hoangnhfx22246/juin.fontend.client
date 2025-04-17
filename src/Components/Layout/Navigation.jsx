import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FiSearch,
  FiShoppingCart,
  FiUser,
  FiMenu,
  FiX,
  FiChevronDown,
} from "react-icons/fi";
import NavigationUser from "../Auth/NavigationUser";
import { useDispatch, useSelector } from "react-redux";
import { showNotification } from "../../util/notification";
import { getCategories } from "../../redux/categorySlice";
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { categories } = useSelector((state) => state.category); // get categories from redux store
  const [isFetched, setIsFetched] = useState(false);
  const dispatch = useDispatch();

  const navRef = useRef(null);
  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
      setActiveDropdown(null);
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);
  // fetching categories from redux store
  useEffect(() => {
    if (!isFetched) {
      dispatch(getCategories());
      setIsFetched(true);
    }
  }, [categories, dispatch, isFetched]);

  const navigationItems = [
    {
      name: "Trang chủ",
      path: "/",
    },
    {
      name: "Giới thiệu",
      path: "/about",
    },
    {
      name: "Sản phẩm",
      path: "/products",
      children: [
        {
          name: "Air Conditioners",
          path: "/category/climate/air-conditioners",
        },
        { name: "Heaters", path: "/category/climate/heaters" },
        { name: "Air Purifiers", path: "/category/climate/air-purifiers" },
        { name: "Fans", path: "/category/climate/fans" },
      ],
    },
    {
      name: "Dịch vụ",
      path: "/category/entertainment",
    },
    {
      name: "Liên hệ",
      path: "/category/small-appliances",
    },
  ];
  // Add this function to handle auth button clicks

  const SearchDropdown = () => (
    <div className="absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-lg p-4 border-t">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Popular Searches
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/search/refrigerator"
                    className="text-gray-600 hover:text-green-600"
                  >
                    Refrigerators
                  </Link>
                </li>
                <li>
                  <Link
                    to="/search/tv"
                    className="text-gray-600 hover:text-green-600"
                  >
                    Smart TVs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/search/washer"
                    className="text-gray-600 hover:text-green-600"
                  >
                    Washing Machines
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Trending</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/search/air-fryer"
                    className="text-gray-600 hover:text-green-600"
                  >
                    Air Fryers
                  </Link>
                </li>
                <li>
                  <Link
                    to="/search/robot-vacuum"
                    className="text-gray-600 hover:text-green-600"
                  >
                    Robot Vacuums
                  </Link>
                </li>
                <li>
                  <Link
                    to="/search/coffee-maker"
                    className="text-gray-600 hover:text-green-600"
                  >
                    Coffee Makers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Categories</h3>
              <ul className="space-y-2">
                {navigationItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="text-gray-600 hover:text-green-600"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <nav
        className="bg-white shadow-md relative z-50 sticky top-0 z-50"
        ref={navRef}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center">
              <span className="text-4xl font-bold bg-gradient-green text-transparent bg-clip-text">
                Juin
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.path}
                    className="flex items-center space-x-1 text-gray-600 hover:text-green-600"
                  >
                    <span>{item.name}</span>
                    {item.children?.length && (
                      <FiChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name
                            ? "transform rotate-180"
                            : ""
                        }`}
                      />
                    )}
                  </Link>

                  {item.children?.length > 0 &&
                    activeDropdown === item.name && (
                      <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-lg py-2 z-10">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                </div>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                className="p-2 text-gray-600 hover:text-green-600"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <FiSearch className="w-6 h-6" />
              </button>

              {/* user menu */}
              <NavigationUser />

              <button className="p-2 text-gray-600 hover:text-green-600 relative">
                <FiShoppingCart className="w-6 h-6" />
                <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
                  2
                </span>
              </button>
              <button
                className="md:hidden p-2 text-gray-600 hover:text-green-600"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <FiX className="w-6 h-6" />
                ) : (
                  <FiMenu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {isSearchOpen && <SearchDropdown />}

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg">
            <div className="px-4 py-2">
              {navigationItems.map((item) => (
                <div key={item.name} className="py-2">
                  <button
                    className="flex items-center justify-between w-full text-gray-600"
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === item.name ? null : item.name
                      )
                    }
                  >
                    <span>{item.name}</span>
                    <FiChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name
                          ? "transform rotate-180"
                          : ""
                      }`}
                    />
                  </button>
                  {activeDropdown === item.name && (
                    <div className="mt-2 pl-4 space-y-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.path}
                          className="block py-2 text-sm text-gray-600 hover:text-green-600"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
