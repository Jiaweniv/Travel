<template>
    <div class="container" @click="handleGallaryClick">
        <div class="warpper">
            <swiper :options="swiperOptions">
                <swiper-slide v-for="(item,index) of imgs" :key="index">
                    <img class="gallary-img" :src="item" >
                </swiper-slide>
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>
<script>
    export default{
        name: 'CommonGallary',
        props: {
            imgs: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        data() {
            return {
                swiperOptions: {
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                        type: 'fraction'
                    },
                    observer:true,
                    observeParents:true
                }
            }
        },
        methods:{
            handleGallaryClick(){
                this.$emit('close')
            }
        }
    }
</script>
<style lang="stylus" scoped>
    .container >>> .swiper-container
        overflow inherit 
    .container
        background #000000
        display flex
        flex-direction column
        justify-content center
        z-index 99
        position fixed
        top 0
        left 0
        right 0
        bottom 0
        .warpper
            width 100%
            height 0
            padding-bottom 100%
            .gallary-img
                width 100%
            .swiper-pagination
                color #ffffff
                bottom -1rem
</style>

