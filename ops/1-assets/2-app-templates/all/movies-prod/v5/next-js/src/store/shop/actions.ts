import { SettingMedia } from "./reducers";
import {
  heroSlider,
  category,
  products,
  shopBannerSlider,
  newProduct,
  bestseller,
  myWishlist,
  myCart
} from "@/StaticData/shop";

export const {
  hero_slider,
  shop_category,
  // shop_products,
  shop_banner_slider,
  new_product,
  best_seller,
  my_wishlist,
  my_cart
} = SettingMedia.actions;

export const getheroSliderAsync = () => (dispatch: (arg0: { payload: any; type: "shop/hero_slider"; }) => void) => {
  // You can call api here
  setTimeout(() => {
    dispatch(hero_slider(heroSlider));
  }, 3000);
};

export const getshopBannerSliderAsync = () => (dispatch: (arg0: { payload: any; type: "shop/shop_banner_slider"; }) => void) => {
  // You can call api here
  setTimeout(() => {
    dispatch(shop_banner_slider(shopBannerSlider));
  }, 3000);
};
export const getnewProductAsync = () => (dispatch: (arg0: { payload: any; type: "shop/new_product"; }) => void) => {
  // You can call api here
  setTimeout(() => {
    dispatch(new_product(newProduct));
  }, 3000);
};
export const getbestSellerAsync = () => (dispatch: (arg0: { payload: any; type: "shop/best_seller"; }) => void) => {
  // You can call api here
  setTimeout(() => {
    dispatch(best_seller(bestseller));
  }, 3000);
};
export const getmyWishlistAsync = () => (dispatch: (arg0: { payload: any; type: "shop/my_wishlist"; }) => void) => {
  // You can call api here
  setTimeout(() => {
    dispatch(my_wishlist(myWishlist));
  }, 3000);
};
export const getmyCartAsync = () => (dispatch: (arg0: { payload: any; type: "shop/my_cart"; }) => void) => {
  // You can call api here
  setTimeout(() => {
    dispatch(my_cart(myCart));
  }, 3000);
};

export default SettingMedia.actions;
