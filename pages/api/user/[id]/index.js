import { sql_query } from "../../../../lib/db";

const handler = async (req, res) => {
  try {
    const results = await sql_query(`select * from users where id = ?`, [
      req.query.id,
    ]);

    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default handler;
