<template>
  <transition name="home">
    <div class="single-product">
      <header class="header">
        <div class="wrapper">
          <div class="header__inner">
            <div class="header-title">
              Продукция
            </div>
            <button @click="$router.back()" class="header-close"></button>
          </div>
        </div>
      </header>

      <main>
        <div class="wrapper">
          <h1 class="single-product__title">{{ product.title }}</h1>
          <div class="single-product__block">
            <div class="single-product__img">
              <img :src="product.gallery" :alt="product.title">
            </div>
            <div class="single-product__info">
              <div class="description">{{ product.description }}</div>

              <ul>
                <li>
                  <span>Цвет</span>
                  <span>{{ product.color }}</span>
                </li>
                <li class="pb-40">
                  <span>Вкус</span>
                  <span>{{ product.taste }}</span>
                </li>
                <li>
                  <span>ABV</span>
                  <span>{{ product.ABV }}%</span>
                </li>
                <li>
                  <span>CL</span>
                  <span>{{ product.CL }}</span>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </main>

    </div>
  </transition>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  transition: 'home',
  head() {
    return {
      title: this.product.title,
      meta: [
        {hid: 'description', name: 'description', content: this.product.description}
      ]
    };
  },
  computed: {
    ...mapGetters([
      'getProduct'
    ]),
    product() {
      return this.getProduct(this.$route.params.alias)
    }
  }
}

</script>

<style lang="scss" scoped>

.header {
  &-title {
    font: 600 14px/22px "Source Sans Pro";
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: rgba(28, 22, 19, 0.25);
  }

  &-close {
    position: relative;
    width: 28px;
    height: 28px;
    cursor: pointer;
    border: unset;
    background-color: transparent;

    &:after,
    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 3px;
      top: 7px;
      left: 0;
      background-color: #1C1613;
    }

    &:after {
      transform: rotate(-45deg);
    }

    &:before {
      transform: rotate(45deg);
    }
    &:focus,
    &:hover{
      background-color: transparent;
    }
  }

  &__inner {
    display: flex;
    justify-content: space-between;
    padding: 40px 0 40px 5px;
  }
}

.single-product {
  min-height: 100vh;

  &__title {
    font: 400 60px/64px "Tenor Sans";
    color: #1C1613;
  }

  main {
    margin: 85px 0;
  }

  &__block {
    display: flex;
    align-items: stretch;
    width: 100%;
    min-height: 600px;
    margin: 30px 0;
  }

  &__img {
    width: 37%;
    position: relative;

    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__info {
    background-image: url('@/assets/images/single-product__info-bg.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 63%;
    padding: 40px 42px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .description {
      font: 400 20px/28px "Source Sans Pro";
      text-align: left;
      color: #FCFAEF;
    }

    ul {
      li {
        display: flex;
        border-bottom: 1px solid rgba(234, 231, 215, 0.42);
        color: #FCFAEF;
        padding: 15px 0;

        &.pb-40 {
          padding-bottom: 40px;
        }

        span {
          width: 58%;
          font: 400 14px/22px "Source Sans Pro";
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #FCFAEF;

          &:nth-child(1) {
            width: 42%;
            font-weight: 600;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .header {
    &-close {
      position: relative;
      width: 20px;
      height: 20px;
      cursor: pointer;
    }

    &__inner {
      display: flex;
      justify-content: space-between;
      padding: 20px 5px 10px 5px;
    }
  }

  .single-product {
    .wrapper {
      padding: 0 25px;
    }

    &__title {
      font: 400 48px/48px "Tenor Sans";
    }

    main {
      margin: 0;

      .wrapper {
        padding: 0;
      }

      .single-product__title {
        padding: 0 25px;
      }
    }

    &__block {
      display: flex;
      align-items: stretch;
      width: 100%;
      min-height: 600px;
      margin: 30px 0 0;
      position: relative;
    }

    &__img {
      width: 85%;
      //max-height: 444px;
      max-height: 650px;
      height: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);

      img {
        object-fit: contain;
      }
    }

    &__info {
      width: 100%;
      margin-top: 420px;
      padding: 255px 27px 30px;

      .description {
        font: 400 16px/24px "Source Sans Pro";
      }

      ul {
        margin-top: 25px;

        li {
          &.pb-40 {
            padding-bottom: 15px;
          }

          span {
            width: 73%;

            &:nth-child(1) {
              width: 27%;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 550px) {
  .single-product {
    &__img {
      max-height: 444px;
      img{
        object-fit: cover;
      }
    }

    &__info {
      margin-top: 220px;
    }
  }
}
</style>
