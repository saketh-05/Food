import { HelmetProvider, Helmet } from "react-helmet-async";
import parse from "html-react-parser";
import { useState } from "react";
import "./RecipeFormat.css";

export default function Recipe({ recipe, userId }) {
  const [bookmarked, setBookmarked] = useState(false);

  const handleBookmark = async () => {
    try {
      const response = await fetch("/api/bookmark", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          recipeId: recipe._id,
          recipeName: recipe.title,
        }),
      }).then((res) => res.json());

      if (response.ok) {
        setBookmarked(true);
      }
    } catch (error) {
      console.error("Error bookmarking recipe:", error);
    }
  };

  return (
    <HelmetProvider>
      <div className="recipe-page">
        <Helmet>
          <title>{recipe.title} FT</title>
        </Helmet>
        <div className="recipe-container">
          <div className="recipe-header">
            <img src={recipe.image} alt={recipe.title} className="recipe-image" />
            <button className="bookmark-btn" onClick={handleBookmark}>
              {bookmarked ? "Bookmarked" : "Bookmark"}
            </button>
          </div>
          <div className="recipe-content">
            {parse(recipe.description)}
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}
