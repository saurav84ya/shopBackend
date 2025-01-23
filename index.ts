import express, { Request, Response } from "express";

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.json({
        message: "Hello bkls using typescript"
    });
});

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
