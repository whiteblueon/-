<template>
    <div class="container">
        <img :src="obj.bg" alt="" v-for="(obj,index) in musicList"  :key="index" @click="goMusicDetail(obj.id)">
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
    export default {
        data(){
            return{
                musicList:[]
            }
        },
        methods: {
            goMusicDetail(id){
                this.$router.push(`/music/MusicDetails/${id}`)
            }
        },
        created() {
            axios.get(`./static/data/musiclist.json`).then(res=>{
                console.log(res);
                this.musicList=res.data.albums;
                console.log(this.musicList)
            }).catch(res=>{

            });
        },
    }
</script>

<style scoped>
    .container img{
        width: 50%;
        display: block;
        float: left;
    }
</style>