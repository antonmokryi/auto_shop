import {create} from "zustand";
import {devtools} from "zustand/middleware";

export const useProductStore = create(devtools(
    (set, get) => ({
        products: [],
        isLoading: true,
        productGroup: null,
        sortType: "",
        minPrice: "",
        maxPrice: "",
        setProducts: (products) => set({products: products}),
        setIsLoading: (active) => set({isLoading: active}),
        setProductGroup: (state) => set({productGroup: state}),
        setSortType: (state) => set({sortType: state}),
        setMinPrice: (state) => set({minPrice: state}),
        setMaxPrice: (state) => set({maxPrice: state}),
    })
))