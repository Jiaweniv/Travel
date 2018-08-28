<template>
    <div>
        <div class="search">
            <input type="text" class="search-input" v-model="keyWord" placeholder="输入城市名字或拼音">
        </div>
        <div class="search-content" ref="search" v-show="keyWord">
            <ul>
                <li class="search-item border-bottom" v-for="item of list" :key="item.id">
                    {{ item.name }}
                </li>
                <li class="search-item border-bottom" v-show="hasNoData">   
                    没有找到匹配项
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import Bscroll from 'better-scroll'
    export default{
        name: 'CitySearch',
        props: {
            cities: Object
        },
        data () {
            return {
                keyWord: '',
                list:[],
                timer: null
            }
        },
        mounted() {
            this.scroll = new Bscroll(this.$refs.search)
        },
        computed:{
            hasNoData(){
                return !this.list.length
            }
        },
        watch: {
            keyWord() {
                if(this.timer){
                    clearInterval(this.timer)   
                }
                if(!this.keyWord){
                    this.list = []
                    return
                }
                this.timer = setTimeout(()=>{
                    const result = []
                    for (let i in this.cities){
                        this.cities[i].forEach((value) => {
                            if(value.name.indexOf(this.keyWord) > -1 || value.spell.indexOf(this.keyWord) > -1){
                                result.push(value)
                            }
                        });
                    }
                    this.list = result
                }, 100)
            }
        }
    }
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl';
    .search
        height .72rem
        padding 0 .1rem
        background $bgColor
        .search-input
            box-sizing border-box
            padding 0 .1rem
            line-height .62rem
            text-align center
            width 100%
            border-radius .06rem
            color #666
            height .62rem
    .search-content
        overflow hidden
        position absolute
        top 1.58rem
        left 0
        right 0
        bottom 0
        background #eee 
        z-index 1
        ul
            .search-item
                background #fff
                line-height .62rem
                padding-left .2rem
                color #666
</style>
