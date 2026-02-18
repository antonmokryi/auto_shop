import axios from "axios";

const URL = "https://api.novaposhta.ua/v2.0/json/"
const KEY = "50b5c48d1db7137f99a6dded54a60ae804005fe7";

const api = axios.create({
    baseURL: URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export const getCities = async (search) => {
    const { data } = await api.post("", {
        apiKey: KEY,
        modelName: "Address",
        calledMethod: "getCities",
        methodProperties: {
            FindByString: search,
        },
    });

    return data.data;
};

export const getWarehouses = async (cityRef) => {
    const { data } = await api.post("", {
        apiKey: KEY,
        modelName: "Address",
        calledMethod: "getWarehouses",
        methodProperties: {
            CityRef: cityRef,
        },
    });

    return data.data;
};