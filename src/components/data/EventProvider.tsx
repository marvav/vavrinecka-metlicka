import {EventData} from "./EventData.tsx";
import rockovyvecer from "../../assets/posters/rockovyvecer.jpg"
import pochod2025 from "../../assets/posters/pochod2025.png"
import beh2024 from "../../assets/posters/beh2024.jpg"
import pochod2024 from "../../assets/posters/pochod2024.jpg"

export const predefinedEvents: EventData[] = [
    {
        title: "Vavřinecký pochod Moravským krasem 2025",
        date: new Date(2025,0,25),
        time: undefined,
        place: "Vavřinec pod plechem",
        place_link: "https://en.mapy.cz/s/bagoguzesu",
        content: "Rok uběhl jako voda a my s radostí navazujeme na úspěšnou akci loňské zimní sezóny – Vavřinecký pochod Moravským krasem. Tímto Vás zveme na 2. ročník, kde jsme si pro Vás připravili trasy různých délek od 6 do 50 km. V cíli se můžete těšit na vystoupení kapely ZVUKOVÁ KULISA.",
        ticket_link: undefined,
        image: pochod2025 as string,
        photos_url: undefined,
        tracks: new Map([
            [6.5,"https://mapy.cz/s/kemunahazu"],
            [18.5,"https://mapy.cz/s/lafarefopo"],
            [32.5,"https://mapy.cz/s/rasadotoda"],
            [50,"https://mapy.cz/s/gakorekape"]
        ])
    },

    {
        title: "Rockový večer",
        date: new Date(2025,0,17),
        place: "Kulturní dům ve Žďáře",
        place_link: "https://en.mapy.cz/s/hokuzazecu", // add correct url
        time: "18:00",
        content: "Zveme vás na Rockový večer 🤟 s kapelou Kapriola, Aleš Brichta Project a Judas Priest Revival (Praha). Otevření KD: 17:00\n" +
            "- VSTUPNÉ: 599 Kč v předprodeji, 650 Kč na místě\n",
        ticket_link: undefined,
        image: rockovyvecer as string,
        photos_url: undefined,
        tracks: undefined
    },

    {
        title: "Vavřinecký běh Moravským krasem 2024",
        date: new Date(2024,7,24),
        time: undefined,
        place: "Vavřinec pod plechem",
        place_link: "https://en.mapy.cz/s/bagoguzesu",
        content: "Vavřinecká Metlička pod záštitou SDH Vavřinec Vás zve na 1. ročník závodu VAVŘINECKÝ BĚH MORAVSKÝM KRASEM.\n" +
            "Závod bude probíhat za každého počasí. Start bude v areálu fotbalového hřiště ve Vavřinci, kde budou k dispozici i šatny a sprchy.",
        ticket_link: undefined,
        image: beh2024 as string,
        photos_url: "https://eu.zonerama.com/vasman33/1402623",
        tracks: undefined
    },

    {
        title: "Vavřinecký pochod Moravským krasem 2024",
        date: new Date(2024,0,20),
        time: undefined,
        place: "Vavřinec pod plechem",
        place_link: "https://en.mapy.cz/s/bagoguzesu",
        content: "",
        ticket_link: undefined,
        image: pochod2024 as string,
        photos_url: undefined,
        tracks: new Map([
            [6,"https://mapy.cz/s/detacumenu"],
            [18,"https://mapy.cz/s/fovegetogu"],
            [30,"https://mapy.cz/s/botulekosu"]
        ])
    },
];