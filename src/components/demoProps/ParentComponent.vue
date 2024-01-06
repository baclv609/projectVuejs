<!-- ParentComponent.vue -->
<template>
  <div>
    <product-list :products="parentProducts" />
  </div>
</template>

<script setup lang="ts">
import * as ProductList from "../ListProduct/ProductList.vue";

const parentProducts = [
  {
    img: "https://inkythuatso.com/uploads/thumbnails/800/2023/03/1-hinh-anh-ngay-moi-hanh-phuc-sieu-cute-inkythuatso-09-13-35-50.jpg",
    title: "Product 1",
    price: "$2,995",
    description: "Product description 1",
    colors: 0,
  },
  {
    img: "https://inkythuatso.com/uploads/thumbnails/800/2023/03/1-hinh-anh-ngay-moi-hanh-phuc-sieu-cute-inkythuatso-09-13-35-50.jpg",
    title: "Product 2",
    price: "$1,495",
    description: "Product description 2",
    colors: 3,
  },
  // Thêm các sản phẩm khác nếu cần
];
</script>
