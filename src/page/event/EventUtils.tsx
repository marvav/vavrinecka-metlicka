import {EventBase} from "../../data/EventBase.tsx";

export function translateTitleToUrl(title: string): string {
    return title
        .normalize('NFD') // normalize
        .replace(/[\u0300-\u036f]/g, '') // Remove diacritic
        .replace(/\s+/g, '-') // Replace blank spaces with hyphens
        .toLowerCase();
}

export function isEventInFuture(event: EventBase){
    const today = new Date();
    return event.date.getFullYear() >= today.getFullYear()
        && event.date.getMonth() >= today.getMonth()
        && event.date.getDate() >= today.getDate();
}