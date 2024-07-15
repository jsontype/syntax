<script setup lang="ts">
import GPanel from '../components/GPanel.vue'
import { Twitter, Github } from 'iconoir-vue'
import {
  LaLaravel,
  FaBandsVuejs,
  DeTypescriptOriginal,
  DeTailwindcssPlain,
  SiAlpinedotjs,
  SiLivewire
} from '@kalimahapps/vue-icons'
import GFonts from '@/assets/images/gfonts.png'
import MyWorks from '@/assets/images/my-works.png'
import Sign from '@/assets/images/sign.png'
import Star from '@/assets/images/star1.svg'

const user = {
  name: 'Mike Gatuma',
  profilePhoto:
    'data:image/jpeg;base64,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',
  occupation: 'Full-stack Developer',
  introduction:
    'I am a highly skilled and experienced full stack developer with a strong background in both frontend and backend technologies.',
  slogan:
    '#Laravel #VueJS #TailwindCSS #AlpineJS #InertiaJS #Livewire #Redis #Websockets #MySQL #PostgreSQL #AWS #DigitalOcean #Linux #Git #Docker #Nginx #Apache #PHP #JavaScript #TypeScript #HTML #CSS'
}

const news = [
  '<span>Latest work and <strong>Featured</strong></span>',
  '<a href=`#`>Latest work and <strong>Featured</strong></a>',
  '<span>Latest work and <strong>Featured</strong></span>'
]

const stats = [
  {
    number: 5,
    title: 'Years Experience',
    prefix: '+'
  },
  {
    number: 125,
    title: 'Clients Countrywide'
  },
  {
    number: 210,
    title: 'Total Projects'
  }
]
</script>

<template>
  <main>
    <!-- Grid Pane -->
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-6">
      <!-- User Info -->
      <GPanel to="#" span="2" :custom="true">
        <div class="bg-gray-200 rounded-tl-xl rounded-br-xl w-50 h-full">
          <img
            class="rounded-tl-xl rounded-br-xl w-50 h-full object-cover grayscale"
            :src="user.profilePhoto"
            alt=""
          />
        </div>
        <div class="flex flex-col gap-2 justify-center">
          <div class="uppercase text-sm">
            {{ user.occupation }}
          </div>
          <div class="text-4xl text-white font-semibold">
            {{ user.name }}
          </div>
          <div>
            {{ user.introduction }}
          </div>
        </div>
      </GPanel>

      <!-- About User -->
      <div class="flex flex-col gap-6 col-span-2">
        <!-- Headlines Marquee -->
        <div>
          <div
            class="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl flex flex-col justify-center px-4 py-3 border border-gray-800"
          >
            <marquee behavior="" direction="">
              <div class="flex gap-2">
                <div v-for="(headline, i) in news" :key="i" class="flex">
                  <img class="mx-2" decoding="async" :src="Star" alt="*" />
                  <span v-html="headline"></span>
                </div>
              </div>
            </marquee>
          </div>
        </div>

        <div class="grid grid-cols-4 sm:grid-cols-2 gap-6 w-full h-full">
          <!-- About -->
          <GPanel to="#" title="Credentials" subtitle="More About Me">
            <div>
              <img :src="Sign" alt="" />
            </div>
          </GPanel>

          <!-- Projects -->
          <GPanel to="#" title="Projects" subtitle="Showcase">
            <div>
              <img :src="MyWorks" alt="" />
            </div>
          </GPanel>
        </div>
      </div>

      <!-- Blog -->
      <GPanel to="#" title="Blog" subtitle="Useful Articles">
        <div>
          <img :src="GFonts" alt="" />
        </div>
      </GPanel>

      <!-- Services -->
      <GPanel to="#" span="2" title="Technology Stack" subtitle="Specialization">
        <div class="h-12 flex justify-between items-center text-white">
          <LaLaravel class="text-5xl text-red-500" />
          <FaBandsVuejs class="text-5xl text-[#41B883]" />
          <DeTypescriptOriginal class="text-4xl" />
          <DeTailwindcssPlain class="text-5xl text-[#07adca]" />
          <SiAlpinedotjs class="text-6xl text-cyan-400" />
          <SiLivewire class="text-5xl text-rose-400" />
        </div>
      </GPanel>

      <!-- Social -->
      <GPanel to="#" title="Profiles" subtitle="Stay with Me">
        <div
          class="bg-gradient-to-br from-gray-700 to-gray-900 border border-gray-700 rounded-3xl text-white flex items-center justify-between gap-2 p-4"
        >
          <Github
            class="bg-gradient-to-br from-gray-700 to-gray-800 border border-gray-700 rounded-full p-6 hover:text-gray-700 hover:from-gray-100 hover:to-gray-300 shadow-md hover:shadow-none shadow-black transition-all"
          />
          <Twitter
            class="bg-gradient-to-br from-gray-700 to-gray-900 border border-gray-700 rounded-full p-6 hover:text-gray-700 hover:from-gray-100 hover:to-gray-300 shadow-md hover:shadow-none shadow-black transition-all"
          />
        </div>
      </GPanel>

      <!-- Stats -->
      <GPanel span="2">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div
            v-for="(stat, i) in stats"
            :key="i"
            class="flex flex-col justify-center items-center bg-gray-800 rounded-3xl gap-5 px-4 py-9"
          >
            <div class="text-4xl text-white">
              <span v-if="stat.prefix">
                {{ stat.prefix }}
              </span>
              <number
                class="bold transition"
                ref="number2"
                :from="0"
                :to="stat.number"
                :duration="5"
                easing="Power4.easeOut"
              />
            </div>
            <div class="uppercase text-sm text-center">
              {{ stat.title }}
            </div>
          </div>
        </div>
      </GPanel>

      <!-- CTA -->
      <GPanel to="#" custom span="2" sparkle class="items-end">
        <div>
          <div class="text-5xl text-white">
            Let's<br />
            work <span class="text-blue-600">together</span>.
          </div>
          <div class="text-xs text-zinc-500 mt-2">
            {{ user.slogan }}
          </div>
        </div>
      </GPanel>

      <!-- Notice -->
      <GPanel to="#" span="4" custom>
        <div class="text-sm">
          <p>
            I created this portfolio using <a href="#" class="text-[#41B883]">Vue3</a> and
            <a href="#" class="text-[#07adca]">TailwindCSS</a> for my own needs.<br />
            You are free to fork and use it as you may wish.<br />
            Most features are yet to be implemented, so any contributions will be nice.
          </p>
          <div class="mt-6">
            <a
              target="_blank"
              href="https://github.com/michaelgatuma/vue-tailwindcss-portfolio"
              class="border border-gray-600 bg-gray-700 text-white px-6 py-3 rounded-xl hover:bg-white hover:text-gray-700 transition-all shadow-sm shadow-black"
            >
              View in Github
            </a>
          </div>
        </div>
      </GPanel>
    </div>
  </main>
</template>
