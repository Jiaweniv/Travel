<template>
  <div class="recommend">
    <div class="recommend-title">热销推荐</div>
    <ul>
      <router-link 
        tag="li" 
        :to="'/detail/'+ item.id" 
        class="item border-bottom" 
        v-for="item of list" 
        :key="item.id"
      >
        <img class="item-img" :src="item.imgUrl" alt="" srcset="">
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'HomeRecommend',
    props: {
      list: Array
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
        height 1.9rem
        overflow hidden
        display flex
        .item-img
          width 1.7rem
          height 1.7rem
          padding .1rem
        .item-info
          padding .1rem
          flex 1
          min-width 0
          .item-title
            line-height .54rem
            font-size .32rem
            ellipsis()
          .item-desc
            line-height .4rem
            color #cccccc
            ellipsis()
          .item-button
            margin-top .16rem
            line-height .44rem
            color #ffffff
            padding 0 .2rem
            border-radius .06rem
            background #ff9300
</style>
