<template>
  <div class="products">
    <router-link
      v-for="item in products" :key="item.id"
      :to="{ name: 'alias', params: {alias:item.alias }}"
      class="product" :id="item.alias" ref="product">
      <div class="product-img">
        <img :src="item.img" :alt="item.title">
      </div>
      <div class="product-title">{{ item.title }}</div>
      <div class="product-more">Подробнее</div>
    </router-link>
    <div class="product product-info">
      <div class="product-img">
        <img src="@/assets/images/product-info.png" alt="product-info">
      </div>
<!--      <div class="title">Same Are Gone</div>-->
      <h2 class="title">Не меньше,чем совершенство</h2>
      <p class="description">
        Напиток приготовлен из 100% натурального сырья путём сбраживание зерновых или плодовых культур с дальнейшей
        дистилляцией и ректификацией на Непрерывной Бражной Колонне по авторской технологии с сохранением
        качественной арганолептики и вкуса. Не предназначено для продажи
      </p>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: "Products",
  computed: {
    ...mapGetters({
      products: "getProducts"
    })
  },
  mounted() {
    console.log(this.$refs.product)
  }
}
</script>

<style lang="scss" scoped>

.products {
  margin: 230px 0 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
}

.product {
  padding: 45px 45px 32px;
  max-width: 464px;
  width: 100%;
  border: 1px solid #D4C9BF;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    width: calc(100% - 20px);
    height: calc(100% - 20px);
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #D4C9BF;
    opacity: 0;
    @include transition();
  }

  &-img {
    margin-bottom: 40px;
    img{
      width: 100%;
    }
  }

  &-title {
    font: 400 24px/36px "Tenor Sans";
    text-align: center;
    color: #000000;
    margin-bottom: 10px;
  }

  &-more {
    font: 600 14px/22px "Source Sans Pro";
    text-align: center;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: #ACACAC;
    @include transition();
  }

  &:nth-child(even) {
    margin-top: 175px;
  }

  &:nth-child(odd) {
    margin-top: -150px;
  }

  &.product-info {
    border-color: transparent;
    margin-top: -210px;
    padding: 45px 0 32px;

    &:before {
      content: unset;
    }

    .product-img {
      margin-bottom: 25px;
    }

    .description {
      margin-top: 25px;
    }
  }

  &:hover {
    &:before {
      opacity: 1;
    }

    .product-more {
      color: #FF2B2B;
    }
  }
}

@media screen and (max-width: 1000px) {
  .products {
    margin: 150px 0 0;
  }
  .product{
    max-width: 47%;
    padding: 35px 35px 16px;
    margin-bottom: 32px;

    &-img{
      width: 115px;
      margin-bottom: 35px;
    }

    &-title {
      font-size: 20px;
      line-height: 24px;
    }
    &:nth-child(even) {
      margin-top: 50px;
    }

    &:nth-child(odd) {
      margin-top: -75px;
    }
  }
}

@media screen and (max-width: 550px) {
  .products {
    margin: 30px 0 0;
    justify-content: center;
  }
  .product{
    max-width: 90%;
    padding: 35px 35px 16px;
    margin-bottom: 32px;

    &-img{
      width: 50%;
      margin-bottom: 35px;
    }

    &-title {
      font-size: 18px;
      line-height: 28px;
    }

    &:nth-child(even) {
      margin-top: 0;
    }

    &:nth-child(odd) {
      margin-top: 0;
    }

    &.product-info{
      max-width: 95%;
      margin: 0;
      padding: 0;
      .product-img{
        max-width: 126px;
        margin-bottom: 10px;
      }
      .title{
        font-size: 32px;
        line-height: 40px;
      }
      .description{
        margin-top: 20px;
      }
    }
  }

}

</style>
