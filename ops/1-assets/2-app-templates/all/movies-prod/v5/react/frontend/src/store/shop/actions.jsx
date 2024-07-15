import { SettingMedia } from "./redure";
import {
  heroSlider,
  category,
  products,
  shopBannerSlider,
  newProduct,
  bestseller,
  myWishlist,
  myCart
} from "../../StaticData/shop";

export const {
  hero_slider,
  shop_category,
  shop_products,
  shop_banner_slider,
  new_product,
  best_seller,
  my_wishlist,
  my_cart
} = SettingMedia.actions;

export const getheroSliderAsync = () => (dispatch) => {
  // You can call api here
  setTimeout(() => {
    dispatch(hero_slider(heroSlider));
  }, 3000);
};
export const getcategoryAsync = () => (dispatch) => {
  // You can call api here
  setTimeout(() => {
    dispatch(category(category));
  }, 3000);
};
export const getProductsAsync = () => (dispatch) => {
  // You can call api here
  setTimeout(() => {
    dispatch(products(products));
  }, 3000);
};
export const getshopBannerSliderAsync = () => (dispatch) => {
  // You can call api here
  setTimeout(() => {
    dispatch(shop_banner_slider(shopBannerSlider));
  }, 3000);
};
export const getnewProductAsync = () => (dispatch) => {
  // You can call api here
  setTimeout(() => {
    dispatch(new_product(newProduct));
  }, 3000);
};
export const getbestSellerAsync = () => (dispatch) => {
  // You can call api here
  setTimeout(() => {
    dispatch(best_seller(bestseller));
  }, 3000);
};
export const getmyWishlistAsync = () => (dispatch) => {
  // You can call api here
  setTimeout(() => {
    dispatch(my_wishlist(myWishlist));
  }, 3000);
};
export const getmyCartAsync = () => (dispatch) => {
  // You can call api here
  setTimeout(() => {
    dispatch(my_cart(myCart));
  }, 3000);
};

export default SettingMedia.actions;
