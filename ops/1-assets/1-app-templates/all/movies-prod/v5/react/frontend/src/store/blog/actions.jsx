import { SettingMedia } from "./redure";
import {
  blogTags,
  blogCategories,
  blogs,
  blogsGrid,
  blogRecent,
  blogRecents
} from "../../StaticData/blogs";

import {blogsDetails} from '../../StaticData/blog-details'

export const {
  blog_tags,
  blog_categories,
  blogs_data,
  blogs_grid,
  blog_recent,
  blog_recents,
  blogs_details
} = SettingMedia.actions;

export const getblogTagsAsync = () => (dispatch) => {
  // You can call api here
  setTimeout(() => {
    dispatch(blog_tags(blogTags));
  }, 3000);
};
export const getblogCategoriesAsync = () => (dispatch) => {
  // You can call api here
  setTimeout(() => {
    dispatch(blog_categories(blogCategories));
  }, 3000);
};
export const getBlogsAsync = () => (dispatch) => {
  // You can call api here
  setTimeout(() => {
    dispatch(blogs_data(blogs));
  }, 3000);
};
export const getblogsGridAsync = () => (dispatch) => {
  // You can call api here
  setTimeout(() => {
    dispatch(blogs_grid(blogsGrid));
  }, 3000);
};
export const getblogRecentAsync = () => (dispatch) => {
  // You can call api here
  setTimeout(() => {
    dispatch(blog_recent(blogRecent));
  }, 3000);
};
export const getblogRecentsAsync = () => (dispatch) => {
  // You can call api here
  setTimeout(() => {
    dispatch(blog_recents(blogRecents));
  }, 3000);
};
export const getblogsDetailsAsync = () => (dispatch) => {
  // You can call api here
  setTimeout(() => {
    dispatch(blogs_details(blogsDetails));
  }, 3000);
};

export default SettingMedia.actions;
