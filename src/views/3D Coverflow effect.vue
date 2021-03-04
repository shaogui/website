<template>
  <div>
    <div class="swiper-container">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide v-for="pic in $store.state.config.Pic" :key="pic.id">
          <img :src="pic" height="800">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'swiper-example-3d-coverflow',
  title: '3D Coverflow effect',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        },
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper {
  height: 100%;
  width: 100%;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 800px;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  background-color: #2C8DFB;
  background-position: center;
  background-size: cover;
  color: white;

}
</style>