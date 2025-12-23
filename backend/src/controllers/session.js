export const createSession = async (req, res) => {
  try {
    const { sessionType } = req.body;
    const userId = req.user.id; // ✅ FROM JWT

    if (!sessionType) {
      return res.status(400).json({ message: "Missing session type" });
    }

    if (!["friends", "couple"].includes(sessionType)) {
      return res.status(400).json({ message: "Invalid session type" });
    }

    const [result] = await db.query(
      `INSERT INTO game_sessions (session_type, user_id)
       VALUES (?, ?)`,
      [sessionType, userId]
    );

    res.status(201).json({
      message: "Game session created",
      sessionId: result.insertId,
      sessionType,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
