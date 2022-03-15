const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/db");
const dotenv = require("dotenv");

dotenv.config();

const {
  localStrategyHandler,
  serializeUser,
  deserializeUser,
  isValid,
} = require("./passport");

const MongoDBStore = require("connect-mongodb-session")(session);
const store = new MongoDBStore({
  uri: process.env.MONGO_URI,
  collection: "mySessions",
});

const userController = require("./controllers/users.controller");
const imageController = require("./controllers/image.controller");
const goalsController = require("./controllers/goals.controller");
const subgoalsController = require("./controllers/subgoals.controller");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

const PORT = process.env.PORT || 4000;

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: store,
    cookie: {
      secure: false,
      httpOnly: false,
      maxAge: 1000 * 60000,
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

passport.use("local", new LocalStrategy(localStrategyHandler));
passport.serializeUser(serializeUser);
passport.deserializeUser(deserializeUser);

app.use("/auth", userController);
app.use("/upload", imageController);
app.use("/galgaleyezer", goalsController);
app.use("/galgaleyezer", subgoalsController);

// when we will add an admin
app.use("*", isValid);

process.on("uncaughtException", (err, origin) => {
  console.log(err);
});

connectDB();

app.listen(PORT, console.log(`Server running on port ${PORT}`));
