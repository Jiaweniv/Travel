<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-warpper">
                        <div class="button">
                            北京
                        </div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-warpper">
                        <div class="button">
                            北京
                        </div>
                    </div>
                    <div class="button-warpper">
                        <div class="button">
                            北京
                        </div>
                    </div>
                    <div class="button-warpper">
                        <div class="button">
                            北京
                        </div>
                    </div>
                    <div class="button-warpper">
                        <div class="button">
                            北京
                        </div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">A</div>
                <div class="item-list">
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                </div>
                <div class="title border-topbottom">A</div>
                <div class="item-list">
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                </div>
                <div class="title border-topbottom">A</div>
                <div class="item-list">
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                </div>
                <div class="title border-topbottom">A</div>
                <div class="item-list">
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                    <div class="item border-bottom">
                        阿拉尔
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Bscroll from 'better-scroll'
    export default{
        name: 'CityList',
        mounted () {
            this.$nextTick(() => {
                this.scroll = new Bscroll(this.$refs.wrapper, {})
            })
        }
    }
</script>
<style lang="stylus" scoped>
.list
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    overflow hidden
    .area
        .border-bottom
            &.before
                border-color #ccc
        .border-topbottom
            &:after
                border-color #ccc
            &:before
                border-color #ccc
        .title
            line-height .54rem
            font-size .26rem
            background #eeeeee
            padding-left .2rem
            color #666
        .button-list
            padding .1rem
            overflow hidden
            .button-warpper
                float left 
                width 33.33%
                .button
                    border .02rem #cccccc solid 
                    text-align center
                    margin .1rem   
                    padding .1rem 0
                    border-radius .06rem
        .item-list
            .item
                padding-left .2rem
                line-height .76rem


</style>
