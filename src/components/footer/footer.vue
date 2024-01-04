<template>
  <div class="contact-Us">
    <div class="footer-Us">
      <div class="Us-cart d-flex">
        <div
          class="My-cart d-flex flex-column d-flex justify-content-start text-white"
        >
          <h4>My Account</h4>
          <p>Overview</p>
          <p>Order History</p>
          <p>Wishlist</p>
          <p>Account information</p>
        </div>
        <div
          class="footer-Store d-flex flex-column d-flex justify-content-start text-white"
        >
          <h4>Store</h4>
          <p>Security Notice</p>
          <p>Location & Hours</p>
          <p>Rentals</p>
          <p>Privacy Notice</p>
        </div>
      </div>

      <div class="footer-logo d-flex justify-content-center align-items-center">
        <img src="../../assets/Central Music Logo.svg" alt="" />
      </div>
    </div>
  </div>
  <div class="MusicStore"><p class="container">©2021 Music Store</p></div>
</template>
  <script setup lang="ts">
</script>
  <style scoped lang="css">
.contact-Us {
  background: #505050;
  /* width: 100%; */
  height: 300px;
}
.Us-cart {
  gap: 48px;
}
.footer-Store p,
.My-cart p {
  color: #fff;
  font-size: 14px;
  /* font-style: normal; */
  font-weight: 400;
  line-height: 130%;
}
.MusicStore {
  width: 100%;
  background: #252525;
}
.MusicStore p {
  height: 35px;
  line-height: 35px;
  color: #fff;
}
.footer-Store {
  display: block !important;
}
.footer-Us {
  /* margin: 0;cc */
  padding-top: 56px;
  padding-left: 88px;
  padding-right: 100px;
  display: flex;
  justify-content: space-between;
}
.MusicStore{
  /* padding-left: 88px; */

}
@media (min-width: 768px) and (max-width: 991px) {
  /* .container {
    width: 100%;
    margin: 0;
  } */
  .MusicStore p {
    text-align: center;
  }
}
@media (max-width: 767px) {
  .My-cart {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 9px;
    margin: 0;
  }
  .My-cart p {
    margin: 0;
  }
  .Us-cart {
    flex-direction: column;
    gap: 9px;
    margin: 0;
  }

  .footer-Us {
    display: flex;
    flex-direction: column;
  }
  .footer-Store {
    display: none !important;
  }
  .footer-logo {
    margin-top: 32px;
  }
  .MusicStore p {
    text-align: center;
  }
}
</style>