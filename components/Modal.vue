<template>
  <transition name="modal">
    <div class="modal__wrapper" @click="close">
      <div class="modal-content" @click.stop="">

        <!-- header -->
        <div class="modal-header">
          <span class="modal-title"> {{ title }} </span>
          <span class="button-close" @click="close">×</span>
        </div>

        <!-- body -->
        <div class="modal-body">
          <video ref="video" autoplay controls id="myVideo">
            <source src="@/assets/images/VID-20210922-WA0015.mp4" type="video/mp4">
          </video>
        </div>

      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  mounted() {
    document.body.addEventListener('keyup', e => {
      if (e.keyCode === 27) this.close()
    })
  },
  computed: {},
  methods: {
    close() {
      this.$refs.video.pause();
      this.$emit('close');
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  &-leave-active,
  &-enter {
    opacity: 0;
  }

  &-enter .modal-content,
  &-leave-active .modal-content {
    transform: scale(1.2);
  }
}

.modal__wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  transition: opacity .2s ease;
  right: 0;
  z-index: 998;
  background-color: rgba(00, 00, 00, .48);
}

.modal-content {
  position: relative;
  max-width: 1100px;
  width: 100%;
  padding: 20px 18px;
  background-image: url('@/assets/images/info_bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transition: all .2s ease;
  border-radius: 8px;
  z-index: 999;
  overflow: hidden;
  @media screen and (max-width: 1200px) {
    max-width: 90%;
  }
  @media screen and (max-width: 450px) {
    max-width: 85%;
  }
}

.modal-header {
  display: flex;
  align-self: center;
  justify-content: space-between;
  padding-bottom: 20px;

  span {
    font-size: 24px;
  }

  .button-close {
    cursor: pointer;
  }
}

.modal-body {
  text-align: center;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}


</style>
