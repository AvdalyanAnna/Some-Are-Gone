<template>
  <section class="info">
    <div class="wrapper">
      <div class="info__inner">

        <p class="description">
          Если вы держите в руках данную бутылку, знайте — у вас очень хорошие друзья!
          <br>
          Иначе, как объяснить попадание на ваш стол нашего напитка?</p>
        <p class="description">
          Данный сайт мы разработали для ознакомительных целей. Здесь вы найдёте всю информацию о
          составе и технологии производства.
          <br>
          А в превосходном качестве нашего продукта вы сможете убедиться после дегустации.</p>
        <p class="description"> Напоминаем, что чрезмерное употребление алкоголя вредит вашему здоровью.
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
    .description{
      margin-bottom: 10px;
      &:nth-last-child(1){
        margin-bottom: 0;
      }
    }
  }
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
