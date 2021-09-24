<template>
  <section class="section_one">
    <div class="wrapper">
      <div class="section_one-inner">
        <h1 class="title">Лаборатория современного самогоноварения</h1>
        <button @click="$emit('click')" class="btn btn-video">Смотреть видео</button>
      </div>
      <div class="section_one-video">
        <video autoplay muted  loop id="myVideo">
          <source src="@/assets/images/header.mp4" type="video/mp4">
        </video>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "VideoBlock"
}
</script>

<style lang="scss" scoped>
.section_one {
  position: relative;

  &-inner {
    display: flex;
    min-height: 720px;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .title {
      padding-bottom: 50px;
      font: 400 60px/64px 'Tenor Sans';
      text-align: center;
      color: #FCFAEF;
    }
  }

  &-video {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    min-height: 720px;
    height: 100%;

    &:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.5);
    }

    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
      //min-height: 720px;
    }
  }
}

@media screen and (max-width: 1000px) {
  .section_one-inner .title {
    font-size: 48px;
    line-height: 56px;
  }
}

@media screen and (max-width: 550px) {
  .section_one {
    &-inner {
      min-height: 480px;
      .title {
        font-size: 34px;
        line-height: 42px;
        padding-bottom: 30px;
      }
    }

    &-video {
      min-height: 480px;
    }
  }
}
</style>
