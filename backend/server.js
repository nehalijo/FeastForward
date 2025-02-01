require("dotenv").config();
const express = require("express");
const session = require("express-session");
const authRoutes = require("./auth");
const db=require("./db");
const app = express();
const { getCoordinates } = require('./geo');

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
app.get("/",(req,res)=>{
res.send("Welcome");
});

app.post("/api/donors", async (req, res) => {
  console.log("Request received at /api/donors");
  try {
    const {email, foodname, quantity, pickup_address, expiration, food_type} = req.body;
    const { latitude, longitude } = await getCoordinates(pickup_address);
    
    const sql = 'INSERT INTO food (email, foodname, quantity, pickup_lat, pickup_long, expiration, food_type) VALUES (?,?,?,?,?,?,?)';
    const values = [email, foodname, quantity, latitude, longitude, expiration, food_type];

    const [result] = await db.promise().query(sql, values);

    res.json({ message: "Donation successful"});
  } catch(err) {
      console.error("Error inserting data",err);
      res.status(500).send("Database error");
  }
});

/*getUserLocation().then(location => {
  console.log("Final Location Output:", location);
}).catch(err => {
  console.log("Error fetching location:",err);
});*/

const PORT = process.env.PORT || 5005;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
