const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const morgan = require("morgan");

dotenv.config();

const app = express();
const port = process.env.PORT || 8003;
const allowedOrigins = (process.env.ALLOWED_ORIGIN || "http://localhost:3000").split(",");
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { error: "Too many requests, slow down." },
});

app.use(helmet());
app.use(cors(corsOptions));
app.use(limiter);
app.use(morgan("combined"));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "anomaly-service is running" });
});

app.listen(port, () => {
  console.log(`anomaly-service listening on port ${port}`);
});
