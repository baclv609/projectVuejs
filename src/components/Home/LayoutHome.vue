<template>
  <div class="PopularCards">
    <div class="layout-title">
      <h1 class="p-5">New Products</h1>
    </div>
    <!-- <Product1 /> -->
    <ParentComponent/>

  </div>
  <div class="PopularCards2">
    <div class="layout-title">
      <h1 class="text-center p-5">Popular Finds</h1>
    </div>
    <ParentComponent/>

    <!-- <Product1 /> -->
    <!-- <Product2 /> -->
  </div>

  <div class="PopularCards d-flex flex-column Cards-flexBox">
    <div class="layout-title Gear-heads1">
      <h1>Gear Heads</h1>
    </div>

    <div class="PopularCards3 row">
      <div class="col-lg-6 col-md-6 col-sm-6 col-12">
        <Product3 />
      </div>
      <div class="col-lg-6 col-md-6 col-sm-6 col-12">
        <Product4 />
      </div>
    </div>

    <div class="layout-title Gear-heads2">
      <h1>Gear Heads</h1>
    </div>

    <div class="">
      <div class="row flex-wrap PopularCards3">
        <div class="col-lg-4 col-md-6 col-sm-6 col-12">
          <Product3 />
        </div>
        <div class="col-lg-4 col-md-6 col-sm-6 col-12">
          <Product4 />
        </div>

        <div class="col-lg-4 col-md-6 col-sm-6 col-12 d-md-none">
          <Product3 />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

import ParentComponent from "@/components/demoProps/ParentComponent.vue"

import Product1 from "@/components/Home/Product1.vue";
// import Product2 from "./Product2.vue";
import Product3 from "./Product3.vue";
import Product4 from "./Product4.vue";
</script>
<style scoped lang="css">
.PopularCards {
  padding: 88px;
  gap: 48px;
}
.PopularCards2 {
  padding: 88px;
  background: #ccc;
}
.d-md-none {
  display: block !important;
}
.layout-title {
  display: flex;
  padding: 0px 2.993px 0px 2.007px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
}
.layout-title h1 {
  color: #505050;
  text-align: center;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
}
.Gear-heads1 {
  display: none;
}
.Gear-heads2 {
  display: block;
}
.Cards-flexBox {
  gap: 48px;
}
@media (min-width: 992px) {
  .d-md-none {
    display: block;
  }
}

@media (min-width: 768px) and (max-width: 991px) {
  .d-md-none {
    display: none !important;
  }
  .Gear-heads1 {
    display: block;
  }
  .Gear-heads2 {
    display: none;
  }
}

@media (max-width: 767px) {
  .d-md-none {
    display: none !important;
  }
  .Gear-heads1 {
    display: block;
  }
  .Gear-heads2 {
    display: none;
  }
  .Cards-flexBox {
    gap: 48px;
  }
  .PopularCards {
    gap: 24px;
  }
  .PopularCards3 {
    /* gap: 24px;   */
    margin: 0;
  }
}
@media (max-width: 576px) {
  .PopularCards3 {
    gap: 24px;
    /* margin: 0; */
  }
}
</style>