import * as declarations from "core/declarations";
export default function (propVal) {
    if (propVal.findBestMatch(window.wordsTranslationsDB.Words['triangle'][declarations.langCode]).rating > 0.8) {
        return `polygon(50% 0%, 0% 100%, 100% 100%)`
    } else if (propVal.findBestMatch(window.wordsTranslationsDB.Words['trapezoid'][declarations.langCode]).rating > 0.8) {
        return `polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)`
    } else if (propVal.findBestMatch(window.wordsTranslationsDB.Words['parallelogram'][declarations.langCode]).rating > 0.8) {
        return `polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)`
    } else if (propVal.findBestMatch(window.wordsTranslationsDB.Words['rhombus'][declarations.langCode]).rating > 0.8) {
        return `polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)`
    } else if (propVal.findBestMatch(window.wordsTranslationsDB.Words['pentagon'][declarations.langCode]).rating > 0.8) {
        return `polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)`
    } else if (propVal.findBestMatch(window.wordsTranslationsDB.Words['hexagon'][declarations.langCode]).rating > 0.8) {
        return `polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)`
    } else if (propVal.findBestMatch(window.wordsTranslationsDB.Words['heptagon'][declarations.langCode]).rating > 0.8) {
        return `polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)`
    } else if (propVal.findBestMatch(window.wordsTranslationsDB.Words['octagon'][declarations.langCode]).rating > 0.8) {
        return `polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)`
    } else if (propVal.findBestMatch(window.wordsTranslationsDB.Words['decagon'][declarations.langCode]).rating > 0.8) {
        return `polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)`
    } else if (propVal.findBestMatch(window.wordsTranslationsDB.Words['circle'][declarations.langCode]).rating > 0.8) {
        return `circle(50% at 50% 50%)`
    } else if (propVal.findBestMatch(window.wordsTranslationsDB.Words['ellipse'][declarations.langCode]).rating > 0.8) {
        return `ellipse(25% 40% at 50% 50%)`
    }
}