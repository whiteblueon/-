<template>
    <div id="container">
        <div class="img-box">
            <transition-group name="fade" tag="div">
                <img v-show="index == nowIndex" :key="index" v-for="(img,index) in imgs" :src="img" alt="">
            </transition-group>
        </div>
        <ul class="btn-box">
            <li v-for="(x,index) in imgs.length" :key="index" :class="{selected:index==nowIndex}" @click = "change(index)">{{x}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
            data () {
                return{
                    imgs:[
                    "https://img3.doubanio.com/lpic/s24468373.jpg",
                    "https://img3.doubanio.com/lpic/s27102925.jpg",
                    "https://img3.doubanio.com/lpic/s6989253.jpg",
                    "https://img3.doubanio.com/lpic/s6989253.jpg"
                ],
                nowIndex : 0,
                }
            },
            methods:{
                change(index){
                    this.nowIndex = index;
                }
            },
            created () {
                setInterval(()=>{
                    this.nowIndex++;
                    if(this.nowIndex==this.imgs.length){
                        this.nowIndex=0;
                    }
                },2000) 
            }
    }
</script>

<style scoped>
    *{
            margin: 0;
            padding: 0;
        }
        a{
            text-decoration: none;
        }
        li{
            list-style: none;
        }
        .img-box img{
            width:100%;
            height:300px;   
            position: absolute;
            left:0px;
            top:0px;
        }

        #container{
            position: relative;
            height: 300px;
            overflow: hidden;
        }
        .btn-box{
            position: absolute;
            right: 30px;
            bottom:20px;
            list-style: none;
        }
        .btn-box li{
            float: left;
            width: 20px;
            height: 20px;
            background: #cccccc;
            text-align: center;
            line-height: 20px;
            margin-right: 5px;
            font-size: 12px;
        }
        .btn-box .selected{
            background: #ff6600;
        }
        .fade-enter {
            transform: translateX(100%);
        }
        .fade-enter-active{
            transition: transform 1s ;
        }
        .fade-enter-to{
            transform: translateX(0);
        }

        .fade-leave{
            transform: translateX(0);
        }
        .fade-leave-active {
            transition: transform 1s ;
        }
        .fade-leave-to {
            transform: translateX(-100%);
        }
</style>