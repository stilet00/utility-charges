import { useState } from "react";
import {
  DEFAULT_DATA,
  ELECTRICITY_PRICE,
  GAS_PRICE,
  WATER_PRICE,
} from "../../../constants/constants";

export function useUtility() {
  const [data, setData] = useState(DEFAULT_DATA);
  function onInputChange(e) {
    e.target.value[0] === "0"
      ? e.target.value.slice(1)
      : !isNaN(Number(e.target.value))
      ? setData({ ...data, [e.target.name]: e.target.value.trim() })
      : setData({ ...data, previousData: 0 });
  }
  function getSum(name) {
    const prev = "prev" + name;
    const curr = "curr" + name;
    const variable = "sum" + name;
    const price =
      name === "Electricity"
        ? ELECTRICITY_PRICE
        : name === "Water"
        ? WATER_PRICE
        : GAS_PRICE;
    setData({
      ...data,
      [variable]: ((data[curr] - data[prev]) * price).toFixed(1),
    });
  }
  function clear(name) {
    const prev = "prev" + name;
    const curr = "curr" + name;
    const sum = "sum" + name;
    setData({ ...data, [prev]: 0, [curr]: 0, [sum]: 0 });
  }
  return {
    data,
    onInputChange,
    getSum,
    clear,
  };
}
