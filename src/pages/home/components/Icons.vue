<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page,index) of pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img :src="item.imgUrl" alt="" srcset="">
          </div>
          <p class="icon-desc">{{ item.desc }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
  export default {
    name: 'HomeIcons',
    data() {
      return {
        iconList:[{
          id: '001',
          imgUrl: 'https://pic.c-ctrip.com/VacationH5Pic/group_travel/index/zby_14.png',
          desc: '景点门票'
        },{
          id: '002',
          imgUrl: 'https://pic.c-ctrip.com/VacationH5Pic/group_travel/index/zby_14.png',
          desc: '景点门票'
        },{
          id: '003',
          imgUrl: 'https://pic.c-ctrip.com/VacationH5Pic/group_travel/index/zby_14.png',
          desc: '景点门票'
        },{
          id: '004',
          imgUrl: 'https://pic.c-ctrip.com/VacationH5Pic/group_travel/index/zby_14.png',
          desc: '景点门票'
        },{
          id: '005',
          imgUrl: 'https://pic.c-ctrip.com/VacationH5Pic/group_travel/index/zby_14.png',
          desc: '景点门票'
        },{
          id: '006',
          imgUrl: 'https://pic.c-ctrip.com/VacationH5Pic/group_travel/index/zby_14.png',
          desc: '景点门票'
        },{
          id: '007',
          imgUrl: 'https://pic.c-ctrip.com/VacationH5Pic/group_travel/index/zby_14.png',
          desc: '景点门票'
        },{
          id: '008',
          imgUrl: 'https://pic.c-ctrip.com/VacationH5Pic/group_travel/index/zby_14.png',
          desc: '景点门票'
        },{
          id: '009',
          imgUrl: 'https://pic.c-ctrip.com/VacationH5Pic/group_travel/index/zby_14.png',
          desc: '景点门票'
        }]
      }
    },
    computed: {
      pages(){
        const pages = [];
        this.iconList.forEach((item,index) => {
          const page = Math.floor(index/8)
          if(!pages[page]){
            pages[page] = [];
          }
          pages[page].push(item);
        })
        return pages
      }
    }
  }
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  @import '~styles/mixins.styl';
  .icons >>> .swiper-container
    height 0
    padding-bottom 50%
  .icons
    margin-top .1rem
    .icon
      width 25%
      float left 
      padding-bottom 25%
      height 0
      position relative
      overflow hidden
      .icon-img
        position absolute
        top 0
        left 0
        right 0
        bottom .44rem
        padding .1rem
        box-sizing border-box
        img
          height 100%
          display block
          margin 0 auto
    .icon-desc
      position absolute
      bottom 0
      left 0
      right 0
      height .44rem
      line-height .44rem
      color $darkTextColor
      text-align center 
      ellipsis()
</style>
