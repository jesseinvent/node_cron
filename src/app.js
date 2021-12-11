const express = require("express");
const job = require("./job");

const app = express();
const PORT = 6000;

app.listen(PORT, () => `Server listening on http://localhost:${PORT}`);

// Start job
job.start();
