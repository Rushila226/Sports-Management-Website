// Import necessary modules
import jwt from 'jsonwebtoken';

export const authenticateUser = (req, res, next) => {
    // Extract the token from the request headers, cookies, or wherever it is stored
    const token = req.headers.authorization || req.cookies.token;

    // Check if token is present
    if (!token) {
        return res.status(401).json({ message: "Authentication failed: Token missing" });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Attach the decoded user information to the request object
        req.user = decoded;

        // Proceed to the next middleware or route handler
        next();
    } catch (error) {
        // If token verification fails, send an error response
        return res.status(401).json({ message: "Authentication failed: Invalid token" });
    }
};

// export default authenticateUser;
