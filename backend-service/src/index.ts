import express from 'express';
import cors from 'cors';
import {config} from 'dotenv';
import {env} from 'process';
import {eventRouter} from "./routers/event.router.js";

config();

const index = express();
const port = env.PORT ?? 3000;

// CORS middleware
index.use(cors());

// JSON middleware
index.use(express.json());

// parse URL encoded strings
index.use(express.urlencoded({ extended: true }));

// DO NOT MODIFY THE PRECEDING code ^^

index.use('/events', eventRouter());

// No route was taken - 404 - Resource (API endpoint) not found.
// Default route returning 404
index.use((_req, res) => {
    res.status(404).send('Not found');
});

if (env.NODE_ENV !== 'test') {
    index.listen(port, () => {
        console.log(
            `[${new Date().toISOString()}] RESTful API for iteration 02 is listening on port ${port}`,
        );
    });
}



