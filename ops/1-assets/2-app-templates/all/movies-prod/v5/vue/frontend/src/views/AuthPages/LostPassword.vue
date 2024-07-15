<template>
  <section class="sign-in-page vh-100" :style="`background: url(${generateImgPath('./assets/images/pages/01.webp')}); background-size: cover; background-repeat: no-repeat; position: relative;min-height:500px;`">
    <div class="container">
      <div class="row justify-content-center align-items-center height-self-center vh-100">
        <div class="col-lg-5 col-md-12 align-self-center">
          <div class="user-login-card bg-body">
            <p>
              {{ $t('form.desc_enter1') }}
            </p>
            <form action="#">
              <div class="mb-5">
                <label class="text-white fw-500 mb-2">{{ $t('form.username_or_email') }}</label>
                <input type="text" class="form-control rounded-0" required="" />
              </div>
              <div class="iq-button">
                <a href="#" class="btn text-uppercase position-relative">
                  <span class="button-text">{{ $t('form.new_password') }}</span>
                  {{ '' }}
                  <i class="fa-solid fa-play"></i>
                </a>
              </div>
              <div class="seperator d-flex justify-content-center align-items-center">
                <span class="line"></span>
              </div>
              <div class="iq-button">
                <router-link :to="{ name: 'landing-page.login-page' }" class="btn text-uppercase position-relative">
                  <span class="button-text">{{ $t('restricted.log_in') }}</span>
                  {{ '' }}
                  <i class="fa-solid fa-play"></i>
                </router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { generateImgPath } from '../../StaticData/data';
</script>
