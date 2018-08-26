<template>
  <div class="recommend">
    <div class="recommend-title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-warpper">
          <img class="item-img" :src="item.imgUrl" alt="" srcset="">
        </div>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'HomeWeekend',
    data() {
      return {
        recommendList:[{
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1606/85/c6b6bad1b977e.jpg_r_640x214_5c638941.jpg',
          title: '景点门票',
          desc: '测试'
        },{
          id: '002',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1606/85/c6b6bad1b977e.jpg_r_640x214_5c638941.jpg',
          desc: '景点门票',
          title: '景点门票'
        },{
          id: '003',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1606/85/c6b6bad1b977e.jpg_r_640x214_5c638941.jpg',
          desc: '景点门票',
          title: '景点门票'
        },{
          id: '004',
          imgUrl: 'http://img1.qunarzz.com/sight/source/1606/85/c6b6bad1b977e.jpg_r_640x214_5c638941.jpg',
          desc: '景点门票',
          title: '景点门票'
        }]
      }
    }
  }
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl';
  @import '~styles/mixins.styl';
  .recommend
    .recommend-title
      line-height .8rem
      margin-top .2rem
      background #cccccc
      text-indent .2rem
    .item
        .item-img-warpper
          padding-bottom 33.9%
          height 0
          overflow hidden
          .item-img
            width 100%
        .item-info
          padding .1rem
          .item-title
            line-height .54rem
            font-size .32rem
            ellipsis()
          .item-desc
            line-height .4rem
            color #cccccc
            ellipsis()
</style>
