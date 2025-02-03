import express from 'express';
import cors from 'cors';
import {config} from 'dotenv';
import {eventRouter} from "./routers/event.router";
import {imageRouter} from "./routers/image.router";

config();

const index = express();
const port = process.env['PORT'] || 3000;

// CORS middleware
index.use(cors());

// JSON middleware
index.use(express.json());

// parse URL encoded strings
index.use(express.urlencoded({ extended: true }));

// DO NOT MODIFY THE PRECEDING code ^^

index.use('/events', eventRouter());
index.use('/images', imageRouter());

// No route was taken - 404 - Resource (API endpoint) not found.
// Default route returning 404
index.use((_req: any, res: any) => {
    res.status(404).send('Not found');
});

index.listen(port, () => {
    console.log(
        `[${new Date().toISOString()}] RESTful API for iteration 02 is listening on port ${port}`,
    );
});



