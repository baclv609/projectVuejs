<script setup lang="ts">
import ProductItem from "@/components/ListProduct/ProductItem.vue";

// interface Product {
//     image: string;
//     title: string;
//     price: string;
//     description: string;
//     colors: number;
//   }

const props = defineProps(["products"]);
</script>
<template>
  <div>
    <ProductItem
      v-for="product in products"
      :key="product.title"
      :product="product"
    />
  </div>
</template>