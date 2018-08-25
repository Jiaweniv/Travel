<template>
    <div>
        <Home-Header></Home-Header>
        <home-swiper></home-swiper>
    </div>
</template>
<script>
    import HomeHeader from './components/Header'
    import HomeSwiper from './components/Swiper'
    export default{
        name: 'home',
        components: {
            HomeHeader,
            HomeSwiper
        }
    }
</script>
<style scoped>
</style>
