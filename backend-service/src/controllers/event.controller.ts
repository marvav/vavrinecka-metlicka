import {Request, Response} from "express";
import eventRepository from '../repositories/event.repository.js';
import {parseRequest} from '../utils.js';
import {getEventRequestSchema, getEventsRequestSchema} from "../validationSchemas/validationSchemas.js";
import {EventX} from "../types.js";

const getEvent = async (req: Request, res: Response) => {
    const request = await parseRequest(getEventRequestSchema, req, res);
    if (request === null) {
        res.status(500).send('Requested invalid Event');
        return;
    }

    const event = await eventRepository.getEvent(request.params.id);
    res.send({ item: event, message: 'Event read' });
};

const getEvents = async (req: Request, res: Response) => {
    const request = await parseRequest(getEventsRequestSchema, req, res).catch();
    if (request === null) {
        res.status(500).send('Requested invalid events');
        return;
    }

    const events: EventX[] = await eventRepository.getEvents();
    res.send({ items: events, message: 'All Events read' });
};

export const eventController = {
    getEvent,
    getEvents,
};
