import React, { createContext, useState } from "react";

export const LANGUAGES = {
    english: {
        header: 'Utility calculator',
        total: 'Total',
        electricity: 'Electricity',
        water: 'Water',
        gas: 'Gas',
        previous: 'Previous',
        current: 'Current',
        buttonCalculate: "CALCULATE",
        buttonClear: 'CLEAR',
        buttonTotal: 'SHOW TOTAL',
        currency: 'UAH'
    },
    russian: {
        header: 'Калькулятор услуг',
        total: 'Сумма',
        electricity: 'Электричество',
        water: 'Вода',
        gas: 'Газ',
        previous: 'Предыдущие',
        current: 'Текущие',
        buttonCalculate: "ПОСЧИТАТЬ",
        buttonClear: 'ОЧИСТИТЬ',
        buttonTotal: 'СУММА',
        currency: 'ГРН'
    },
    ukrainian: {
        header: 'Калькулятор послуг',
        total: 'Сума',
        electricity: 'електрика',
        water: 'Вода',
        gas: 'Газ',
        previous: 'Попередній',
        current: 'Чинний',
        buttonCalculate: "РОЗРАХУВАТИ",
        buttonClear: 'ОЧИСТИТИ',
        buttonTotal: 'СУМА',
        currency: 'ГРН'
    }
}

export const LangContext = createContext(null);
export function useLanguageContext() {
    const [language, setLanguage] = useState(LANGUAGES.ukrainian);
    function setRussianLang() {
        setLanguage(LANGUAGES.russian)
    }
    function setUkrainianLang() {
        setLanguage(LANGUAGES.ukrainian)
    }
    const languageContext = {
        language,
        setRussianLang,
        setUkrainianLang
    }
    return {
        languageContext
    };
}