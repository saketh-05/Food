import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 8080;
const MONGODB_URI = process.env.MONGODB_URI;

// Middleware
app.use(cors());
app.use(express.json());
app.use(cors());

// Add a recipe to bookmarks
app.post("/api/bookmark", async (req, res) => {
    const { userId, recipeId, recipeName } = req.body;

    try {
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: "User not found" });

        // Check if the recipe is already bookmarked
        const alreadyBookmarked = user.bookmarks.some(
            (bookmark) => bookmark.recipeId.toString() === recipeId
        );

        if (alreadyBookmarked) {
            return res.status(400).json({ message: "Recipe already bookmarked" });
        }

        user.bookmarks.push({ recipeId, name: recipeName });
        await user.save();

        res.status(200).json({ message: "Recipe bookmarked successfully", bookmarks: user.bookmarks });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
});

// Test Route
app.get("/", (req, res) => {
    res.send("🍔 Welcome to FoodTube API!");
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
