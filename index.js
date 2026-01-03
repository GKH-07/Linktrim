require("dotenv").config();
const express = require("express");
const urlRoute = require("./routes/url");
const URL = require("./model/url");
const { connectToMongoDB } = require("./connect");

const app = express();
const PORT = process.env.PORT || 8001;

connectToMongoDB(
  process.env.MONGODB_URI || "mongodb://localhost:27017/Linktrim"
).catch((err) => {
  console.error("MongoDB connection failed:", err.message);
  process.exit(1);
});
app.use(express.json());
app.use("/url", urlRoute);

app.get("/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectURL);
});

app.listen(PORT, () => console.log(`Server Started at port ${PORT}`));
