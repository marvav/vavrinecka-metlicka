import express, {Router} from 'express';
import {eventController} from "../controllers/event.controller.js";

export const eventRouter = (): Router => {
    const eventRouter = express.Router();
    eventRouter.get("/:id", eventController.getEvent);
    eventRouter.get("/", eventController.getEvents);
    eventRouter.use((_req, res) => {
        res.status(404).send('Event could not be routed');
    });
    return eventRouter;
};
