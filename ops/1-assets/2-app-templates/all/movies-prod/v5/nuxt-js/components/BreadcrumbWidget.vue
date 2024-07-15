<template>
  <div
    class="iq-breadcrumb"
    :style="`background-image: url(${generateImgPath(
      '/assets/images/pages/01.webp'
    )})`"
  >
    <b-container fluid>
      <b-row class="align-items-center">
        <b-col>
          <nav aria-label="breadcrumb" class="text-center">
            <h2 class="title">{{ pageName }}</h2>
            <ol class="breadcrumb justify-content-center">
              <li class="breadcrumb-item">
                <nuxt-link :to="{ name: 'index' }">{{
                  $t("header.home")
                }}</nuxt-link>
              </li>
              <li class="breadcrumb-item active">
                {{ pageName }}
              </li>
            </ol>
          </nav>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script setup>
import { generateImgPath } from "../StaticData/data";
import { useStremit } from "~/store/streamit";
const store = useStremit();
const pageName = computed(() => store.breadcrumb.name);
</script>
