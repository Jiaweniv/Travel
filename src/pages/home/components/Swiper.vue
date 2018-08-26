<template>
<div class="wrapper">
  <swiper :options="swiperOption" v-if="showSwiper">
    <swiper-slide v-for="item in list" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl" >
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
  export default {
    name: 'HomeSwiper',
    props: {
      list: Array
    },
    data() {
      return {
        swiperOption: {
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        },
      }
    },
    computed: {
      showSwiper() {
        return this.list.length
      }
    }
  }
</script>
<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active
  background #ffffff!important 
.wrapper
  width 100%
  overflow hidden
  height 0
  padding-bottom 31.25%
  background #cccccc
  .swiper-img
    width 100%
</style>
