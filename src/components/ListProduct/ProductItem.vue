<!-- ProductItem.vue -->
<template>
    <div class="item">
      <div class="item-img d-flex justify-content-center align-items-center">
        <img :src="product.img" :alt="product.title" />
      </div>
      <div class="item-content">
        <div class="d-flex flex-column justify-content-center align-items-flex-start">
          <div class="d-flex justify-content-between">
            <h6>{{ product.title }}</h6>
            <h6>{{ product.price }}</h6>
          </div>
          <div class="lh-lg product-description">{{ product.description }}</div>
          <div class="product-price">{{ product.colors }} colors available</div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from "vue";
  
  const props = defineProps(["product"]);
  </script>
  