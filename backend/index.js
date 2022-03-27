// node modules imports
require("dotenv").config({path: "./config.env"});
const express = require("express");

// custom modules imports
const connectDB = require("./config/database");
const errorHandler = require("./middleware/error");

// initialization
const app = express();
connectDB()


// middleware
app.use(express.json());
app.use("/api/blog", require("./routes/blog"))


// last middlware
app.use(errorHandler)

// port and event listener
const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
	console.log(`Connected to port ${PORT}`)
});

// process termination for unhandled promise rejection
process.on("unhandledRejection", (reason, promise) => {
	console.log(`Unhandled Promise Rejection Error : ${reason}`)
	process.exit(1)
})