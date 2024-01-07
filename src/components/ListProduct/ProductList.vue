<script setup lang="ts">
import ProductItem from "@/components/ListProduct/ProductItem.vue";

// interface Product {
//   image: string;
//   title: string;
//   price: string;
//   description: string;
//   colors: number;
// }

defineProps(["products"]);
</script>
<template>
  <div class="row flex-wrap">
    <ProductItem
      v-for="(product, index) in products"
      :key="product.title"
      :product="product"
      :class="{ 'd-md-none': index === 3 }"
      class="col-lg-4 col-md-6 col-sm-6 col-12"
    />
  </div>
</template>

