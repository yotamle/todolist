
require("dotenv").config()

const express = require("express");
const app = express();

app.use(require('cors')())
app.use(express.json());

require("./router")(app);

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server is Running on port ${PORT}`))

