<script>
export default {
    name: "NAVBAR",
   
}
</script>

<template>
    <BNav class="fixed top-0 z-50 w-full border-b-2 mobile-menu-bg py-7 bg-dark mobile-nav stickyadd border-white/10" id="navbar">
        <div class="container">
                        <div class="flex items-center justify-between md:block">
                            <div class="flex items-center justify-between w-full">
                                <div class="relative z-50">
                                    <a href="/">
                                        <img src="@/assets/images/logo-light.svg" alt="" class="h-10">
                                    </a>
                                </div>
                                <div class="flex items-center gap-5 lg:hidden">
                                    <button class="block text-white outline-none lg:hidden mobile-menu-button">
                                        <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect opacity="0.3" x="3" y="17.2" width="18" height="1.6" rx="0.8" fill="currentColor"></rect>
                                            <rect opacity="0.5" x="3" y="11.6" width="18" height="1.6" rx="0.8" fill="currentColor"></rect>
                                            <rect x="3" y="6" width="18" height="1.6" rx="0.8" fill="currentColor"></rect>
                                        </svg>
                                    </button>
                                </div>
                                <div class="hidden lg:block">
                                    <ul class="flex items-center text-white list-none space-x-7 rtl:space-x-reverse all-nav">
                                        <li class="home active"><a v-smooth-scroll href="#home" class="inline-block py-2 font-semibold leading-6 duration-300">Home</a></li>
                                        <li class="about"><a v-smooth-scroll href="#about" class="inline-block py-2 font-semibold leading-6 duration-300">About Me</a></li>
                                        <li class="services"><a v-smooth-scroll href="#services" class="inline-block py-2 font-semibold leading-6 duration-300">Services</a></li>
                                        <li class="work"><a v-smooth-scroll href="#work" class="inline-block py-2 font-semibold leading-6 duration-300">Projects</a></li>
                                        <li class="client"><a v-smooth-scroll href="#client" class="inline-block py-2 font-semibold leading-6 duration-300">Client</a></li>
                                        <li class="blog"><a v-smooth-scroll href="#blog" class="inline-block py-2 font-semibold leading-6 duration-300">Blog</a></li>
                                        <a v-smooth-scroll href="#contact" class="inline-block px-5 py-3 font-semibold leading-none transition-all duration-300 bg-white border border-white text-dark hover:bg-white/90">Let’s Chat</a>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="hidden lg:hidden mobile-menu">
                            <div class="pt-5">
                                <ul class="text-white">
                                    <li class="home active"><a v-smooth-scroll href="#home" class="inline-block py-2 font-semibold leading-6 duration-300">Home</a></li>
                                    <li class="about"><a v-smooth-scroll href="#about" class="inline-block py-2 font-semibold leading-6 duration-300">About Me</a></li>
                                    <li class="services"><a v-smooth-scroll href="#services" class="inline-block py-2 font-semibold leading-6 duration-300">Services</a></li>
                                    <li class="work"><a v-smooth-scroll href="#work" class="inline-block py-2 font-semibold leading-6 duration-300">Projects</a></li>
                                    <li class="client"><a v-smooth-scroll href="#client" class="inline-block py-2 font-semibold leading-6 duration-300">Client</a></li>
                                    <li class="blog"><a v-smooth-scroll href="#blog" class="inline-block py-2 font-semibold leading-6 duration-300">Blog</a></li>
                                    <a v-smooth-scroll href="#contact" class="inline-block px-5 py-3 mt-3 font-semibold leading-none transition-all duration-300 bg-white border border-white text-dark hover:bg-white/90">Let’s Chat</a>
                                </ul>
                            </div>
                        </div>
                    </div>
    </BNav>
</template>