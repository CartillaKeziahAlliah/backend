const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const session = require("express-session");
const connectDB = require("./config/db");
require("dotenv").config();
const MongoStore = require("connect-mongo");
const app = express();
connectDB();

app.use(helmet());

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use(limiter);

app.use(express.json());

app.use(
  session({
    secret: process.env.JWT_SECRET || "MaoniinyuJWTpleaseChange",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: process.env.DB_URI }),
    cookie: { secure: false },
  })
);

const userRoutes = require("./routes/userRoutes");
const LoggedinRoute = require("./routes/LoggedInUserRoute");
app.use("/api/users", userRoutes);
app.use("/api/LoggedIn", LoggedinRoute);

app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong", error: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running`);
});
