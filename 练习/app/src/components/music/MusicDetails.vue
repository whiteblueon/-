<template>
    <div>
        <aplayer autoplay :list="musicdata" v-if="isShow"
  :music="musicdata[0]"
/>
    </div>
</template>

<script>
import Aplayer from 'vue-aplayer'
import axios from 'axios'

    export default {
        data(){
            return{
                musicdata:[],
                isShow:false
            }
        },
        components: {
        Aplayer
    },
    created(){
        axios.get(`./static/data/musicdata.json`).then(res=>{
            console.log(res.data.musicData);
            res.data.musicData.forEach(obj => {
                this.musicdata.push({
                    src:obj.src,
                    title:obj.title,
                    artist:obj.author,
                    pic:obj.musicImgSrc,
                    lrc:obj.lrc
                });
            });
            this.isShow=true;
        }).catch(res=>{

        })
    }
    }
</script>

<style scoped>

</style>