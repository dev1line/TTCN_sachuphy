const express = require("express")

const app = express()

app.use(
  express.urlencoded({
    extended: false,
  })
)
app.use(express.json())

const cors = require('cors')

app.use(cors())

// Logging

const morgan = require('morgan')

app.use(morgan('dev'))

// Setting up API

const { v1Router } = require("./routers")

app.use('/api/v1', v1Router)

console.log(app._router)

// Error Handler

app.all('*', (req, res) => {
  res.sendStatus(404);
});

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Internal Server Error!')
})

const configs = require("./configs")

const { PORT, HOST } = configs

const chalk = require("chalk")

app.listen(PORT, HOST, () => {
  console.log(chalk.green("Server is running at " + PORT))
})
