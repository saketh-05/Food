import { React, useEffect, useState } from "react";
import { Twitter, Instagram, Mail } from "lucide-react";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import FoodGrid from "../components/Foodgrid/Foodgrid";
import { HelmetProvider, Helmet } from "react-helmet-async";
import "../components/Header/Header.css";
import "../components/Foodgrid/Foodgrid.css";
import { motion } from "framer-motion";

export default function Home({ onLogout }) {
  const [searchResults, setSearchResults] = useState([]);
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: 20 },
  };

  const pageTransition = {
    duration: 1,
  };
  
  const handleSearchInput = (value) => {
    console.log(value);
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?query=${value}&number=75`;
    fetch(apiUrl, {
      method: "GET",
      headers: {
        "x-api-key": import.meta.env.VITE_SPOONACULAR_API,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setSearchResults(data.results || []);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
        <div className='app'>
          <Helmet>
            <title>FoodTube Home</title>
          </Helmet>
          <Header onLogout={onLogout} handleSearchInput={handleSearchInput} />
          <div className='app__content'>
            <Navbar />
            <main className='app__main'>
              <FoodGrid searchResults={searchResults} />
            </main>
            {/* footer begins :{) */}
            <footer className='app__footer'>
              <div className='app__socials'>
                <a href='#' className='app__social-link'>
                  <Twitter className='app__icon' />
                </a>
                <a href='#' className='app__social-link'>
                  <Instagram className='app__icon' />
                </a>
                <a href='#' className='app__social-link'>
                  <Mail className='app__icon' />
                </a>
              </div>
            </footer>
          </div>
        </div>
      </motion.div>
    </HelmetProvider>
  );
}
