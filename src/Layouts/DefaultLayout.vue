<template >
  <div>
    <div class="header">
      <Navbar />
    </div>
    <div class="content">
      <LayoutHome />
    </div>
    <div class="footer">
      <Footerr />
      <!-- <ParentComponent/> -->
    </div>
  </div>
</template>
<script setup lang="ts">

import Navbar from "../components/Header/Header.vue";
import LayoutHome from "../components/Home/LayoutHome.vue";
import Footerr from "../components/footer/footer.vue";

import ParentComponent from "../components/demoProps/ParentComponent.vue"
</script>
<style scoped lang="css">
.header {
  margin: auto;
}
/* .footer{
    position: fixed;
    bottom: 0;
} */
</style>