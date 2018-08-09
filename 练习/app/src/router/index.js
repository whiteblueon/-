import Vue from 'vue'
import Router from 'vue-router'
import Rem from '@/assets/rem'
import MovieList from '@/components/movie/MovieList'
import MusicList from '@/components/music/MusicList'
import BookList from '@/components/book/BookList'
import ImageList from '@/components/image/ImageList'
import Details from '@/components/movie/Details'
import MusicDetail from '@/components/music/MusicDetails'
import PhotoDetail from '@/components/image/PhotoDetails'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/movie/MovieList'
      
    },
    {
      path: '/movie/MovieList',
      component: MovieList,
    },
    {
      path: '/music/MusicList',
      component: MusicList,
    },
    {
      path: '/book/BookList',
      component: BookList ,
    },{
      path: '/image/ImageList',
      component: ImageList,
    },{
      path: '/movie/Details/:movieId',
      component: Details,
    },{
      path: '/music/MusicDetails/:musicId',
      component: MusicDetail,
    },{
      path: '/image/PhotoDetails/:photoSrc',
      component: PhotoDetail,
    }
  ]
})
