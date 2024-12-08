import AboutPage from "../components/About/AboutUs";
import Navbar from "../components/Navbar/Navbar";
import { motion } from "framer-motion";
import { HelmetProvider, Helmet } from "react-helmet-async";

export default function About() {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: 20 },
  };

  const pageTransition = {
    duration: 1,
  };
  return (
    <HelmetProvider>
      <motion.div
        initial='initial'
        animate='in'
        exit='out'
        variants={pageVariants}
        transition={pageTransition}
      >
        <Helmet>
          <title>FoodTube About</title>
        </Helmet>
        <Navbar />
        <AboutPage />
      </motion.div>
    </HelmetProvider>
  );
}
