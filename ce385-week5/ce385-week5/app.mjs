import express from "express";
import todoRouter from "./routes/todoRouter.mjs";

const app = express();

const PORT = 3000;

// ให้ Express อ่าน JSON จาก body ได้
app.use(express.json());

// ข้อมูล TODO
const TODOS = [
  {
    id: "1",
    title: "เรียน Node.js",
    done: false,
    priority: 1
  },
  {
    id: "2",
    title: "เรียน Express",
    done: false,
    priority: 2
  },
  {
    id: "3",
    title: "ทำ Workshop",
    done: true,
    priority: 1
  },
  {
    id: "4",
    title: "ทดสอบ API ด้วย Postman",
    done: false,
    priority: 3
  }
];

app.get("/health", (req, res) => {
  res.json({
    status: "ok"
  });
});

app.use("/api/v1/todos", todoRouter);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});