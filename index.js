import express from "express";
import cors from "cors";
import rootRoutes from "./src/routes/rootRoutes.js";

const app = express();
const port = 8081;

app.use(express.json());
app.use(express.static("."));
app.use(cors());
app.use(rootRoutes);

app.get("/", (req, res) => {
  res.send("222");
});

app.listen(port, () => {
  console.log(`BE running at port ${port}`);
});
