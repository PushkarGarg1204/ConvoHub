import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated.",
      });
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);

    if (!decode || !decode.userId) {
      return res.status(401).json({
        success: false,
        message: "Invalid token.",
      });
    }

    // Store logged-in user's ID in request
    req.id = decode.userId;

    next();
  } catch (error) {
    console.log("Authentication Error:", error);

    return res.status(401).json({
      success: false,
      message: "Invalid or expired token.",
    });
  }
};

export default isAuthenticated;
