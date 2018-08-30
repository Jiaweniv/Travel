<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1703/57/5794796148ac680da3.img.png_600x330_6e1cc583.png" alt="" srcset="">
            <div class="banner-info">
                <div class="banner-title">乐华城•乐华欢乐世界</div>
                <div class="banner-number">
                                    <span class="iconfont banner-icon">&#xe692;</span>
                    39</div>
            </div>
        </div>
        <common-gallary 
            :imgs="imgs" 
            v-show="showGallary"
            @close = "handleGallaryClose"
        >
        </common-gallary>
    </div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
    export default{
        name: 'DetailBanner',
        components: {
            CommonGallary
        },
        data(){
            return{
                showGallary:false,
                imgs:['//img1.qunarzz.com/sight/p0/1805/78/789e31213399290fa3.water.jpg_600x330_a807626a.jpg','//img1.qunarzz.com/sight/p0/1805/78/789e31213399290fa3.water.jpg_600x330_a807626a.jpg','//img1.qunarzz.com/sight/p0/1805/78/789e31213399290fa3.water.jpg_600x330_a807626a.jpg','//img1.qunarzz.com/sight/p0/1805/78/789e31213399290fa3.water.jpg_600x330_a807626a.jpg']
            }
        },
        methods:{
            handleBannerClick(){
                this.showGallary = true;
            },
            handleGallaryClose(){
                this.showGallary = false;
            }
        }
    }
</script>
<style lang="stylus" scoped>
.banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
        width 100%
    .banner-info
        display flex
        position absolute
        left 0
        right 0
        bottom 0
        line-height .6rem
        color #ffffff
        background-image linear-gradient(top,rgba(0,0,0, 0), rgba(0,0,0, 0.8))
        .banner-title
            font-size .32rem
            padding 0 .2rem
            flex 1
        .banner-number
            padding 0 .4rem
            margin-top .14rem
            height .32rem
            font-size .24rem
            line-height .32rem
            border-radius .2rem
            background rgba(0,0,0, .8)
            .banner-icon
                font-size .24rem

</style>

