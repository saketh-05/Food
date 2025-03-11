const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config({ path: "../.env" });

const User = require("./models/userSchema");
const Recipe = require("./models/recipeSchema");

const app = express();
const port = process.env.PORT || 8080;

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

// Remove a recipe from bookmarks
app.delete("/api/bookmark", async (req, res) => {
    const { userId, recipeId } = req.body;

    try {
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: "User not found" });

        user.bookmarks = user.bookmarks.filter(
            (bookmark) => bookmark.recipeId.toString() !== recipeId
        );

        await user.save();

        res.status(200).json({ message: "Recipe removed from bookmarks", bookmarks: user.bookmarks });
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
