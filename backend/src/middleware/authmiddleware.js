// // import jwt from "jsonwebtoken";

// // const authMiddleware = (req, res, next) => {
// //   try {
// //     const authHeader = req.headers.authorization;

// //     if (!authHeader) {
// //       return res.status(401).json({ message: "Authorization header missing" });
// //     }

// //     const parts = authHeader.split(" ");

// //     if (parts.length !== 2 || parts[0] !== "Bearer") {
// //       return res.status(401).json({ message: "Invalid auth format" });
// //     }

// //     const token = parts[1];

// //     if (!process.env.JWT_SECRET) {
// //       console.error("JWT_SECRET is undefined");
// //       return res.status(500).json({ message: "Server misconfiguration" });
// //     }

// //     const decoded = jwt.verify(token, process.env.JWT_SECRET);

// //     req.user = decoded;
// //     next();
// //   } catch (error) {
// //     console.error("Auth middleware error:", error.message);
// //     return res.status(401).json({ message: "Invalid or expired token" });
// //   }
// // };

// // export default authMiddleware;

// import db from "../databse/db.js";

// export default async function testMiddleware(req, res, next) {
//   console.log("DB VALUE:", db);
//   return res.json({ ok: true });
// }
