const express = require("express");  // Import Express
const app = express();
const PORT = 3000;  // Use any port you like

app.get("/", (req, res) => {
    res.send("Server is running...");
});

app.listen(PORT, () => {
    console.log(` Server is running at http://localhost:${PORT}`);
});
