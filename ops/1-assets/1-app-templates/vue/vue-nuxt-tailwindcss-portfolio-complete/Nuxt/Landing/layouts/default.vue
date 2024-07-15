<script setup lang="ts">
import { ref, onMounted } from 'vue';
import AOS from 'aos';
import Navbar from "../components/navbar.vue";
import Service from "../components/service.vue";
import Blog from "../components/blog.vue";
import Testimonial from "../components/testimonial.vue";
import Skill from "../components/skill.vue";
import Education from "../components/education.vue";
import Work from "../components/work.vue";
import Footer from "../components/footer.vue";
import 'aos/dist/aos.css';

// Define refs
const navbar = ref<HTMLElement | null>(null);
const sections = ref<NodeListOf<HTMLElement> | null>(null);
const navLi = ref<NodeListOf<HTMLElement> | null>(null);

// Define reactive properties
const direction = ref<'ltr' | 'rtl'>('ltr');
const theme = ref<'light' | 'dark'>('light');

// Toggle direction function
const toggleDirection = () => {
    direction.value = direction.value === 'ltr' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute("dir", direction.value); // Toggle direction
};

// Toggle theme function
const toggleTheme = () => {
    theme.value = theme.value === 'light' ? 'dark' : 'light';
    document.documentElement.classList.toggle('dark', theme.value === 'dark'); // Toggle theme
};

// Handle scroll function
const handleScroll = () => {
    let current = "";

    sections.value?.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
            current = section.id;
        }
    });

    navLi.value?.forEach((li) => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
            li.classList.add("active");
        }
    });
};

// On mounted hook
onMounted(() => {
    navbar.value = document.querySelector("nav");
    sections.value = document.querySelectorAll("section");
    navLi.value = document.querySelectorAll(".mobile-nav ul li");
    document.body.classList.add("text-base", "antialiased", "font-normal", "font-sora");
    window.addEventListener('scroll', handleScroll);
    AOS.init({
        easing: 'ease-in-out-sine',
        duration: 2000
    }); // Initialize AOS
});
</script>

<template>
    <div class="bg-white text-dark dark:text-white dark:bg-dark">
        <Navbar />
        <slot />
        <Service />
        <Education />
        <Skill />
        <Work />
        <Testimonial />
        <Blog />
        <Footer />
    </div>
    <div class="fixed z-50 flex flex-col gap-3 ltr:left-0 rtl:right-0 top-1/3">
        <button type="button" class="inline-block px-4 text-white border-gray-200 shadow-lg h-11 bg-purple ltr:rounded-r-md rtl:rounded-l-md" @click="toggleDirection">
            <span v-if="direction === 'ltr'">RTL</span>
            <span v-else>LTR</span>
        </button>
        <button type="button" class="inline-block px-4 text-white border-gray-200 shadow-lg h-11 bg-sky-500 ltr:rounded-r-md rtl:rounded-l-md" @click="toggleTheme">
            <span v-if="theme === 'light'">Dark</span>
            <span v-else>Light</span>
        </button>
    </div>
</template>
