import { useEffect, useState } from "react";
import RecipeFormat from "../components/Foodgrid/RecipeFormat";
import { motion } from 'framer-motion';
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";

export default function Recipe() {
  const [recipe, setRecipe] = useState({});
  const { id } = useParams();
  const apiUrl = `https://api.spoonacular.com/recipes/${id}/information?addWinePairing=false&addTasteData=false&includeNutrition=true`;

  useEffect(() => {
    const getRecipeData = async () => {
      try {
        const response = await fetch(apiUrl, {
          method: "GET",
          headers: {
            "x-api-key": import.meta.env.VITE_SPOONACULAR_API,
          },
        });
        const data = await response.json();
        console.log(data);
        setRecipe(data);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    getRecipeData();
  }, [id]);

  if(!recipe.title){
    return <div >Loading...</div>;
  }
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: 20 },
  };
  
  const pageTransition = {
    duration: 1,
  };
  
  return (
    <>
    <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
  >
    <Header />
      <RecipeFormat
        recipe={recipe}
      />
      </motion.div>
    </>
  );
}
