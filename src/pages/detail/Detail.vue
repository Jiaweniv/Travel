<template>
    <div>
        <detail-banner 
            :sightName="sightName" 
            :bannerImg="bannerImg" 
            :bannerImgs="gallaryImgs"
        ></detail-banner>
        <detail-header></detail-header>
        <div class="content">
           <detail-list :list="list"></detail-list>
        </div>
    </div>
</template>
<script>
    import DetailBanner from './components/Banner'
    import DetailHeader from './components/Header'
    import DetailList from './components/List'
    import axios from 'axios'
    export default{
        name: 'Deatil',
        components: {
            DetailBanner,
            DetailHeader,
            DetailList
        },
        data () {
            return {
                sightName: '',
                list: [],
                bannerImg: '',
                gallaryImgs: []
            }
        },
        mounted() {
            this.getDetailInfo()
        },
        activated (){
            this.getDetailInfo()
        },
        methods: {
            getDetailInfo () {
                axios.get('/api/detail.json',{
                    params: {
                        id: this.$route.params.id
                    }
                }).then(this.handleGetDataSucc)
            },
            handleGetDataSucc(res) {
                res = res.data
                if(res.ret && res.data){
                    const data = res.data;
                    this.list = data.categoryList
                    this.sightName = data.sightName
                    this.bannerImg = data.bannerImg
                    this.gallaryImgs = data.gallaryImgs
                }
            }
        }
    }
</script>
<style lang="stylus" scoped>
    .content
        height 50rem
</style>

