import { sql_query } from "../../lib/db";

const handler = async (req, res) => {
  try {
    const results = await sql_query(`select * from recipes`);

    return res.json(results);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default handler;
