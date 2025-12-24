// // import db from "../databse/db.js";

// // const sessionOwnerMiddleware = async (req, res, next) => {
// //   try {
// //     if (!req.user) {
// //       return res.status(401).json({ message: "Unauthorized" });
// //     }

// //     const sessionId = req.body.sessionId;

// //     if (!sessionId) {
// //       return res.status(400).json({ message: "Session ID missing" });
// //     }

// //     const userId = req.user.id;

// //     const [rows] = await db.query(
// //       "SELECT id FROM game_sessions WHERE id = ? AND user_id = ?",
// //       [sessionId, userId]
// //     );

// //     if (rows.length === 0) {
// //       return res.status(403).json({ message: "Access denied" });
// //     }

// //     next();
// //   } catch (error) {
// //     console.error("SessionOwnerMiddleware error:", error);
// //     res.status(500).json({ error: error.message });
// //   }
// // };

// // export default sessionOwnerMiddleware;
// import db from "../databse/db.js";

// export default async function testMiddleware(req, res, next) {
//   console.log("DB VALUE:", db);
//   return res.json({ ok: true });
// }
