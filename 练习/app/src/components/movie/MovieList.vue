<template>
    <div class="movie-container">
       <ul>
           <li class="movielist" v-for="(obj,index) in movielist" :key="index" @click="goDetails(obj.id)">
               <div class="movie-image">
                   <img :src="obj.img" alt="">
               </div>
               <div class="movie-info">
                   <h3>{{obj.nm}}</h3>
                   <p>{{obj.ver}}</p>
                   <p>{{obj.star}}</p>
                    <p>{{obj.cat}}</p>
               </div>
           </li>
       </ul>
       <div>
           <img src="@/assets/loading.gif" v-show="isShow">
       </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import axios from 'axios'

    export default {
        data(){
            return{
                movielist:[],
                isShow:false,
                inx:0
            }
        },
        methods: {
            load(){
                axios.get(`./static/data/moviedata${this.inx}.json`).then(res=>{
                    this.movielist = this.movielist.concat(res.data.data.movies);
                    this.resultLength = res.data.data.movies.length;
                    console.log(this.movielist );
                }).catch(res => {

                });
            },
            goDetails(id){
                this.$router.push(`/movie/Details/${id}`);
                console.log(id)
            }
        },
        created() {
            this.load();
            window.onscroll= ()=>{
                let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                let clientHeight = document.documentElement.clientHeight;
                let height = document.documentElement.scrollHeight;
                let scb= height-clientHeight;
                
                    console.log('scrollTop'+scrollTop);
                    console.log('clientHeight'+clientHeight);
                    console.log('height'+height);
                    console.log(this.inx);
                    console.log(scb);
                if((height-scrollTop-clientHeight<0.2)){
                    this.inx+=10;
                    
                    if(this.resultLength == 10){
                        this.isShow = true;   
                        this.load();                    
                    }else{
                        this.isShow = false; 
                    }
                };
            }
        },
    
    }
</script>

<style scoped>
.movie-container{
    margin-bottom: 1rem;
}
    .movielist{
        display: flex;
        padding: 0.2rem;
        font-size: 14px;
        line-height: 1.8;
    }
    .movie-image{
        flex-grow: 1;
        margin-right: 0.1rem;
        width: 0px;
    }
    .movie-image img{
        width: 100%;
    }
    .movie-info{
        width: 0px;
        flex-grow: 2;

    }
    h3{
        color: #06f6f6
    }
    .movie-container div{
        text-align: center;
    }
</style>