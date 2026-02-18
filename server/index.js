require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

const app = express();
app.use(cors());
app.use(express.json());

async function getDb() {
  return mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT || 3306),
  });
}

app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

app.get("/api/products", async (req, res) => {
  const { type = "all", minPrice, maxPrice } = req.query;

  const where = [];
  const params = [];

  if (type !== "all") {
    where.push("type = ?");
    params.push(type);
  }

  if (minPrice) {
    where.push("price >= ?");
    params.push(Number(minPrice));
  }

  if (maxPrice) {
    where.push("price <= ?");
    params.push(Number(maxPrice));
  }

  const sql =
  `SELECT id, name, description, price, type, imageUrl
   FROM products` +
  (where.length ? ` WHERE ${where.join(" AND ")}` : "") +
  ` ORDER BY 
      CASE 
        WHEN type = 'blush' THEN 1
        WHEN type = 'lipgloss' THEN 2
        WHEN type = 'skintint' THEN 3
        ELSE 4
      END,
      id DESC`;



  try {
    const db = await getDb();
    const [rows] = await db.execute(sql, params);
    await db.end();
    res.json(rows);
 } catch (err) {
  console.error("DB ERROR:", err);
  res.status(500).json({ error: "Database error", details: err.message });
}
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
