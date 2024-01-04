<template >
  <div class="call-out-img">
    <div class="call-out">
      <h3 class="title fs-3 text-center text-white">FREE GUITAR LESSONS!</h3>
      <p class="text-center text-white fs-6 call-out">
        Purchase any guitar over $499.99 and recieve a one-hour guitar lesson
        free.
      </p>
    </div>
    <a href="#" class="btn">LEARN MORE</a>
  </div>
</template>
    <script setup lang="ts">
</script>
    <style scoped lang="css">
.call-out {
  width: 616px;
  height: 72px;
}
.call-out-img {
  border-radius: 10px;
  background: #ab0433;
  display: flex;
  width: 1264px;
  height: 280px;
  padding: 32px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  position: absolute;
}
.btn {
  padding: 8px 16px;
  text-align: center;
  border-radius: 32px;
  background: #ff753a;
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
}
@media (max-width: 575.98px) {
  .call-out-img {
    padding: 16px;
  }
}
</style>