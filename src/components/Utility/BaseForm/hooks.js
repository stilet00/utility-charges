import { useState } from "react";

export function useBaseForm(data, rate) {
    const [energy, setEnergy] = useState(data)
    function onInputChange(e) {
        e.target.value[0] === '0'
            ? e.target.value.slice(1)
            : !isNaN(Number(e.target.value))
            ? setEnergy({...energy, [e.target.name]: e.target.value.trim()})
            : setEnergy({...energy, previousData: 0})

    }
    function calculatePrice() {
        setEnergy({...energy, sum: ((energy.currentData - energy.previousData) * rate).toFixed(1)})
    }
    return {
        onInputChange,
        calculatePrice,
        energy
    }
}