const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const api_router = require("./src/routes/api");
const auth_router = require("./src/routes/auth");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const { createServer } = require("http");
const { Server: ioServer } = require("socket.io");
const {
  storeMessageController,
  createChatRoomController,
} = require("./src/controllers/conv-controller");

const app = express();
const httpServer = createServer(app);
const io = new ioServer(httpServer, {
  cors: {
    origin: [
      "https://flourishing-dusk-0b7984.netlify.app",
      "https://main--flourishing-dusk-0b7984.netlify.app",
    ],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
  },
});
const PORT = process.env.PORT || 4444;

app.use(
  cors({
    origin: [
      "https://flourishing-dusk-0b7984.netlify.app",
      "https://main--flourishing-dusk-0b7984.netlify.app",
    ],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
  })
);

app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "welcome to the dressshop application" });
});

(async () => {
  await mongoose.connect(process.env.MONGO_URI);
})();

// Two Main APIs
app.use("/api", api_router);
app.use("/auth", auth_router);

io.on("connection", (sk) => {
  console.log("User connected");

  sk.on("chatroom", async (room) => {
    await createChatRoomController(room, sk);
  });

  sk.on("chat", async (msg) => {
    await storeMessageController(msg, sk);
    sk.broadcast.emit("chat", msg);
  });

  sk.on("disconnect", () => {
    console.log("User disconnected");
  });
});

httpServer.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
