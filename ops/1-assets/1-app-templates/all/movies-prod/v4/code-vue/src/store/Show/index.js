import getters from './getter'
import actions from './action'
import mutations from './mutations'

const state = {
  showList: [
    {
      id: '1',
      name: 'Arrival 1999',
      category: 'Thriller',
      seasons: '2 Seasons',
      quality: 'Full HD',
      lang: 'English',
      file: require('../../assets/images/show-thumb/07.jpg'),
      banner: '',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet',
      episodes: [
        {
          id: 1,
          episode: 'Episode 1',
          sesson: 'Sesson 1',
          name: 'Arrival-1',
          file: require('../../assets/images/movie-thumb/01.jpg'),
          duration: '2h m',
          date: '2020-1-11',
          text: 'Lorem ipsum dolor sit amet',
          video_link: ''

        }
      ]

    },
    {
      id: '2',
      name: 'Day of Darkness',
      category: 'Drama',
      seasons: '3 Seasons',
      quality: 'Full HD',
      lang: 'English',
      file: require('../../assets/images/show-thumb/08.jpg'),
      banner: '',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet',
      episodes: [
        {
          id: 1,
          episode: 'Episode 1',
          sesson: 'Sesson 1',
          name: 'Arrival-1',
          file: require('../../assets/images/movie-thumb/01.jpg'),
          duration: '2h m',
          date: '2020-1-11',
          text: 'Lorem ipsum dolor sit amet',
          video_link: ''

        }
      ]

    },
    {
      id: '3',
      name: 'Don Jon',
      category: 'Action',
      seasons: '3 Seasons',
      quality: 'HD',
      lang: 'Hindi',
      file: require('../../assets/images/show-thumb/06.jpg'),
      banner: '',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet',
      episodes: [
        {
          id: 1,
          episode: 'Episode 1',
          sesson: 'Sesson 1',
          name: 'Arrival-1',
          file: require('../../assets/images/movie-thumb/01.jpg'),
          duration: '2h m',
          date: '2020-1-11',
          text: 'Lorem ipsum dolor sit amet',
          video_link: ''

        }
      ]

    },
    {
      id: '4',
      name: 'Megafun',
      category: 'Horror',
      seasons: '3 Seasons',
      quality: 'Full HD',
      lang: 'English',
      file: require('../../assets/images/show-thumb/04.jpg'),
      banner: '',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet',
      episodes: [
        {
          id: 1,
          episode: 'Episode 1',
          sesson: 'Sesson 1',
          name: 'Arrival-1',
          file: require('../../assets/images/movie-thumb/01.jpg'),
          duration: '2h m',
          date: '2020-1-11',
          text: 'Lorem ipsum dolor sit amet',
          video_link: ''

        }
      ]

    },
    {
      id: '5',
      name: 'My True Friends',
      category: 'Action',
      seasons: '1 Seasons',
      quality: 'HD',
      lang: 'Hindi',
      file: require('../../assets/images/show-thumb/10.jpg'),
      banner: '',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet',
      episodes: [
        {
          id: 1,
          episode: 'Episode 1',
          sesson: 'Sesson 1',
          name: 'Arrival-1',
          file: require('../../assets/images/movie-thumb/01.jpg'),
          duration: '2h m',
          date: '2020-1-11',
          text: 'Lorem ipsum dolor sit amet',
          video_link: ''

        }
      ]

    },
    {
      id: '6',
      name: 'Night Mare',
      category: 'Thriller',
      seasons: '2 Seasons',
      quality: 'HD',
      lang: 'English',
      file: require('../../assets/images/show-thumb/01.jpg'),
      banner: '',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet',
      episodes: [
        {
          id: 1,
          episode: 'Episode 1',
          sesson: 'Sesson 1',
          name: 'Arrival-1',
          file: require('../../assets/images/movie-thumb/01.jpg'),
          duration: '2h m',
          date: '2020-1-11',
          text: 'Lorem ipsum dolor sit amet',
          video_link: ''

        }
      ]

    },
    {
      id: '7',
      name: 'Portable',
      category: 'Horror',
      seasons: '1 Seasons',
      quality: 'HD',
      lang: 'Hindi',
      file: require('../../assets/images/show-thumb/05.jpg'),
      banner: '',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet',
      episodes: [
        {
          id: 1,
          episode: 'Episode 1',
          sesson: 'Sesson 1',
          name: 'Arrival-1',
          file: require('../../assets/images/movie-thumb/01.jpg'),
          duration: '2h m',
          date: '2020-1-11',
          text: 'Lorem ipsum dolor sit amet',
          video_link: ''

        }
      ]

    },
    {
      id: '8',
      name: 'Suffered',
      category: 'Drama',
      seasons: '4 Seasons',
      quality: 'Full HD',
      lang: 'English',
      file: require('../../assets/images/show-thumb/02.jpg'),
      banner: '',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet',
      episodes: [
        {
          id: 1,
          episode: 'Episode 1',
          sesson: 'Sesson 1',
          name: 'Arrival-1',
          file: require('../../assets/images/movie-thumb/01.jpg'),
          duration: '2h m',
          date: '2020-1-11',
          text: 'Lorem ipsum dolor sit amet',
          video_link: ''

        }
      ]

    },
    {
      id: '9',
      name: 'The Witcher',
      category: 'Action',
      seasons: '3 Seasons',
      quality: 'Full HD',
      lang: 'Hindi',
      file: require('../../assets/images/show-thumb/03.jpg'),
      banner: '',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet',
      episodes: [
        {
          id: 1,
          episode: 'Episode 1',
          sesson: 'Sesson 1',
          name: 'Arrival-1',
          file: require('../../assets/images/movie-thumb/01.jpg'),
          duration: '2h m',
          date: '2020-1-11',
          text: 'Lorem ipsum dolor sit amet',
          video_link: ''

        }
      ]

    },
    {
      id: '10',
      name: 'Troll Hunters',
      category: 'Horror',
      seasons: '1 Seasons',
      quality: 'Full HD',
      lang: 'English',
      file: require('../../assets/images/show-thumb/09.jpg'),
      banner: '',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rhoncus non elit a scelerisque. Etiam feugiat luctus est, vel commodo odio rhoncus sit amet',
      episodes: [
        {
          id: 1,
          episode: 'Episode 1',
          sesson: 'Sesson 1',
          name: 'Arrival-1',
          file: require('../../assets/images/movie-thumb/01.jpg'),
          duration: '2h m',
          date: '2020-1-11',
          text: 'Lorem ipsum dolor sit amet',
          video_link: ''

        }
      ]

    }
  ]
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
