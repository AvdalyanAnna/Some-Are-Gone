<template>
  <section class="info">
    <div class="wrapper">
      <div class="info__inner">
        <h2 class="title">Не меньше,чем совершенство</h2>
        <p class="description">
          Напиток приготовлен из 100% натурального сырья путём сбраживание зерновых или плодовых культур с дальнейшей
          дистилляцией и ректификацией на Непрерывной Бражной Колонне по авторской технологии с сохранением
          качественной арганолептики и вкуса. Не предназначено для продажи
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "InfoBlock"
}
</script>

<style lang="scss" scoped>
.info {
  padding: 130px 0;
  box-sizing: border-box;
  position: relative;

  &:after,
  &:before {
    content: '';
    position: absolute;
    width: 100px;
    height: 18px;
    background-image: url('@/assets/images/info_effect.svg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    left: 50%;
    transform: translateX(-50%);
  }

  &:before {
    top: 80px;
  }

  &:after {
    bottom: 80px;
    transform: translateX(-50%) rotate(180deg);
  }

  &__inner {
    .title {
      margin-bottom: 20px;
    }
  }
}

@media screen and (max-width: 1000px) {

}

@media screen and (max-width: 550px) {
  .info {
    padding: 100px 0;
    &:before {
      top: 55px;
    }

    &:after {
      bottom: 55px;
    }
    .description{
      width: 95%;
      margin: 0 auto;
    }
  }
}
</style>
