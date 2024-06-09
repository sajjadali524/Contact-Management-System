const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv")
const userAuth = require("./routes/userAuth");
const contactRoute = require("./routes/contactRoutes");
const cookieParser = require("cookie-parser");
require("./db/dbConfig");
dotenv.config();

const app = express();
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", userAuth);
app.use("/api/contacts", contactRoute)

app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`)
});