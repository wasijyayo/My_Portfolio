import express from "express";
import cors from "cors";
import { Client } from "@notionhq/client";
import dotenv from "dotenv";

dotenv.config();

const app = express(); //サーバー作成
app.use(cors()); //どこかでもアクセスを許可する。これはほんとに必要？

const notion = new Client({ auth: process.env.NOTION_API_KEY });

app.get("/api/events", async (req, res) => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
  });
  res.json(response.results);
});

app.listen(3002, () => {
  console.log("サーバー起動: http://localhost:3002");
});
