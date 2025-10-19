// index.js
import express from "express";
const app = express();
const PORT = 8003;

// JSON 파싱 미들웨어
app.use(express.json());

// 기본 라우트
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

// 서버 실행
app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
