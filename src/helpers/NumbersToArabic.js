import { reactLocalStorage } from 'reactjs-localstorage';

export function convertToArabicNumbers(input) {
    const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];

    return input?.toString()?.replace(/[0-9]/g, (digit) => arabicNumbers[digit]);
}

export function TranslationToArabic(English, Arabic) {
    const Language = reactLocalStorage.get("lan");

    if (Language === "en") return English

    if (Language === "ar") return Arabic

    return English
}

export function PriceLocation(Egy, Sud, t, Location) {

    if (Location === "Egypt") return `${Number(Egy)?.toFixed(2)} ${t("LE")}`;

    if (Location === "Saudi Arabia") return `${Number(Sud)?.toFixed(2)} ${t("SAR")}`;

    return `${Number(Sud).toFixed(2)} ${t("SAR")}`;
}
export function PriceonLocation(Egy, Sud, t, Location) {
    if (Location === "Egypt") {
        return [`${Number(Egy)?.toFixed(2)}`, t("LE")];
    }

    if (Location === "Saudi Arabia") {
        return [`${Number(Sud)?.toFixed(2)}`, t("SAR")];
    }

    return [`${Number(Sud)?.toFixed(2)}`, t("SAR")];
}

export function GetAllAdditions(Additions) {

    if (Array.isArray(Additions) && Additions.length > 0) {
        return Additions.reduce((a, b) => a + b, 0);
    }

    return 0;
}

export function applyPercentage(percentage, number) {
    const discount = (percentage / 100) * number;
    const finalPrice = number - discount;
    return parseFloat(finalPrice.toFixed(2));
}
export function copounvalue(percentage, number) {
    const discount = (percentage / 100) * number;
    return discount;
}