import db from "../databse/db.js";

export const createSession = async (req, res) => {
  try {
    const { sessionType, email } = req.body;

    if (!sessionType || !email) {
      return res.status(400).json({ message: "Session type and email required" });
    }

    if (!["friends", "couple"].includes(sessionType)) {
      return res.status(400).json({ message: "Invalid session type" });
    }

    const [result] = await db.query(
      "INSERT INTO game_sessions (session_type, user_email) VALUES (?, ?)",
      [sessionType, email]
    );

    res.status(201).json({
      message: "Session created",
      sessionId: result.insertId,
      sessionType,
      email,
    });
  } catch (error) {
    console.error("CREATE SESSION ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
};
