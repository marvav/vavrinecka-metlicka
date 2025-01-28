export function translateTitleToUrl(title: string): string {
    return title
        .normalize('NFD') // normalize
        .replace(/[\u0300-\u036f]/g, '') // Remove diacritic
        .replace(/\s+/g, '-') // Replace blank spaces with hyphens
        .toLowerCase();
}