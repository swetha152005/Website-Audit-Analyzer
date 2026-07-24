const express = require("express");
const cors = require("cors");

const auditRoutes = require("./routes/auditRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/audit", auditRoutes);


app.get("/", (req, res) => {
    res.json({
        message: "Page Pulse API Running"
    });
});


const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


module.exports = app;