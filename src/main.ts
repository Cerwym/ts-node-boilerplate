import express, { Express, Request, Response } from 'express';
import "dotenv-defaults/config"

const app: Express = express();
const port = process.env.WS_PORT;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`[main]: Server is running ::${port} 🚀`)
})