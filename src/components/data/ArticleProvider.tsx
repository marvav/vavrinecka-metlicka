import {ArticleData} from "./ArticeData.tsx";

export const predefinedArticles: ArticleData[] = [
    {
        title: "Vavřinecký pochod Moravským krasem 2025",
        date: "25.1.2025",
        time: undefined,
        place: "Vavřinec pod plechem",
        place_map: "https://en.mapy.cz/s/bagoguzesu",
        content: "Turistická akce. Koná se 25. ledna 2025. Start / Cíl ve Vavřinci pod plechem.",
        purchasable_tickets: false,
        image: undefined,
        photos_url: undefined,
        tracks: new Map([])
    },

    {
        title: "Rockový večer",
        date: "17.1.2025",
        place: "Kulturní dům ve Žďáře.",
        place_map: "https://en.mapy.cz/s/hokuzazecu", // doplnit kulturní dům
        time: "18:00",
        content: "Zveme vás na Rockový večer 🤟 s kapelou Kapriola, Aleš Brichta Project a Judas Priest Revival (Praha). Otevření KD: 17:00\n" +
            "- VSTUPNÉ: 599 Kč v předprodeji, 650 Kč na místě\n",
        purchasable_tickets: true,
        image: "rockovyvecer.jpg",
        photos_url: undefined,
        tracks: undefined
    },

    {
        title: "Vavřinecký běh Moravským krasem 2024",
        date: "24.8.2024",
        time: undefined,
        place: "Vavřinec pod plechem",
        place_map: "https://en.mapy.cz/s/bagoguzesu",
        content: "Vavřinecká Metlička pod záštitou SDH Vavřinec Vás zve na 1. ročník závodu VAVŘINECKÝ BĚH MORAVSKÝM KRASEM.\n" +
            "Závod bude probíhat za každého počasí. Start bude v areálu fotbalového hřiště ve Vavřinci, kde budou k dispozici i šatny a sprchy.",
        purchasable_tickets: false,
        image: "beh2024.jpg",
        photos_url: "https://eu.zonerama.com/vasman33/1402623",
        tracks: undefined
    },

    {
        title: "Vavřinecký pochod Moravským krasem 2024",
        date: "20.1.2024",
        time: undefined,
        place: "Vavřinec pod plechem",
        place_map: "https://en.mapy.cz/s/bagoguzesu",
        content: "",
        purchasable_tickets: false,
        image: "pochod2024.jpg",
        photos_url: undefined,
        tracks: new Map([
            [6,"https://mapy.cz/s/detacumenu"],
            [18,"https://mapy.cz/s/fovegetogu"],
            [30,"https://mapy.cz/s/botulekosu"]
        ])
    },
];