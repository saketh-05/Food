const authenticateUser = (req, res, next) => {
    // Dummy authentication for now (Replace with real authentication logic)
    const userId = req.headers["user-id"];
    
    if (!userId) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    req.user = { id: userId };  // Attach user to request
    next();
};

export default authenticateUser;
