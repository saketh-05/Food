import express from "express";
import User from "../models/userSchema.js";  // ✅ Correct file name
import authMiddleware from "../middleware/authMiddleware.js"; // Ensure user is logged in

const router = express.Router();

// Add a recipe to bookmarks
router.post("/", authMiddleware, async (req, res) => {
  const { recipeId, name } = req.body;
  const userId = req.user.id; // Get user ID from token

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Check if already bookmarked
    const exists = user.bookmarks.some((b) => b.recipeId === recipeId);
    if (exists) return res.status(400).json({ message: "Already bookmarked" });

    user.bookmarks.push({ recipeId, name });
    await user.save();

    res.json({ message: "Recipe bookmarked", bookmarks: user.bookmarks });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// Get all bookmarks
router.get("/", authMiddleware, async (req, res) => {
  const userId = req.user.id;

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user.bookmarks);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// Remove a bookmark
router.delete("/:recipeId", authMiddleware, async (req, res) => {
  const { recipeId } = req.params;
  const userId = req.user.id;

  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    user.bookmarks = user.bookmarks.filter((b) => b.recipeId !== recipeId);
    await user.save();

    res.json({ message: "Bookmark removed", bookmarks: user.bookmarks });
  } catch (error) {
    console.error("Error Details:", error);  // Logs full error details
    res.status(500).json({ 
        message: "Internal server error", 
        error: error.message || error 
    });
}

});

export default router;
