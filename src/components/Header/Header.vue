<template>
  <div class="background">
    <div class="">
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-logo" href="#">
          <img
            src="../../assets/Central Music Logo.svg"
            alt=""
            width="255"
            height="40"
          />
        </a>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <!-- <li>
              <a class="navbar-brand" href="#">
                <img
                  src="../../assets/Central Music Logo.svg"
                  alt=""
                  width="255"
                  height="40"
                />
              </a>
            </li> -->
            <li class="nav-item">
              <a class="nav-link text-white" href="#">Guitars</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">Accessories</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">Storage</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">Lessons</a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">Repairs</a>
            </li>
          </ul>
        </div>
        <div class="icon">
          <span class="material-symbols-outlined text-white">
            shopping_cart
          </span>
          <span class="material-symbols-outlined text-white"> person </span>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="material-symbols-outlined text-white"> menu </span>
        </button>
      </nav>
    </div>
    <div class="">
      <div
        class="content d-flex flex-column justify-content-center d-flex justify-content-start"
      >
        <p>Fullfilling dreams with strings attached</p>
      </div>
    </div>

    <div class="d-flex justify-content-center justify-content-center">
      <CallOut />
    </div>
  </div>
</template>
  
  <script setup lang="ts">
import CallOut from "./Call-out.vue";
</script>
  
  <style scoped lang="css">
.navbar {
  height: 46px;
  padding-top: 56px;
  padding-left: 88px;
  padding-right: 100px;
  /* display: flex;
  justify-content: space-between; */
}

.navbar-brand img {
  width: 255px;
  height: 40px;
}

.navbar-nav {
  gap: 24px;
}
.background {
  height: 808px;
  width: 1440px;
  background-image: url(../../assets/img/backgroud.png);
  background-size: cover;
  background-position: center;
}

.content {
  /* margin: 0;
  padding: 0; */
  width: 570px;
  height: 557px;
  padding-left: 88px;
}

.content p {
  color: #fff;
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: 120%; /* 67.2px */
  letter-spacing: 1.12px;
}
.navbar-logo {
  display: block;
}
@media (max-width: 991.98px) {
  /* .navbar-nav {
    display: none;
  } */

  .navbar-logo {
    display: block;
  }

  /* .navbar-collapse {
    flex-basis: 100%;
  } */

  .icon {
    display: none;
  }
}
</style>