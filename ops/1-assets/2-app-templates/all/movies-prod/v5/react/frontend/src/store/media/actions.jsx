import { SettingMedia } from "./redure";
import {
  upcommmingMovies,
  popularMovies,
  latestMovies,
  suggestedForYou,
  bigSlider,
  movieSlider,
  movieOfTheYear,
  recommended,
  relatedMovies,
  upcomming,
  pagination,
  loadmoreup,
  loadmoredown,
  popularVideos,
  specialsLatestVideos,
  videosRecommendedForYou,
  videoSlider,
  upcomingVideo,
  tVPopularShows,
  bestOfInternationalShows,
  suggestedTvShows,
  showsWeRecommend,
  tvShowSlider,
  trendingSlider,
  movies,
  movieTags,
  tvShowsTags,
  videoTags,
  cast,
} from "../../StaticData/data";

export const {
  media_movies,
  upcommming_movies,
  popular_movies,
  latest_movies,
  suggested_for_you,
  big_slider,
  movie_slider,
  movie_of_the_year,
  recommended_movies,
  related_movies,
  upcomming_movie,
  pagination_movies,
  load_more_up,
  load_more_down,
  // videos
  popular_videos,
  specials_latest_videos,
  videos_recommended,
  video_slider,
  upcoming_video,
  // show
  tV_popular_shows,
  international_shows,
  suggested_tv_shows,
  shows_recommend,
  tv_show_slider,
  trending_slider,
  // tags
  media_moviesTags,
  media_tvShowsTags,
  media_videoTags,
  // cast
  movie_cast,
} = SettingMedia.actions;

const sleepTime = 500;
export const getMoviesTagsAsync = () => (dispatch) => {
  // You can call api here
  setTimeout(() => {
    dispatch(media_moviesTags(movieTags));
  }, sleepTime);
};
export const getTvShowTagsAsync = () => (dispatch) => {
  // You can call api here
  setTimeout(() => {
    dispatch(media_tvShowsTags(tvShowsTags));
  }, sleepTime);
};
export const getVideoTagsAsync = () => (dispatch) => {
  // You can call api here
  setTimeout(() => {
    dispatch(media_videoTags(videoTags));
  }, sleepTime);
};
export const getMediaMoviesAsync = () => (dispatch) => {
  // You can call api here
  setTimeout(() => {
    dispatch(media_movies(movies));
  }, sleepTime);
};

export const getUpcommmingMoviesAsync = () => (dispatch) => {
  // You can call api here
  setTimeout(() => {
    dispatch(upcommming_movies(upcommmingMovies));
  }, sleepTime);
};
export const getLatestMoviesAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(latest_movies(latestMovies));
  }, sleepTime);
};
export const getPopularMoviesAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(popular_movies(popularMovies));
  }, sleepTime);
};
export const getSuggestedForYouAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(suggested_for_you(suggestedForYou));
  }, sleepTime);
};
export const getBigSliderAsync = () => (dispatch) => {
  dispatch(big_slider(bigSlider));
};
export const getMovieSliderAsync = () => (dispatch) => {
  dispatch(movie_slider(movieSlider));
};
export const getMovieOfTheYearAsync = () => (dispatch) => {
  dispatch(movie_of_the_year(movieOfTheYear));
};
export const getRecommendedAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(recommended_movies(recommended));
  }, sleepTime);
};
export const getRelatedMoviesAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(related_movies(relatedMovies));
  }, sleepTime);
};
export const getUpcommingAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(upcomming_movie(upcomming));
  }, sleepTime);
};

export const getPaginationupcommmingMoviesAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(pagination_movies(pagination));
  }, sleepTime);
};
export const getLoadMoreUpAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(load_more_up(loadmoreup));
  }, sleepTime);
};
export const getLoadMoreDownAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(load_more_down(loadmoredown));
  }, sleepTime);
};
// video
export const getPopularVideosAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(popular_videos(popularVideos));
  }, sleepTime);
};
export const getSpecialsLatestVideosAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(specials_latest_videos(specialsLatestVideos));
  }, sleepTime);
};
export const getVideosRecommendedForYouAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(videos_recommended(videosRecommendedForYou));
  }, sleepTime);
};
export const getVideoSliderAsync = () => (dispatch) => {
  dispatch(video_slider(videoSlider));
};
export const getUpcomingVideoAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(upcoming_video(upcomingVideo));
  }, sleepTime);
};
// shows
export const getTVPopularShowsAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(tV_popular_shows(tVPopularShows));
  }, sleepTime);
};
export const getBestOfInternationalShowsAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(international_shows(bestOfInternationalShows));
  }, sleepTime);
};
export const getSuggestedTvShowsAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(suggested_tv_shows(suggestedTvShows));
  }, sleepTime);
};
export const getShowsWeRecommendAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(shows_recommend(showsWeRecommend));
  }, sleepTime);
};
export const getTvShowSliderAsync = () => (dispatch) => {
  dispatch(tv_show_slider(tvShowSlider));
};
export const getTrendingSliderAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(trending_slider(trendingSlider));
  }, sleepTime);
};
// cast
export const getMovieCastAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(movie_cast(cast));
  }, sleepTime);
};
export default SettingMedia.actions;
