require("dotenv").config();
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const authRoutes = require("./auth");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.use(
    session({
        secret: process.env.JWT_SECRET || "default-secret-key",
        resave: false,
        saveUninitialized: false,
        cookie: {secure: false},
    })
);

app.use("/auth", authRoutes);

app.post("/api/donors", async (req, res) => {
  const {email, foodname, quantity, pickup_long, pickup_lat, expiration, food_type} = req.body;

  try {
    const sql = 'INSERT INTO food (email, foodname, quantity, pickup_long, pickup_lat, expiration, food_type) VALUES (?,?,?,?,?,?,?)';
    const values = [email, foodname, quantity, pickup_long, pickup_lat, expiration, food_type];

    const [result] = await db.query(sql, values);

    res.json({ message: "Donation successful"});
  } catch(err) {
      console.error("Error inserting data",err);
      res.status(500).send("Database error");
  }
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
