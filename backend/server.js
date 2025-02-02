require("dotenv").config();
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const authRoutes = require("./auth");
const db = require("./db");
const { getCoordinates } = require('./geo');

const app = express();

// Allow CORS for all origins (for testing purposes, you can adjust it later)
app.use(cors({
  origin: '*',  // Allow all domains (You can replace * with a specific domain if you want)
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
}));

app.use(express.json());

app.use(
    session({
        secret: process.env.JWT_SECRET || "default-secret-key",
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false },
    })
);

app.use("/auth", authRoutes);
app.get("/", (req, res) => {
    res.send("Welcome");
});

app.post("/api/donors", async (req, res) => {
    console.log("Request received at /api/donors");
    try {
        const { email, foodname, quantity, pickup_address, expiration, food_type } = req.body;
        const { latitude, longitude } = await getCoordinates(pickup_address);
        
        const sql = 'INSERT INTO food (email, foodname, quantity, pickup_lat, pickup_long, expiration, food_type) VALUES (?,?,?,?,?,?,?)';
        const values = [email, foodname, quantity, latitude, longitude, expiration, food_type];

        const [result] = await db.promise().query(sql, values);

        res.json({ message: "Donation successful" });
    } catch (err) {
        console.error("Error inserting data", err);
        res.status(500).send("Database error");
    }
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
