import mysql from "serverless-mysql";

export const db = mysql({
  config: {
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
  },
});

export async function sql_query(query_string, values = []) {
  try {
    const results = await db.query(query_string, values);
    await db.end();
    return results;
  } catch (e) {
    throw Error(e.message);
  }
}
