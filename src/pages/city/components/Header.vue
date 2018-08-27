<template>
    <div class="header">
        城市选择
        <router-link to="/">
            <div class="iconfont header-back">&#xe624;</div><div class="iconfont header-back">&#xe624;</div>
        </router-link>
    </div>
</template>
<script>
    export default{
        name: 'CityHeader'
    }
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl';
    .header
        background: $bgColor
        line-height: $headerHeight
        height: $headerHeight
        color: #ffffff
        text-align center
        overflow hidden
        font-size .32rem
        position relative
        .header-back
            position absolute
            top 0
            left 0
            text-align center
            font-size .4rem
            width .64rem
            color #ffffff
</style>
