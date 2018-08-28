<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-warpper">
                        <div class="button">
                            {{ this.currentCity }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-warpper" 
                        v-for="item of hot" 
                        :key="item.id"
                        @click="handleCityClick(item.name)"
                    >
                        <div class="button">
                            {{ item.name }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="area" 
                v-for="(item,key) of cities" 
                :key="key"
                :ref="key"
            >
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div class="item border-bottom" 
                        v-for="innerItem of item" 
                        :key="innerItem.id"
                        @click="handleCityClick(innerItem.name)"
                    >
                        {{ innerItem.name }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Bscroll from 'better-scroll'
    import { mapState,mapMutations } from 'vuex'
    export default{
        name: 'CityList',
        props: {
            hot: Array,
            cities: Object,
            letter: String
        },
        mounted () {
            this.$nextTick(() => {
                this.scroll = new Bscroll(this.$refs.wrapper, {})
            })
        },
        computed: {
            ...mapState({
                currentCity: 'city'
            })
        },
        watch: {
            letter(letter) {
                if(this.letter){
                    const element = this.$refs[this.letter][0]
                    this.scroll.scrollToElement(element);
                }
            }
        },
        methods: {
            handleCityClick(city) {
                this.changeCity(city)
                this.$router.push('/')
            },
            ...mapMutations(['changeCity'])
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
