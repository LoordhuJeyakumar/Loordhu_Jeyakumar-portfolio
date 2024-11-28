import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-light-background dark:bg-dark-background">
      {/* Animated 404 Heading */}
      <motion.h1
        className="text-9xl font-bold text-light-primaryText dark:text-dark-primaryText"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        404
      </motion.h1>

      {/* Subtitle */}
      <motion.h2
        className="text-2xl text-light-secondaryText dark:text-dark-secondaryText mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Page Not Found
      </motion.h2>

      {/* Animated Description */}
      <motion.p
        className="text-lg text-center mt-2 max-w-md text-light-secondaryText dark:text-dark-secondaryText"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        The page you’re looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </motion.p>

      {/* Back to Home Button */}
      <motion.div
        className="mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <Link
          to="/"
          className="px-6 py-3 bg-light-accent dark:bg-dark-accent text-light-background dark:text-dark-background rounded-lg shadow hover:scale-105 transition-transform"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}

export default NotFoundPage;
