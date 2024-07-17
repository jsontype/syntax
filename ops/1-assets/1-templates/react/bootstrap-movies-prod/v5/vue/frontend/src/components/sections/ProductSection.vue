<template>
  <!-- your favourite personality start -->
  <SectionSlider :title="$t(title)" :list="list" :slides-per-view="5" class="card-style-slider streamit-block" margin-padding="px-3 my-4">
    <template #headerLink>
      <router-link :to="{ name: 'landing-page.merchandise.shop.all-product' }" class="text-primary iq-view-all text-decoration-none flex-none">{{ $t('merchandise.want_more') }}</router-link>
    </template>
    <template #default="{ data }">
      <CardShopGridView :thumbnail="data.thumbnail" :is-sale="data.is_sale" :is-new="data.is_new" :product-name="data.product_name" :price="data.price" :final-price="data.final_price" />
    </template>
  </SectionSlider>
  <!-- your favourite personality end -->
</template>

<script setup>
import { ref } from 'vue';
import SectionSlider from '../slider/SectionSlider.vue';
import CardShopGridView from '../merchandise/CategoryGridView.vue';
import { generateImgPath } from '../../StaticData/data';
defineProps({
  title: { type: String, default: 'header.related_merchandise' },
});
const list = ref([
  {
    id: 1,
    slug: 'bag-pack',
    product_name: 'shop.bag_pack',
    thumbnail: generateImgPath('/assets/images/shop/product/01.webp'),
    descriptio: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.',
    stock_status: 'shop.in_stock',
    tags: ['costume', 'lighting'],
    sku: 'Bag Pack',
    discount: '',
    price: '$28.00',
    final_price: '$25.00',
    customer_review: 2,
    is_sale: true,
    is_new: false,
    ratting: 4,
    additional_info: [
      {
        title: '',
        value: '',
        color: ['Green', 'Yellow'],
        size: ['L', 'M'],
      },
    ],
    created_at: '',
    category: ['marvel-studios', 'Uptight-Birds'],
  },
  {
    id: 2,
    slug: 'believe-mask',
    product_name: 'shop.believe_mask',
    thumbnail: generateImgPath('/assets/images/shop/product/02.webp'),
    descriptio: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
    stock_status: 'shop.in_stock',
    tags: ['Camera', 'Costume', 'Studio'],
    sku: 'Mask',
    discount: '',
    price: '',
    final_price: '$13.00',
    customer_review: 0,
    is_sale: false,
    is_new: false,
    ratting: 0,
    additional_info: [
      {
        title: '',
        value: '',
        color: ['Gray'],
        size: ['M', 'S'],
      },
    ],
    created_at: '',
    category: ['Disney-World', 'marvel-studios', 'Fantasia', 'The-Madrid'],
  },
  {
    id: 3,
    slug: 'black-bow',
    product_name: 'shop.black_bow',
    thumbnail: generateImgPath('/assets/images/shop/product/03.webp'),
    descriptio: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable.',
    stock_status: 'shop.in_stock',
    tags: ['Lighting', 'Studio'],
    sku: 'logo-collection',
    discount: '',
    final_price: '$18.00 – $45.00',
    customer_review: 1,
    is_sale: true,
    is_new: false,
    ratting: 0,
    additional_info: [
      {
        title: '',
        value: '',
        color: [],
        size: ['M', 'S'],
      },
    ],
    created_at: '',
    category: ['Activeman', 'Avengers', 'Harry-David', 'Haunted-Halloween', 'Marvel-Studios', 'marvel-studios', 'Quid-Game', 'The-Flashv', 'Warner-Bros-Films'],
  },
  {
    id: 4,
    slug: 'black-cap',
    product_name: 'shop.black_cap',
    thumbnail: generateImgPath('/assets/images/shop/product/04.webp'),
    category: ['marvel-studios', 'harry-david', 'warner-bros-films'],
    stock_status: 'shop.in_stock',
    descriptio: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable..',
    tags: ['Camera', 'Production'],
    sku: 'woo-beanie',
    discount: '',
    price: '$20.00',
    final_price: '$18.00',
    customer_review: 0,
    is_sale: false,
    is_new: true,
    ratting: 0,
    additional_info: [
      {
        title: '',
        value: '',
        color: ['Blue', 'Gray', 'Green', 'Red', 'Yellow'],
        size: ['l', 'm', 's'],
      },
    ],
    created_at: '',
  },
  {
    id: 5,
    slug: 'boxing-gloves',
    product_name: 'shop.boxing_gloves',
    thumbnail: generateImgPath('/assets/images/shop/product/05.webp'),
    descriptio: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
    stock_status: 'shop.in_stock',
    tags: ['lighting', 'production'],
    sku: 'Gloves',
    discount: '',
    price: '',
    final_price: '$17.00',
    customer_review: 1,
    is_sale: false,
    is_new: false,
    ratting: 5,
    additional_info: [
      {
        title: '',
        value: '',
        color: ['black', 'red', 'yellow'],
        size: ['l', 'm', 's'],
      },
    ],
    created_at: '',
    category: ['quid-game'],
  },
  {
    id: 6,
    slug: 'carry-bag',
    product_name: 'shop.carry_bag',
    thumbnail: generateImgPath('/assets/images/shop/product/06.webp'),
    descriptio: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.',
    stock_status: 'shop.in_stock',
    tags: ['production'],
    discount: '',
    price: '',
    final_price: '$18.00',
    customer_review: 0,
    is_sale: false,
    is_new: false,
    ratting: 0,
    additional_info: [
      {
        title: '',
        value: '',
        color: ['gray'],
        size: [],
      },
    ],
    created_at: '',
    category: ['harry-david', 'warner-bros-films'],
  },
]);
</script>
