import { createSlice } from '@reduxjs/toolkit'
import {state} from './states'

export const SettingMedia = createSlice({
    name: "blog",
    initialState: state,
    reducers: { 
        blog_tags: (state,action) =>{
            state.blogTags = action.payload
        },
        blog_categories: (state,action) =>{
            state.blogCategories = action.payload
        },
        blogs_data: (state,action) =>{
            state.blogs = action.payload
        },
        blogs_grid: (state,action) =>{
            state.blogsGrid = action.payload
        },
        blog_recent: (state,action) =>{
            state.blogRecent = action.payload
        },
        blog_recents: (state,action) =>{
            state.blogRecents = action.payload
        },
        blogs_details: (state,action) =>{
            state.blogsDetails = action.payload
        }
    }
})


export default SettingMedia.reducer;