<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" :src="bannerImg" >
            <div class="banner-info">
                <div class="banner-title">{{ this.sightName }}</div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe692;</span>
                    {{ this.bannerImgLength }}
                </div>
            </div>
        </div>
        <common-fade>
            <common-gallary 
                :imgs="bannerImgs" 
                v-show="showGallary"
                @close = "handleGallaryClose"
            >
            </common-gallary>
        </common-fade>
    </div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
import CommonFade from 'common/fade/Fade'
    export default{
        name: 'DetailBanner',
        props: {
            sightName: String,
            bannerImg: String,
            bannerImgs: Array
        },
        components: {
            CommonGallary,
            CommonFade
        },
        computed: {
            bannerImgLength() {
                return this.bannerImgs.length
            }
        },
        data(){
            return{
                showGallary:false
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

