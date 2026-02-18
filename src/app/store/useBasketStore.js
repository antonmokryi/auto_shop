import {create} from "zustand";
import {devtools, persist, createJSONStorage} from "zustand/middleware";
import createPrice from "../../data/info.js";

export const useBasketStore = create(devtools(
    persist(
        (set, get) => ({
            basketStore: [],
            isActive: false,

            addItem: (product) =>
                set(state => {
                    const existProduct = state.basketStore.find(item => item.itemUUID === product.itemUUID);
                    if (existProduct) {
                        return {
                            basketStore: state.basketStore.map(item => (
                                item.itemUUID === product.itemUUID
                                    ? {...item, quantity: item.quantity + 1}
                                    : item
                            )),
                        }
                    } else {
                        return {
                            basketStore: [
                                ...state.basketStore, {...product, quantity: 1}
                            ]
                        }
                    }
                }),

            removeItem: (id) =>
                set(product => ({
                    basketStore: product.basketStore.filter(item => item.itemUUID !== id),
                })),

            totalPrice: () => {
                return get().basketStore.reduce((sum, item) => sum + (createPrice(item.itemPrice) * item.quantity), 0)
            },

            increaseQuantity: (id) =>
                set(state => ({
                    basketStore: state.basketStore.map(item => (
                        item.itemUUID === id
                            ? {...item, quantity: item.quantity + 1}
                            : item
                    ))
                })),

            decreaseQuantity: (id) =>
                set(state => ({
                    basketStore: state.basketStore.map(item => (
                        item.itemUUID === id
                            ? {...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1}
                            : item
                    ))
                })),

            clearBasket: () => set({basketStore: []}),

            toggleBasket: ()=> set(state => ({isActive: !state.isActive})),
        }), {
            name: "basket-storage",
            storage: createJSONStorage(() => sessionStorage)
        })))
