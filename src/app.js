import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const PORT = 5000;

const users = [];
const tweets = [];

app.listen(PORT , () => console.log(`App rodando na porta ${PORT}`));

