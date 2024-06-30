import getters from './getter'
import actions from './action'
import mutations from './mutations'
let list = []
if (localStorage.getItem('movieList') !== null) {
  list = localStorage.getItem('movieList')
} else {
  list = [
    {
      id: '1',
      name: '1980',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet',
      category: 'Action',
      quality: 'HD',
      releseDate: '2010',
      lang: 'Hindi',
      duration: '2h 23m',
      video_link: '',
      file: require('../../assets/images/movie-thumb/02.jpg')
    },
    {
      id: '2',
      name: 'Boop Bitty',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet',
      category: 'Thriller',
      quality: 'Full HD',
      releseDate: '2017',
      lang: 'English',
      duration: '2h 40m',
      video_link: '',
      file: require('../../assets/images/movie-thumb/08.jpg')
    },
    {
      id: '3',
      name: 'Burning',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet',
      category: 'Horror',
      quality: 'HD',
      releseDate: '2020',
      lang: 'Hindi',
      duration: '3h',
      video_link: '',
      file: require('../../assets/images/movie-thumb/03.jpg')
    },
    {
      id: '4',
      name: 'Champions',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet',
      category: 'Drama',
      quality: 'Full HD',
      releseDate: '2019',
      lang: 'English',
      duration: '2h 15m',
      video_link: '',
      file: require('../../assets/images/movie-thumb/06.jpg')
    },
    {
      id: '5',
      name: 'Dino Land',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet',
      category: 'Thriller',
      quality: 'HD',
      releseDate: '2015',
      lang: 'English',
      duration: '1h 40m',
      video_link: '',
      file: require('../../assets/images/movie-thumb/04.jpg')
    },
    {
      id: '6',
      name: 'Last Night',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet',
      category: 'Horror',
      quality: 'Full HD',
      releseDate: '2019',
      lang: 'English',
      duration: '3h 15m',
      video_link: '',
      file: require('../../assets/images/movie-thumb/01.jpg')
    },
    {
      id: '7',
      name: 'Last Race',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet',
      category: 'Action',
      quality: 'HD',
      releseDate: '2020',
      lang: 'Hindi',
      duration: '2h 20m',
      video_link: '',
      file: require('../../assets/images/movie-thumb/05.jpg')
    },
    {
      id: '8',
      name: 'Looters',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet',
      category: 'Drama',
      quality: 'Full HD',
      releseDate: '2014',
      lang: 'English',
      duration: '2h 30m',
      video_link: '',
      file: require('../../assets/images/movie-thumb/07.jpg')
    },
    {
      id: '9',
      name: 'The Illusion',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet',
      category: 'Drama',
      quality: 'Full HD',
      releseDate: '2018',
      lang: 'English',
      duration: '2h 30m',
      video_link: '',
      file: require('../../assets/images/movie-thumb/10.jpg')
    },
    {
      id: '10',
      name: 'The Last Breath',
      description: 'Lorem ipsum dolor sit amet',
      category: 'Action',
      quality: 'Full HD',
      releseDate: '2013',
      lang: 'Hindi',
      duration: '2h 30m',
      video_link: '',
      file: require('../../assets/images/movie-thumb/09.jpg')
    }
  ]
}

const state = {
  movieList: list
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
