<script lang="ts" setup>
import { ref } from 'vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/autoplay";
import 'swiper/css/pagination';

const navigationOptions = {
    nextEl: ".client-review .swiper-btn-next",
    prevEl: ".client-review .swiper-btn-prev",
};
const modules = ref([Autoplay, Pagination, Navigation , Autoplay]);
// Define Swiper instance
const swiperInstance = ref<Swiper | null>(null);

// Function to go to previous slide
const prevSlide = () => {
    if (swiperInstance.value) {
        swiperInstance.value.slidePrev();
    }
};

// Function to go to next slide
const nextSlide = () => {
    if (swiperInstance.value) {
        swiperInstance.value.slideNext();
    }
};
</script>

<template>
    <!-- Start Testimonial -->
    <section class="py-16 md:py-24 client-review bg-gray/5 dark:bg-white/[4%]" id="client">
        <div class="container">
            <div class="grid grid-cols-1">
                <div class="items-end justify-between lg:flex space-y-7 lg:space-y-0" data-aos="fade-up">
                    <div>
                        <div class="inline-block">
                            <p class="bg-purple text-white text-sm font-semibold py-3 px-5 uppercase rounded-full flex items-center gap-2.5">
                                <span>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4.33454 9.58362C5.35965 9.83993 6.16007 10.6403 6.41638 11.6655L7.37875 15.5149C7.45002 15.8 7.70616 16 8 16C8.29384 16 8.54998 15.8 8.62125 15.5149L9.58362 11.6655C9.83993 10.6403 10.6403 9.83993 11.6655 9.58362L15.5149 8.62125C15.8 8.54998 16 8.29384 16 8C16 7.70616 15.8 7.45002 15.5149 7.37875L11.6655 6.41638C10.6403 6.16007 9.83993 5.35965 9.58362 4.33454L8.62125 0.485071C8.54998 0.199992 8.29384 0 8 0C7.70616 0 7.45002 0.199991 7.37875 0.485071L6.41638 4.33454C6.16007 5.35965 5.35965 6.16007 4.33454 6.41638L0.485071 7.37875C0.199992 7.45002 0 7.70616 0 8C0 8.29384 0.199991 8.54998 0.485071 8.62125L4.33454 9.58362Z" fill="currentColor"></path>
                                    </svg>
                                </span>
                                Testimonials
                            </p>
                        </div>
                        <h2 class="font-semibold text-[26px]/normal mt-7">Illuminating Testimonials from Satisfied Clients</h2>
                    </div>
                    <div class="flex items-center justify-center gap-5 swiper-btn text-gray">
                        <button @click="prevSlide" class="swiper-btn-prev border-2 h-[42px] w-[42px] flex items-center justify-center border-gray/[16%] hover:text-purple duration-300">
                            <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.94995 2.44995L2.39995 6.99995L6.94995 11.5499" stroke="currentColor" stroke-width="2.6" stroke-linecap="square" />
                            </svg>
                        </button>
                        <button @click="nextSlide" class="swiper-btn-next border-2 h-[42px] w-[42px] flex items-center justify-center border-gray/[16%] hover:text-purple duration-300">
                            <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.05005 2.44995L6.60005 6.99995L2.05005 11.5499" stroke="currentColor" stroke-width="2.6" stroke-linecap="square" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <Swiper :modules="modules" :navigation="navigationOptions" spaceBetween="30" slidesPerView="1" slides-per-view="2" class="client-review-slider mt-14" dir="ltr" ref="swiper" :autoplay="{ delay: 3000 }" :loop="true">
                <SwiperSlide>
                    <div class="border-2 border-gray/[14%] md:flex-row flex-col p-5 flex items-start gap-7">
                        <div class="shrink-0">
                            <img src="@/assets/images/testimonial/1.png" alt="">
                        </div>
                        <div>
                            <p class="font-medium leading-8">"Mitchell Hancock delivered design perfection, exceeding all expectations with their creative genius and impeccable attention to detail."</p>
                            <p class="mt-8 font-semibold">Dorothy Williams</p>
                            <p class="mt-2 text-purple">Mars Technologies</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="border-2 border-gray/[14%] md:flex-row flex-col p-5 flex items-start gap-7">
                        <div class="shrink-0">
                            <img src="@/assets/images/testimonial/2.png" alt="">
                        </div>
                        <div>
                            <p class="font-medium leading-8">"Mitchell Hancock delivered design perfection, exceeding all expectations with their creative genius and impeccable attention to detail."</p>
                            <p class="mt-8 font-semibold">Dorothy Williams</p>
                            <p class="mt-2 text-purple">Mars Technologies</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="border-2 border-gray/[14%] md:flex-row flex-col p-5 flex items-start gap-7">
                        <div class="shrink-0">
                            <img src="@/assets/images/testimonial/2.png" alt="">
                        </div>
                        <div>
                            <p class="font-medium leading-8">"Mitchell Hancock delivered design perfection, exceeding all expectations with their creative genius and impeccable attention to detail."</p>
                            <p class="mt-8 font-semibold">Dorothy Williams</p>
                            <p class="mt-2 text-purple">Mars Technologies</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="border-2 border-gray/[14%] md:flex-row flex-col p-5 flex items-start gap-7">
                        <div class="shrink-0">
                            <img src="@/assets/images/testimonial/2.png" alt="">
                        </div>
                        <div>
                            <p class="font-medium leading-8">"Mitchell Hancock delivered design perfection, exceeding all expectations with their creative genius and impeccable attention to detail."</p>
                            <p class="mt-8 font-semibold">Dorothy Williams</p>
                            <p class="mt-2 text-purple">Mars Technologies</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="border-2 border-gray/[14%] md:flex-row flex-col p-5 flex items-start gap-7">
                        <div class="shrink-0">
                            <img src="@/assets/images/testimonial/2.png" alt="">
                        </div>
                        <div>
                            <p class="font-medium leading-8">"Mitchell Hancock delivered design perfection, exceeding all expectations with their creative genius and impeccable attention to detail."</p>
                            <p class="mt-8 font-semibold">Dorothy Williams</p>
                            <p class="mt-2 text-purple">Mars Technologies</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="border-2 border-gray/[14%] md:flex-row flex-col p-5 flex items-start gap-7">
                        <div class="shrink-0">
                            <img src="@/assets/images/testimonial/2.png" alt="">
                        </div>
                        <div>
                            <p class="font-medium leading-8">"Mitchell Hancock delivered design perfection, exceeding all expectations with their creative genius and impeccable attention to detail."</p>
                            <p class="mt-8 font-semibold">Dorothy Williams</p>
                            <p class="mt-2 text-purple">Mars Technologies</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="border-2 border-gray/[14%] md:flex-row flex-col p-5 flex items-start gap-7">
                        <div class="shrink-0">
                            <img src="@/assets/images/testimonial/2.png" alt="">
                        </div>
                        <div>
                            <p class="font-medium leading-8">"Mitchell Hancock delivered design perfection, exceeding all expectations with their creative genius and impeccable attention to detail."</p>
                            <p class="mt-8 font-semibold">Dorothy Williams</p>
                            <p class="mt-2 text-purple">Mars Technologies</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    </section>
    <!-- End Testimonial -->
</template>