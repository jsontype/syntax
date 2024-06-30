import { createSlice } from '@reduxjs/toolkit'
import {state} from './states'

export const SettingMedia = createSlice({
    name: "shop",
    initialState: state,
    reducers: { 
        hero_slider: (state,action) =>{
            state.heroSlider = action.payload
        },
        shop_category: (state,action) =>{
            state.category = action.payload
        },
        products: (state,action) =>{
            state.products = action.payload
        },
        shop_banner_slider: (state,action) =>{
            state.shopBannerSlider = action.payload
        },
        new_product: (state,action) =>{
            state.newProduct = action.payload
        },
        best_seller: (state,action) =>{
            state.bestseller = action.payload
        },
        my_wishlist: (state,action) =>{
            state.myWishlist = action.payload
        },
        my_cart: (state,action) =>{
            state.myCart = action.payload
        }
    }
})


export default SettingMedia.reducer;