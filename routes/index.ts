import express, { Request, Response } from 'express';

const routes = express.Router();


routes.get('/', (req: Request, res: Response) => {
    try {
        res.send('Welcome to edusphere Api version 1.0 ');
    } catch (error) {
    }
});


export = routes;
