<template>
  <div class="p-4">
    <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <ProductCardSkeleton v-show="!productStore.Loaded" v-for="n in 15" :key="n" />
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>
<script setup lang="ts">
import ProductCardSkeleton from "../components/ProductCardSkeleton.vue";
import ProductCard from "../components/ProductCard.vue";

// Mockup
// import  products from '../mockupdata/product.json'

import { useProductStore } from "../store/products";
import { computed } from "vue";

const productStore = useProductStore();
const products = computed(
  () => productStore.List
)


</script>
