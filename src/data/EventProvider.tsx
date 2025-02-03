import {Event} from "./Event.tsx";

import rockovyvecer from "../assets/posters/rockovyvecer.jpg"
import pochod2025 from "../assets/posters/pochod2025.png"
import beh2024 from "../assets/posters/beh2024.jpg"
import pochod2024 from "../assets/posters/pochod2024.jpg"
import metalpodplechem2025 from "../assets/posters/metalpodplechem2025.jpg"
import metalpodplechem2024 from "../assets/posters/metalpodplechem2024.jpg"

import pochod2025banner from "../assets/banners/pochod2025banner.png"
import rockovyvecer2025banner from "../assets/banners/rockovyvecer2025banner.jpg"
import beh2024banner from "../assets/banners/beh2024banner.jpg"
import pochod2024banner from "../assets/banners/pochod2024banner.jpg"
import metalpodplechem2025banner from "../assets/banners/metalpodplechem2025banner.png"
import metalpodplechem2024banner from "../assets/banners/metalpodplechem2024banner.jpg"

import rockovyvecer2025parkovani from "../assets/parking/rockovyvecer2025parking.png"
import pochod2025parking from "../assets/parking/pochod2025_parking.png"

import pochod2024mapa from "../assets/parking/pochod2024mapa.png"
import pochod2025mapa from "../assets/parking/Pochod2025mapa.png"

import {parkVavrinec, zdarKulturak} from "./PlaceProvider.tsx";
import {kudyznudy} from "./AffiliateProvider.tsx";
import {EventBase} from "./EventBase.tsx";

