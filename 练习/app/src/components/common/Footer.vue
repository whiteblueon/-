<template>
    <div>
        <ul class="footer" :style="{'background':bg}">
            <li  @click="$emit('change','#00e3ff','movie')"><router-link to="/movie/MovieList">电影</router-link></li>
            <li  @click="$emit('change','#00ff36','music')"><router-link to="/music/MusicList" >音乐</router-link></li>
            <li  @click="$emit('change','#ff0036','book')" ><router-link to="/book/BookList">书籍</router-link></li>
            <li  @click="$emit('change','#ff6600','image')"><router-link to="/image/ImageList">图片</router-link></li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:["bg"],
        
    }
</script>

<style scoped>
    .footer{
        height: 1rem;
        line-height: 1rem;
        display: flex;
        font-size: .3rem;
        position: fixed;
        bottom: 0;
        width: 100%;
    }
    .footer li{
        flex-grow: 1;
        text-align: center;
        color:#000;
    }
</style>