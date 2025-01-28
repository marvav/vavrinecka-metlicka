import {EventX} from "../types.js";


export const eventRepository = {
    async getEvent(id: string): Promise<EventX> {
        return {id: id};
    },

    async getEvents(): Promise<EventX[]> {
        return [{id: "id"}];
    },
};

export default eventRepository;
