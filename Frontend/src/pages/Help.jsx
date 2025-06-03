// MultipleFiles/pages/Help.jsx
import React from "react";
import { motion } from "framer-motion";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar/Navbar";
import "./Help.css"; // Optional: Import CSS for styling

const HelpPage = () => {
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
          <title>FoodTube Help</title>
        </Helmet>
        <Navbar/>
        <div className='help-page'>
          <h1>Help & Support</h1>
          <p>
            If you have any questions or need assistance, please refer to the
            following sections:
          </p>

          <h2>Frequently Asked Questions (FAQs):-</h2><br/>
          <ul>
            <li>
              <strong>How do I create an account?</strong> <br/> You can create an
              account by clicking on the "Sign Up" button on the homepage.
            </li>
            <li>
              <strong>How do I reset my password?</strong> <br/> Click on "Forgot your
              password?" on the login page to reset your password.
            </li>
            <li>
              <strong>How can I contact support?</strong> <br/> You can contact
              support via the contact form on the "About" page.
            </li>
          </ul>
          <br/>
          <h2>Contact Us</h2>
          <p>
            If you need further assistance, please reach out to us at
            support@example.com.
          </p>
        </div>
      </motion.div>
    </HelmetProvider>
  );
};

export default HelpPage;
