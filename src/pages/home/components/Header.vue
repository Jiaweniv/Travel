<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe624;</div>
            </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>输入城市/景点/主题</div>
        <router-link to="/City">
            <div class="header-right">
            {{ city }}
            <span class="iconfont arrow-icon">&#xe64a;</span></div>
        </router-link>
    </div>
</template>
<script>
    export default{
        name: 'HomeHeader',
        props: {
            city: String
        }
    }
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl';
    .header
        display: flex
        background: $bgColor
        line-height: $headerHeight
        color: #ffffff
        .header-left
            width: .64rem
            float: left
            .back-icon
                font-size : .4rem
                text-align center
        .header-input
            flex: 1
            background :#fff
            border-radius : .1rem
            margin-top: .12rem
            line-height: .64rem
            height: .64rem
            margin-left : .2rem
            padding-left : .2rem
            color: #ccc
        .header-right
            width: 1.24rem
            float: right 
            text-align : center
            color #ffffff
            .arrow-icon
                font-size :.24rem
                margin-left : -.04rem
</style>
