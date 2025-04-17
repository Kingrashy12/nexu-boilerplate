import { neon } from "@neondatabase/serverless";

export const sql = neon(String(process.env.DATABASE_URL));

export const query = async (queryText, values) => {
  try {
    const result = values
      ? await sql.query(queryText, values)
      : await sql.query(queryText);
    return result;
  } catch (error) {
    throw new Error(`${error.message}`);
  }
};
