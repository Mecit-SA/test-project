import express, { Request, Response } from 'express';

const app = express();

app.get('', (req: Request, res: Response) => {
    res.send('Demo is working!');
});

app.get('/test', (req: Request, res: Response) => {
    res.send('Test endpoint is working!');
});

app.listen(3000, () => {
    console.log('Server is running...');
});