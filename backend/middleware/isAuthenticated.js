import jwt from "jsonwebtoken";

const isAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    console.log("========== AUTH DEBUG ==========");
    console.log("Token exists:", !!token);

    if (!token) {
      console.log("NO TOKEN");
      console.log("================================");
      return res.status(401).json({ message: "User not authenticated." });
    }

    const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);

    console.log("Decoded JWT:", decode);
    console.log("User ID from JWT:", decode?.userId);

    if (!decode) {
      console.log("INVALID TOKEN");
      console.log("================================");
      return res.status(401).json({ message: "Invalid token" });
    }

    req.id = decode.userId;

    console.log("req.id:", req.id);
    console.log("================================");

    next();
  } catch (error) {
    console.log("AUTH ERROR:", error);

    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
};

export default isAuthenticated;
