const { log } = require("console")
const mongoose = require("mongoose")

const configs = require("../configs")

const { DB_CONNECTION_URI } = configs

const chalk = require("chalk")

mongoose.connect(
  DB_CONNECTION_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  (err) => {
    if (err)
      return console.error("There was an error connecting to database.", err)
    console.log(chalk.green("Database connected"))
  }
)
