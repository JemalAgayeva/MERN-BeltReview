const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const port = 8000;
const app = express();


app.use(cors());
app.use(express.json());

// ******* Mongoose connection config file **********//

require("./server/config/project.config")

// const Joke = require("./server/models/jokes.model")

require("./server/routes/project.route") (app)

// ******* Require routes file **********//



// app.get("/", (req, res) => {
//     res.json({"message": "ok"});
// });

app.listen(port, () => console.log(`Listening on port ${port}`));