const predefinedEvents: Event[] = [
    {
        id: crypto.randomUUID(),
        title: "METAL POD PLECHEM 2025",
        date: new Date(2025, 3, 12, 0, 0, 0),
        place: parkVavrinec,
        description: [
            {content: "Zveme vás na 3. ročník hudební akce METAL POD PLECHEM 🤟, která proběhne v sobotu 12. 4. 2025 v areálu parku Vavřinec! Připravte se na pořádnou dávku rocku a metalu! 🎸🔥"}
            , {title: "⏰ ČASOVÝ HARMONOGRAM", bulletPoints: ["Otevření areálu: 15:00", "Začátek akce: 16:00"]}
            , {
                title: "🎤 KAPELY & LINE-UP", bulletPoints: [
                    "la Bande - Rock (Bošovice) 16:00", "" +
                    "Green day revival - Punk Rock (Praha) 18:00",
                    "Accept revival - Heavy Metal (Znojmo) 20:00",
                    "Aliens - Heavy Metal (Velké Pavlovice) 22:00"]
            }
            , {title: "🎟️ VSTUPNÉ", bulletPoints: ["500 Kč v předprodeji", "550 Kč na místě"]}
            , {content: "🌦️ Akce se koná za každého počasí (vyhřívané prostory)"}
            , {content: "🔊 Připravte se na večer plný skvělé muziky! Těšíme se na vás! 🤘🔥"}
        ],
        ticketMessage: {title: "🛒KDE ZAKOUPIT VSTUPENKY?", bulletPoints: ["Hospůdka na Kasárnách, Veselice", "Nová duha, prodejna Vavřinec a Sloup", "Obecní úřad Žďár (v úředních hodinách)"]},
        links: [{name: "Facebooková událost", url: "https://fb.me/e/5JsmVt9Vz"}],
        banner: metalpodplechem2025banner as string,
        tracks: [],
        pictures: [{name: "Plakát", url: metalpodplechem2025 as string}],
        affiliates: []
    },
    {
        id: crypto.randomUUID(),
        title: "Vavřinecký pochod Moravským krasem 2025",
        date: new Date(2025, 0, 25, 0, 0, 0),
        place: parkVavrinec,
        description: [
            {content: "2. ročník úspěšné turistické akce v srdci Moravského krasu. Letos jsme si pro vás připravili trasy různých délek od 6 do 50 km, na kterých navštívíte známou propast Macocha, Dům přírody Moravského krasu, Rozhlednu Podvrší, Skalní Mlýn a další zajímavá místa této unikátní krajiny. V cíli se můžete těšit na občerstvení, vystoupení kapely ZVUKOVÁ KULISA a chybět nebude ani diplom pro každého, kdo některou z tras zdárně zdolá!"}
            , {content: "Vstup na Rozhlednu Podvrší a do Domu přírody Moravského krasu je pro účastníky pochodu zdarma."}
            , {content: "Startovné je 50 Kč (Registrace předem není třeba, vše řešíme na místě). Každý účastník obdrží na startu mapu všech tras."}
            , {content: "Na startu budou pro účastníky k dispozici 2 bezplatná parkoviště."}
            , {content: "Na pochod si s sebou můžete vzít i pejsky."}
            , {
                title: "Doporučené startovací časy",
                bulletPoints: ["6,5km: 12:00-14:00", "18,5km: 8:00-12:00", "32,5km: 8:00-10:00", "50km: 6:00-8:00"]
            }
            ,
        ],
        ticketMessage: undefined,
        links: [{name: "Facebooková událost", url: "https://fb.me/e/6qiAy00Va"}, {
            name: "Kudyznudy",
            url: "https://www.kudyznudy.cz/akce/vavrinecky-pochod-moravskym-krasem"
        }],
        banner: pochod2025banner as string,
        tracks: [{name: "6.5km", url: "https://mapy.cz/s/kemunahazu"},
            {name: "18.5km", url: "https://mapy.cz/s/lafarefopo"},
            {name: "32.5km", url: "https://mapy.cz/s/rasadotoda"},
            {name: "50km", url: "https://mapy.cz/s/gakorekape"}
        ],
        pictures: [{name: "Plakát", url: pochod2025 as string},
            {name: "Parkování", url: pochod2025parking as string},
            {name: "Mapa pochodu", url: pochod2025mapa as string},
        ],
        affiliates: [kudyznudy]
    },

    {
        id: crypto.randomUUID(),
        title: "Rockový večer 2025",
        date: new Date(2025, 0, 17, 18, 0, 0),
        place: zdarKulturak,
        description: [
            {content: "Zveme vás na Rockový večer 🤟 s kapelou Kapriola, Aleš Brichta Project a Judas Priest Revival (Praha)."},
            {content: "Otevření KD: 17:00 - VSTUPNÉ: 599 Kč v předprodeji, 650 Kč na místě"},
            {
                title: "LINE-UP 🎸🔥", bulletPoints: [
                    "Kapriola | 18:00 - 19:00"
                    , "Aleš Brichta Project | 20:00 - 21:00"
                    , "Judas Priest Revival (Praha) | 22:00 - 00:00",
                ]
            }
        ],
        ticketMessage: undefined,
        banner: rockovyvecer2025banner as string,
        links: [{name: "Fotky", url: "https://eu.zonerama.com/Link/Open/678ea2c1aa78183dd8e455da"}, {name: "Facebook", url: "https://fb.me/e/blY6KGyxN"}],
        tracks: [],
        pictures: [
            {
                name: "Plakát", url: rockovyvecer as string
            }, {
                name: "Parkování", url: rockovyvecer2025parkovani as string
            }],
        affiliates: []
    },

    {
        id: crypto.randomUUID(),
        title: "Vavřinecký běh Moravským krasem 2024",
        date: new Date(2024, 7, 24, 0, 0, 0),
        place: parkVavrinec,
        description: [
            {content: "Vavřinecká Metlička pod záštitou SDH Vavřinec Vás zve na 1. ročník závodu VAVŘINECKÝ BĚH MORAVSKÝM KRASEM."}
            , {content: "Závod bude probíhat za každého počasí. Start bude v areálu fotbalového hřiště ve Vavřinci, kde budou k dispozici i šatny a sprchy."}
        ],
        links: [{name: "Fotky", url: "https://eu.zonerama.com/vasman33/1402623"}],
        banner: beh2024banner as string,
        ticketMessage: undefined,
        tracks: [],
        pictures: [{name: "Plakát", url: beh2024 as string}],
        affiliates: []
    },

    {
        id: crypto.randomUUID(),
        title: "METAL POD PLECHEM 2024",
        date: new Date(2024, 3, 20, 0, 0, 0),
        place: parkVavrinec,
        description: [
            {content: "Zveme vás na 2. ročník hudební akce METAL POD PLECHEM 🤟, který se koná v sobotu 20.4.2024 v areálu parku Vavřinec. Začátek v 16:00, areál bude otevřen od 15:00, předpokládaný konec v 1:00. "}
            , {
                title: "🎤 KAPELY & LINE-UP", bulletPoints: [
                    "Kozí čtvrť (Drnovice u Lysic) 16:00 - 17:00",
                    "Blastera (Blansko) 17:30 - 18:20",
                    "Judas Priest Revival (Praha) 19:00 - 21:00",
                    " Aliens (Velké Pavlovice) 21:30 - 23:30"]
            }
            , {title: "🎟️ VSTUPNÉ", bulletPoints: ["450 Kč"]}
            , {title: "OBČERSTVENÍ", bulletPoints: ["Starobrno 12° Bitr, víno z Vinařství Michna (Čejkovice), nealko", "Utopenci, nakládaný sýr Camembert, uzená klobása, lipovecká sekaná"]}
            , {content: "Akce se koná za každého počasí (vyhřívané prostory)."}
        ],
        ticketMessage: undefined,
        links: [{name: "Facebooková událost", url: "https://fb.me/e/ajieAqnDz"}],
        banner: metalpodplechem2024banner as string,
        tracks: [],
        pictures: [{name: "Plakát", url: metalpodplechem2024 as string}],
        affiliates: []
    },

    {
        id: crypto.randomUUID(),
        title: "Vavřinecký pochod Moravským krasem 2024",
        date: new Date(2024, 0, 20, 0, 0, 0),
        place: parkVavrinec,
        description: [{content: "Již proběhlo"}],
        ticketMessage: undefined,
        links: [],
        banner: pochod2024banner as string,
        tracks: [{name: "6km", url: "https://mapy.cz/s/detacumenu"},
            {name: "18km", url: "https://mapy.cz/s/fovegetogu"},
            {name: "30km", url: "https://mapy.cz/s/botulekosu"}],
        pictures: [{name: "Plakát", url: pochod2024 as string},
            {name: "Mapa pochodu", url: pochod2024mapa as string}
        ],
        affiliates: []
    },
];

export function fetchBasicEvents(): EventBase[] {
    return predefinedEvents;
}

export function fetchEvent(id: string): Event {
    return predefinedEvents.find(event => event.id.match(id));
}