
import db from '../databse/db.js'
const sessionOwnerMiddleware = async (req, res, next) => {
  try {
    const sessionId = req.params.sessionId || req.body.sessionId;
    const userId = req.user.id;

    const [rows] = await db.query(
      "SELECT id FROM game_sessions WHERE id = ? AND user_id = ?",
      [sessionId, userId]
    );

    if (rows.length === 0) {
      return res.status(403).json({ message: "Access denied" });
    }

    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default sessionOwnerMiddleware;
