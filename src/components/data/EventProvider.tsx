import {EventData} from "./EventData.tsx";

import rockovyvecer from "../../assets/posters/rockovyvecer.jpg"
import pochod2025 from "../../assets/posters/pochod2025.png"
import beh2024 from "../../assets/posters/beh2024.jpg"
import pochod2024 from "../../assets/posters/pochod2024.jpg"

import pochod2025banner from "../../assets/banners/pochod2025banner.png"
import rockovyvecer2025banner from "../../assets/banners/rockovyvecer2025banner.jpg"
import beh2024banner from "../../assets/banners/beh2024banner.jpg"
import pochod2024banner from "../../assets/banners/pochod2024banner.jpg"

import rockovyvecer2025parkovani from "../../assets/parking/rockovyvecer2025parking.png"
import pochod2025parking from "../../assets/parking/pochod2025_parking.png"

import {parkVavrinec, zdarKulturak} from "./PlaceProvider.tsx";
import {kudyznudy} from "./AffiliateProvider.tsx";

export const predefinedEvents: EventData[] = [
    {
        title: "Vavřinecký pochod Moravským krasem 2025",
        url_fragment: "vavrinecky-pochod-moravskym-krasem-2025",
        date: new Date(2025, 0, 25, 0, 0 , 0),
        place: parkVavrinec,
        content: ["2. ročník úspěšné turistické akce v srdci Moravského krasu. Letos jsme si pro vás připravili trasy různých délek od 6 do 50 km, na kterých navštívíte známou propast Macocha, Dům přírody Moravského krasu, Rozhlednu Podvrší, Skalní Mlýn a další zajímavá místa této unikátní krajiny.\n"
            ,"V cíli se můžete těšit na občerstvení, vystoupení kapely ZVUKOVÁ KULISA a chybět nebude ani diplom pro každého, kdo některou z tras zdárně zdolá!\n",
            "Vstup na Rozhlednu Podvrší a do Domu přírody Moravského krasu je pro účastníky pochodu zdarma.\n"
            ,"Startovné je 50 Kč (Registrace předem není třeba, vše řešíme na místě).\n"
            ,"Každý účastník obdrží na startu mapu všech tras.\n"
            ,"Na startu budou pro účastníky k dispozici 2 bezplatná parkoviště.\n"],
        ticket_link: undefined,
        banner: pochod2025banner as string,
        photos_url: undefined,
        tracks: new Map([
            [6.5, "https://mapy.cz/s/kemunahazu"],
            [18.5, "https://mapy.cz/s/lafarefopo"],
            [32.5, "https://mapy.cz/s/rasadotoda"],
            [50, "https://mapy.cz/s/gakorekape"]
        ]),
        pictures: [{name: "Plakát", url: pochod2025 as string},
            {name: "Parkování", url: pochod2025parking as string}],
        eventLinks: [{name: "Facebook", url: "https://fb.me/e/6qiAy00Va"}, {
            name: "Kudyznudy",
            url: "https://www.kudyznudy.cz/akce/vavrinecky-pochod-moravskym-krasem"
        }],
        affiliates: [kudyznudy]
    },

    {
        title: "Rockový večer 2025",
        url_fragment: "rockovy-vecer-2025",
        date: new Date(2025, 0, 17, 18, 0, 0),
        place: zdarKulturak,
        content: ["Zveme vás na Rockový večer 🤟 s kapelou Kapriola, Aleš Brichta Project a Judas Priest Revival (Praha)."
            , "Otevření KD: 17:00 - VSTUPNÉ: 599 Kč v předprodeji, 650 Kč na místě\n", "LINE-UP 🎸🔥\n"
        ,"Kapriola | 18:00 - 19:00\n"
        ,"Aleš Brichta Project | 20:00 - 21:00\n"
        ,"Judas Priest Revival (Praha) | 22:00 - 00:00"],
        ticket_link: undefined,
        banner: rockovyvecer2025banner as string,
        photos_url: undefined,
        tracks: undefined,
        pictures: [
            {
                name: "Plakát", url: rockovyvecer as string
            }, {
                name: "Parkování", url: rockovyvecer2025parkovani as string
            }],
        eventLinks: [{name: "Facebook", url: "https://fb.me/e/blY6KGyxN"}],
        affiliates: []
    },

    {
        title: "Vavřinecký běh Moravským krasem 2024",
        url_fragment: "vavrinecky-beh-moravskym-krasem-2024",
        date: new Date(2024, 7, 24, 0, 0, 0),
        place: parkVavrinec,
        content: ["Vavřinecká Metlička pod záštitou SDH Vavřinec Vás zve na 1. ročník závodu VAVŘINECKÝ BĚH MORAVSKÝM KRASEM.\n" +
            "Závod bude probíhat za každého počasí. Start bude v areálu fotbalového hřiště ve Vavřinci, kde budou k dispozici i šatny a sprchy."],
        ticket_link: undefined,
        banner: beh2024banner as string,
        photos_url: "https://eu.zonerama.com/vasman33/1402623",
        tracks: undefined,
        pictures: [{name: "Plakát", url: beh2024 as string}],
        eventLinks: [],
        affiliates: []
    },

    {
        title: "Vavřinecký pochod Moravským krasem 2024",
        url_fragment: "vavrinecky-pochod-moravskym-krasem-2024",
        date: new Date(2024, 0, 20, 0, 0, 0),
        place: parkVavrinec,
        content: [],
        ticket_link: undefined,
        banner: pochod2024banner as string,
        photos_url: undefined,
        tracks: new Map([
            [6, "https://mapy.cz/s/detacumenu"],
            [18, "https://mapy.cz/s/fovegetogu"],
            [30, "https://mapy.cz/s/botulekosu"]
        ]),
        pictures: [{name: "Plakát", url: pochod2024 as string}],
        eventLinks: [],
        affiliates: []
    },
];

const metalpodplechem = {
    title: "Metal pod Plechem 2024",
    url_fragment: "metal-pod-plechem-2024",
    date: new Date(2024, 3, 20, 16, 0, 0),
    place: parkVavrinec,
    content: "2. ročník hudební akce METAL POD PLECHEM 🤟, který se koná v sobotu 20.4.2024 v areálu parku Vavřinec. Začátek v 16:00, areál bude otevřen od 15:00, předpokládaný konec v 1:00. KAPELY & LINE-UP:\n" +
        "• Kozí čtvrť (Drnovice u Lysic) 16:00 - 17:00,\n" +
        "• Blastera (Blansko) 17:30 - 18:20,\n" +
        "• Judas Priest Revival (Praha) 19:00 - 21:00,\n" +
        "• Aliens (Velké Pavlovice) 21:30 - 23:30.\n" +
        "VSTUPNÉ: 450 Kč\n" +
        "OBČERSTVENÍ:\n" +
        "• Starobrno 12° Bitr, víno z Vinařství Michna (Čejkovice), nealko\n" +
        "• Utopenci, nakládaný sýr Camembert, uzená klobása, lipovecká sekaná\n" +
        "Akce se koná za každého počasí (vyhřívané prostory).",
    ticket_link: undefined,
    image: beh2024 as string,
    banner: pochod2025banner as string,
    photos_url: undefined,
    tracks: undefined,
    eventLinks: [{name: "Facebook", url: "https://www.facebook.com/events/927713592219766/"}],
    affiliates: []
};