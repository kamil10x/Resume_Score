require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

require("./conn");

app.use(express.json());

app.use(cors({
    credentials: true,
    origin: [
        "http://localhost:5173",
        //"https://your-frontend-name.vercel.app"
        "https://resume-score-gamma.vercel.app"
    ]
}));

const userRoutes = require("./Routes/user");
const ResumeRoutes = require("./Routes/resume");

app.use("/api/user", userRoutes);
app.use("/api/resume", ResumeRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Backend is running on port ${PORT}`);
});