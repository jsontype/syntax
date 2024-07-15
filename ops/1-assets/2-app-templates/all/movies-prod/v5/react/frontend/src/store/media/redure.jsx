import { createSlice } from '@reduxjs/toolkit'
import { state } from './states'

export const SettingMedia = createSlice({
    name: "media",
    initialState: state,
    reducers: {
        media_movies: (state, action) => {
            state.movies = action.payload
        },
        upcommming_movies: (state, action) => {
            state.upcommmingMovies = action.payload
        },
        popular_movies: (state, action) => {
            state.popularMovies = action.payload
        },
        latest_movies: (state, action) => {
            state.latestMovies = action.payload
        },
        suggested_for_you: (state, action) => {
            state.suggestedForYou = action.payload
        },
        big_slider: (state, action) => {
            state.bigSlider = action.payload
        },
        movie_slider: (state, action) => {
            state.movieSlider = action.payload
        },
        movie_of_the_year: (state, action) => {
            state.movieOfTheYear = action.payload
        },
        recommended_movies: (state, action) => {
            state.recommended = action.payload
        },
        related_movies: (state, action) => {
            state.relatedMovies = action.payload
        },
        upcomming_movie: (state, action) => {
            state.upcomming = action.payload
        },
        pagination_movies: (state, action) => {
            state.pagination = action.payload
        },
        load_more_up: (state, action) => {
            state.loadmoreup = action.payload
        },
        load_more_down: (state, action) => {
            state.loadmoredown = action.payload
        },
        // videos
        popular_videos: (state, action) => {
            state.popularVideos = action.payload
        },
        specials_latest_videos: (state, action) => {
            state.specialsLatestVideos = action.payload
        },
        videos_recommended: (state, action) => {
            state.videosRecommendedForYou = action.payload
        },
        video_slider: (state, action) => {
            state.videoSlider = action.payload
        },
        upcoming_video: (state, action) => {
            state.upcomingVideo = action.payload
        },
        // shows
        tV_popular_shows: (state, action) => {
            state.tVPopularShows = action.payload
        },
        international_shows: (state, action) => {
            state.bestOfInternationalShows = action.payload
        },
        suggested_tv_shows: (state, action) => {
            state.suggestedTvShows = action.payload
        },
        shows_recommend: (state, action) => {
            state.showsWeRecommend = action.payload
        },
        tv_show_slider: (state, action) => {
            state.tvShowSlider = action.payload
        },
        trending_slider: (state, action) => {
            state.trendingSlider = action.payload
        },
        // tags
        media_moviesTags: (state, action) => {
            state.movieTags = action.payload
        },
        media_tvShowsTags: (state, action) => {
            state.tvShowsTags = action.payload
        },
        media_videoTags: (state, action) => {
            state.videoTags = action.payload
        },
        movie_cast: (state, action) => {
            state.cast = action.payload
        },

    }
})


export default SettingMedia.reducer;