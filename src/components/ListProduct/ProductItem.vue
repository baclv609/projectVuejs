<template>
  <div class="item">
    <div class="item-img d-flex justify-content-center align-items-center">
      <img :src="product.img" :alt="product.title" />
    </div>
    <div class="item-content">
      <div
        class="d-flex flex-column justify-content-center align-items-flex-start"
      >
        <div class="d-flex justify-content-between">
          <h6>{{ product.title }}</h6>
          <h6>{{ product.price }}</h6>
        </div>
        <div class="lh-lg product-description">
          {{ product.description }}
        </div>
        <div class="product-price">{{ product.colors }} colors available</div>
      </div>
    </div>
  </div>
</template>
  
  <script setup lang="ts">
import { defineProps } from "vue";
defineProps(["product"]);
</script>
<style scoped lang="css">
.item-img {
  border-radius: 10px 10px 0px 0px;
  background: radial-gradient(
    138.81% 138.29% at 1.22% 1.08%,
    #fbfbfb 0%,
    #d3d3d3 100%
  );
}
.item-img img {
  width: 314px;
  /* height: 260px; */
}
.item {
  box-shadow: 0px 12px 32px 0px rgba(0, 0, 0, 0.05),
    0px 2px 4px 0px rgba(28, 5, 77, 0.1);
  /* height: 417px; */
  /* width: 400px; */
}
.item-content {
  border-radius: 0px 0px 10px 10px;
  background: #fff;
  padding-top: 16px;
  padding-left: 24px;
  padding-right: 24px;
  padding-bottom: 24px;
}
.product-description {
  color: #767676;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20.8px;
}
.product-price {
  display: flex;
  padding: 2px 6px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  border: 1px solid #eaeaea;
}
@media (min-width: 992px) {
  .col-lg-4 {
    max-width: 33.33%;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .col-md-6 {
    max-width: 50%;
  }
  .d-md-none {
    display: block !important;
  }
  .col-lg-4,
  .col-md-6,
  .col-sm-6,
  .col-12 {
    margin-top: 10px;
    margin-bottom: 10px;
  }
}

@media (max-width: 767px) {
  .col-sm-6 {
    max-width: 100%;
  }

  .d-md-none {
    display: block !important;
  }

  .item-img img {
    /* width: 100%;
    height: auto; */
  }

  .col-lg-4,
  .col-md-6,
  .col-sm-6,
  .col-12 {
    margin-top: 10px;
    margin-bottom: 10px;
  }
}
</style>