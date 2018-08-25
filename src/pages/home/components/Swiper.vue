<template>
<div class="wrapper">
  <swiper :options="swiperOption" >
    <swiper-slide v-for="item in swiperList" :key="item.id">
      <img class="swiper-img" :src="item.url" >
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
  export default {
    name: 'HomeSwiper',
    data() {
      return {
        swiperOption: {
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          }
        },
        swiperList:[{
          id:'001',
          url:'https://source.qunarzz.com/site/images/wap/home/recommend/iphoneplus/dujia_shuqi_banner_20180710.jpg'
        },{
          id:'002',
          url:'https://source.qunarzz.com/site/images/wap/home/recommend/iphoneplus/anquan_20180716.png'
        },{
          id:'003',
          url:'https://source.qunarzz.com/site/images/wap/home/recommend/iphoneplus/anquan_20180716.png'
        },{
          id:'004',
          url:'https://source.qunarzz.com/site/images/wap/home/recommend/iphoneplus/anquan_20180716.png'
        }]
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
  padding-bottom 24.53%
  background #cccccc
  .swiper-img
    width 100%
</style>
