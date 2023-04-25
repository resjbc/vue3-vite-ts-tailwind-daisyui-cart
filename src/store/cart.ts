import { defineStore } from 'pinia'
import { CART_STORAGE } from '@/composables/usePersistCart'
import { useProductStore } from './products'

export interface Purchase {
    productId: number
    quantity: number
}

export interface CartState {
    contents: Record<string, Purchase>
}

export interface CartPreview {
    id: number
    image: string
    title: string
    quantity: number
    cost: number
}

export const useCartStore = defineStore({ id: 'cart',

    state: (): CartState => ({
        contents: JSON.parse(localStorage.getItem(CART_STORAGE) as string) ?? {}
    }),

    getters: {

        // Count Item in Cart
        count(): number {
            return Object.keys(this.contents).reduce((acc, id) => {
                return acc + this.contents[id].quantity
            }, 0)
        }

        // Total Price
        

        // Format Cart

    },

    actions: {

        // Add to Cart

        
        // Remove from Cart

    }

})