import express from "express";

const router = express.Router();

// Sample route
router.get("/api/user", (req, res) => {
    res.send("User API is working!");
});

export default router;
