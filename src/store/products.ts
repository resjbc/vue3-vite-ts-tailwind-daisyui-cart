import { defineStore } from 'pinia'

const fakeStoreUrl = 'https://fakestoreapi.com'
import type { Product } from '../types/product_type'

interface ProductState {
    items: Record<string, Product>,
    ids: number[]
}


export const useProductStore = defineStore({ id: 'products',

    state:(): ProductState  => ({
        items: {},
        ids: []
    }),

    getters: {

        // List Products
        List(): Product[] {
            return this.ids.map((i) => this.items[i])
        },

        // Loaded Products
        Loaded(): boolean {
            return this.ids.length > 0
        }

    },

    actions: {

        // Fetch All Products
        async fetchAll() {
            if(this.Loaded) return

            const res = await fetch(`${fakeStoreUrl}/products`)
            const data: Product[] = await res.json()

            this.ids = data.map((product) => {
                this.items[product.id] = product
                return product.id
            })
        }
    }

})