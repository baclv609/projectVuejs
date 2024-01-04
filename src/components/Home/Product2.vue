<template>
  <div class="container PopularCards">
    <div class="row flex-wrap">
      <div class="col-lg-4 col-md-6 col-sm-6 col-12">
        <div>
          <div
            class="item-img d-flex justify-content-center align-items-center"
          >
            <img src="../../assets/card/Rectangle10.png" alt="" />
          </div>
          <div class="item-content">
            <div
              class="d-flex flex-column justify-content-center align-items-flex-start"
            >
              <div class="d-flex justify-content-between">
                <h6>Brand Name</h6>
                <h6>$2,995</h6>
              </div>
              <div class="product-description lh-lg">
                Product description here
              </div>
              <div class="product-price">0 colors available</div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 col-sm-6 col-12">
        <div>
          <div
            class="item-img d-flex justify-content-center align-items-center"
          >
            <img src="../../assets/card/Rectangle10.png" alt="" />
          </div>
          <div class="item-content">
            <div
              class="d-flex flex-column justify-content-center align-items-flex-start"
            >
              <div class="d-flex justify-content-between">
                <h6>Brand Name</h6>
                <h6>$2,995</h6>
              </div>
              <div class="product-description lh-lg">
                Product description here
              </div>
              <div class="product-price">0 colors available</div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-6 col-sm-6 col-12">
        <div>
          <div
            class="item-img d-flex justify-content-center align-items-center"
          >
            <img src="../../assets/card/Rectangle10.png" alt="" />
          </div>
          <div class="item-content">
            <div
              class="d-flex flex-column justify-content-center align-items-flex-start"
            >
              <div class="d-flex justify-content-between">
                <h6>Brand Name</h6>
                <h6>$2,995</h6>
              </div>
              <div class="product-description lh-lg">
                Product description here
              </div>
              <div class="product-price">0 colors available</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 
      <div class="col-lg-4 col-md-6 col-sm-6 col-12 d-md-none">
        <div>
          <div
            class="item-img d-flex justify-content-center align-items-center"
          >
            <img src="../../assets/card/Rectangle10.png" alt="" />
          </div>
          <div class="item-content">
            <div
              class="d-flex flex-column justify-content-center align-items-flex-start"
            >
              <div class="d-flex justify-content-between">
                <h6>Brand Name</h6>
                <h6>$2,995</h6>
              </div>
              <div class="product-description lh-lg">
                Product description here
              </div>
              <div class="product-price">0 colors available</div>
            </div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>
<script setup lang="ts">
interface Props {
  foo: string;
  bar?: number;
}

// const props = defineProps<Props>();
</script>
  <style scoped lang="css">
.item-img {
  border-radius: 10px 10px 0px 0px;
  background: #fff;
}
.item-content {
  border-radius: 0px 0px 10px 10px;
  padding: 16px 24px;
  background: #fff;
}
.product-description {
  color: #767676;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
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
@media (min-width: 768px) and (max-width: 991px) {
  .col-md-6 {
    /* flex-basis: 50%; */
    max-width: 50%;
  }
  .col-lg-4,
  .col-md-6,
  .col-sm-6,
  .col-12 {
    margin-top: 10px;
    margin-bottom: 10px;
  }
}

@media (min-width: 374px) and (max-width: 767px) {
  .col-sm-6 {
    max-width: 100%;
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
</style>