import { animate } from "framer-motion";
import { motion } from "framer-motion";
import { FiSearch } from "react-icons/fi";

export default function SearchProduct() {
  return (
    <section>
      {/* Background Pattern */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute transform rotate-45 -left-1/4 -top-1/4 w-1/2 h-1/2 bg-white rounded-full"></div>
          <div className="absolute transform -rotate-45 -right-1/4 -bottom-1/4 w-1/2 h-1/2 bg-white rounded-full"></div>
        </div>
        <div className="relative py-8 px-4 md:p-12">
          {/* Content */}
          <div className="text-white">
            <motion.h2
              className="text-xl md:text-2xl font-bold mb-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1 }}
            >
              Tìm kiếm sản phẩm
            </motion.h2>

            {/* Enhanced Search Bar */}
            <div className="flex justify-center">
              <div className="relative md:w-96 w-full md:pl-14 md:pr-6 py-4 pl-4 rounded-full border-2 bg-white/10 border-white/20  backdrop-blur-lg">
                <input
                  type="text"
                  placeholder="Nhập từ khoá..."
                  className="bg-transparent text-white placeholder-white/70 focus:outline-none outline-none text-lg"
                />
                <button className="absolute right-4 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-white text-purple-600 rounded-full font-medium hover:bg-gray-100 transition-colors">
                  Tìm kiếm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
