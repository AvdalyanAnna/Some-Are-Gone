<template>
  <div>
    <header class="header">
      <div class="wrapper">
        <div class="header__inner">
          <nuxt-link to="/" class="logo">
            <img src="@/assets/images/logo.svg" alt="">
          </nuxt-link>
        </div>
      </div>
    </header>

    <VideoBlock @click="openVideo = true"/>

    <InfoBlock/>

    <section class="product-block">
      <div class="wrapper">
        <div class="title">Продукция</div>
        <Products></Products>
      </div>
    </section>

    <footer class="footer">
      <div class="wrapper">
        <div class="footer__inner">
          <div class="copyright">SomeAreGone, 2021</div>
        </div>
      </div>
    </footer>

    <Modal v-show="openVideo" @close="openVideo=false"/>
  </div>
</template>

<script>
import VideoBlock from "../components/VideoBlock";
import InfoBlock from "../components/InfoBlock";
import Modal from "../components/Modal";
import Products from "../components/Products";

export default {
  data() {
    return {
      openVideo: false,
    }
  },
  components: {
    VideoBlock,
    InfoBlock,
    Modal,
    Products
  }
}

</script>

<style lang="scss" scoped>

.header {
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 9;
  padding: 30px 0;

  &__inner {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.product-block {
  background-image: url('@/assets/images/product-block_bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 75px 0 125px;
  box-sizing: border-box;
}

.footer {
  background-image: url('@/assets/images/product-block_bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  bottom: 0;
  border-top: 1px solid #D4C9BF;
  padding: 35px 0;

  &__inner {
    display: flex;
    align-items: center;
    justify-content: center;

    .copyright {
      font: 400 20px/32px "Source Sans Pro";
      color: rgba(28, 22, 19, 0.4);
    }
  }
}

@media screen and (max-width: 1000px) {
}

@media screen and (max-width: 550px) {
  .product-block {
    padding: 40px 0 20px;
  }
  .footer {
    border-top: unset;
  }

}

</style>
