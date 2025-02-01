require("dotenv").config();
const express = require("express");
const session = require("express-session");
const authRoutes = require("./auth");

const app = express();

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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
