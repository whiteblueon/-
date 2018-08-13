<template>
  <div id="app">
    <common-header :title="headerTitle" :bg = "bgcolor" ></common-header>
    <router-view></router-view>
    <common-footer :bg="bgcolor"  @change="fn"></common-footer>
    <!-- bg要引用data里的值需要在前面加: -->
    
  </div>
</template>

<script>

    import CommonHeader from '@/components/common/Header'
    import CommonFooter from '@/components/common/Footer'
    import MovieList from '@/components/movie/MovieList'
        
    export default {
      name: 'App',
      data(){
        return{
          bgcolor:'#00e3ff',
          headerTitle:'movie'
        }
      },
      methods: {
        fn(color,title){
          this.bgcolor=color;
          this.headerTitle=title
        },
        goHome(){
          this.$router.push('/movie/Details');
        }
      },
      components: {
          CommonHeader,
          CommonFooter,
          MovieList
      },
      created () {
      var url = this.$route.path; 
      var str = url.split('/')[1];
      
      switch(str){
        case 'music':
        this.bgcolor = '#00ff36';
        this.headerTitle='music';
        console.log(str);
        break;
        case 'movie':
        this.bgcolor= '#00e3ff';
        this.headerTitle='movie';
        console.log(str);
        break;
        case 'book':
        this.bgcolor = '#ff0036';
        this.headerTitle='book';
        console.log(str);
        break;
        case 'image':
        this.bgcolor='#ff6600';
        this.headerTitle='image';
        
        console.log(str);
        break;
      }
      console.log(this.bgcolor)
    }
  }
    
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 1rem;
}
</style>
