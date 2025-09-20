import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 overflow-hidden relative">
      {/* Animated background circles */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0.2, 0.6] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          className="absolute w-72 h-72 bg-indigo-300 rounded-full top-10 left-10 mix-blend-multiply filter blur-2xl opacity-70"
        />
        <motion.div
          animate={{ scale: [1, 1.7, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
          className="absolute w-96 h-96 bg-pink-300 rounded-full top-40 right-20 mix-blend-multiply filter blur-3xl opacity-50"
        />
      </div>

      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center px-6"
      >
        <h1 className="mb-4 text-6xl font-extrabold text-gray-800">404</h1>
        <p className="mb-6 text-2xl text-gray-700">
          Oops! The page you are looking for doesn’t exist.
        </p>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="/"
          className="inline-block rounded-lg bg-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-lg hover:bg-indigo-500 transition-colors"
        >
          Return Home
        </motion.a>
      </motion.div>

      {/* Optional: small SVG illustration */}
      <motion.svg
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 0.2, y: 0 }}
        transition={{ duration: 1.5 }}
        className="absolute bottom-10 w-64 h-64 text-indigo-300"
        viewBox="0 0 512 512"
      >
        <circle cx="256" cy="256" r="256" fill="currentColor" />
      </motion.svg>
    </div>
  );
};

export default NotFound;
