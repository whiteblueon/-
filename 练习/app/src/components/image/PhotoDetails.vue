<template>
    <v-touch v-on:swipeleft="next()" >
        <div class="container" :style="{'background-image':url}"></div>
    </v-touch>
    <!-- <div class="container" :style="{'background-image':url}"></div> -->
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
    export default {
        data(){
            return{
                photosrc: [],
                url:''
            }
        },
        created(){
            axios.get(`./static/data/photodata.json`).then(res=>{
                this.photosrc=res.data.photoData;
                this.url=`url(${this.photosrc[this.$route.params.photoSrc].src})`;
                // this.url = `url(${this.photolist[this.nowIndex].src})`;
            }).catch(res=>{

            })
        },
        // computed:{
        //     url(){
        //         return `url(${this.photosrc[this.$route.params.photoSrc].src})`;
        //     }
        // }
        methods:{
            next(){
                this.$route.params.photoSrc++
                this.url= `url(${this.photosrc[this.$route.params.photoSrc].src})`
            }
        }
    }
</script>

<style scoped>
    /* #app{
        background: #000;
    } */

    .container{
        position: absolute;
        left:0;
        top:1rem;
        right:0px;
        bottom:1rem;
        background: #000 no-repeat center center;
        background-size: contain;
        color: #ffffff
    }
    
</style>