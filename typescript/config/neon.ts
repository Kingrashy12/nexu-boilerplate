import { neon } from "@neondatabase/serverless";

export const sql = neon(String(process.env.DATABASE_URL));

export const query = async <T = Record<string, any>>(
  queryText: string,
  values?: any[]
) => {
  try {
    const result = values ? await sql(queryText, values) : await sql(queryText);
    return result;
  } catch (error) {
    throw new Error(`${(error as Error).message}`);
  }
};
