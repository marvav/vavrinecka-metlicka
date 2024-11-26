import {ArticleData} from "../data/ArticeData.tsx";

export const predefinedArticles: ArticleData[] = [
    {
        title: "Vavřinecký pochod Moravským krasem 2025",
        date: "25.1.2025",
        time: undefined,
        place: "Vavřincec pod plechem",
        content: "Turistická akce. Koná se 25. ledna 2025. Start / Cíl ve Vavřinci pod plechem.",
        purchasable_tickets: false,
        image: undefined,
    },

    {
        title: "Rockový večer",
        date: "17.1.2025",
        place: "Kulturní dům ve Žďáře.",
        time: "18:00",
        content: "Zveme vás na Rockový večer 🤟 s kapelou Kapriola, Aleš Brichta Project a Judas Priest Revival (Praha). Otevření KD: 17:00\n" +
            "- VSTUPNÉ: 599 Kč v předprodeji, 650 Kč na místě\n",
        purchasable_tickets: true,
        image: "rockovyvecer.jpg",
    },

    {
        title: "Vavřinecký pochod Moravským krasem 2024",
        date: "20.1.2024",
        time: undefined,
        place: "Vavřincec pod plechem",
        content: "",
        purchasable_tickets: false,
        image: "pochod2024.jpg",
    },
];