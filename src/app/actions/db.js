"use server";

import { Client } from "pg";

const useDB = () => ({
  async executeQuery(text, params) {
    const client = new Client(process.env.DATABASE_URL);
    await client.connect();
    try {
      const result = await client.query(text, params);
      return result.rows;
    } catch (err) {
      console.error("Error executing query:", err);
      throw err;
    } finally {
      await client.end();
    }
  },

  async createTable(tableName, columns) {
    const columnDefinitions = columns
      .map((col) => `${col.name} ${col.type}`)
      .join(", ");
    const query = `CREATE TABLE IF NOT EXISTS ${tableName} (${columnDefinitions})`;
    return await this.executeQuery(query);
  },

  async deleteTable(tableName) {
    const query = `DROP TABLE IF EXISTS ${tableName}`;
    return await this.executeQuery(query);
  },
});

export default useDB;
