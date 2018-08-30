<template>
    <div>
        <router-link 
            to="/" 
            tag="div" 
            class="header-abs"
            v-show="showAbs"
        >
            <div class="iconfont header-abs-back">&#xe624;</div>
        </router-link>
        <div
            :style="opacityStyle"
            class="header-fixed" 
            v-show="!showAbs"
        >
            <router-link to="/">
                <div class="iconfont header-fixed-back">&#xe624;</div>
            </router-link>
            景点详情
        </div>
    </div>
</template>
<script>
    export default{
        name: 'DetailHeader',
        data () {
            return {
                showAbs: true,
                opacityStyle: {
                    opacity : 0
                }
            }
        },
        activated () {
            window.addEventListener('scroll', this.handleScroll)
        },
        methods: {
            handleScroll () {
                const top = document.documentElement.scrollTop;
                if(top > 60) {
                    let opacity = top / 140
                    opacity = opacity > 1 ? 1 : opacity
                    this.showAbs = false
                    this.opacityStyle = {
                        opacity
                    }
                }else{
                    this.showAbs = true
                }
            }
        }
    }
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl';
    .header-abs
        position absolute
        left .2rem
        top .2rem
        width .8rem
        height .8rem
        border-radius .4rem
        background rgba(0,0,0, .8)
        text-align center
        line-height .8rem
        .header-abs-back
            font-size .4rem
            color #ffffff
    .header-fixed
        background: $bgColor
        line-height: $headerHeight
        height: $headerHeight
        color: #ffffff
        text-align center
        font-size .32rem
        position fixed
        top 0
        left 0
        right 0
        .header-fixed-back
            position absolute
            top 0
            left 0
            text-align center
            font-size .4rem
            width .64rem
            color #ffffff
</style>