<template>
  <div class="section-padding">
    <b-container>
      <b-row>
        <b-col lg="4" md="6" class="mb-3 mb-lg-0">
          <div class="pricing-plan-wrapper">
            <div class="pricing-plan-header">
              <h4 class="plan-name text-capitalize text-body mb-0">
                {{ $t("pricing.free") }}
              </h4>
            </div>
            <div class="pricing-details">
              <div class="pricing-plan-description">
                <ul class="list-inline p-0">
                  <li>
                    <i class="fas fa-check text-primary"></i>
                    <span class="font-size-18 fw-500">{{
                      $t("pricing.free_movies")
                    }}</span>
                  </li>
                  <li>
                    <i class="fas fa-times"></i>
                    <span class="font-size-18 fw-500">{{
                      $t("pricing.watch_on_tv")
                    }}</span>
                  </li>
                  <li>
                    <i class="fas fa-times"></i>
                    <span class="font-size-18 fw-500"
                      >{{ $t("pricing.streamit_special") }}l</span
                    >
                  </li>
                  <li>
                    <i class="fas fa-times"></i>
                    <span class="font-size-18 fw-500">{{
                      $t("pricing.video_quality")
                    }}</span>
                  </li>
                </ul>
              </div>
              <div class="pricing-plan-footer">
                <div class="iq-button">
                  <a
                    href="javascript:void(0)"
                    class="btn text-uppercase position-relative"
                  >
                    <span class="button-text">{{
                      $t("pricing.select_free")
                    }}</span>
                    <i class="fa-solid fa-play"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </b-col>
        <b-col lg="4" md="6" class="mb-3 mb-lg-0">
          <div class="pricing-plan-wrapper">
            <div class="pricing-plan-discount bg-primary p-2 text-center">
              <span class="text-white">{{ $t("pricing.save") }} 20%</span>
            </div>
            <div class="pricing-plan-header">
              <h4 class="plan-name text-capitalize text-body">
                {{ $t("pricing.premium") }}
              </h4>
              <span class="sale-price text-decoration-line-through">$49</span>
              <span class="main-price text-primary">$39</span>
              <span class="font-size-18">/ 3 {{ $t("pricing.month") }}</span>
            </div>
            <div class="pricing-details">
              <div class="pricing-plan-description">
                <ul class="list-inline p-0">
                  <li>
                    <i class="fas fa-check text-primary"></i>
                    <span class="font-size-18 fw-500">{{
                      $t("pricing.free_movies")
                    }}</span>
                  </li>
                  <li>
                    <i class="fas fa-check text-primary"></i>
                    <span class="font-size-18 fw-500">{{
                      $t("pricing.watch_on_tv")
                    }}</span>
                  </li>
                  <li>
                    <i class="fas fa-check text-primary"></i>
                    <span class="font-size-18 fw-500">{{
                      $t("pricing.streamit_special")
                    }}</span>
                  </li>
                  <li>
                    <i class="fas fa-check text-primary"></i>
                    <span class="font-size-18 fw-500">{{
                      $t("pricing.video_quality")
                    }}</span>
                  </li>
                </ul>
              </div>
              <div class="pricing-plan-footer">
                <div class="iq-button">
                  <a
                    href="javascript:void(0)"
                    class="btn text-uppercase position-relative"
                  >
                    <span class="button-text">{{
                      $t("pricing.select_premium")
                    }}</span>
                    <i class="fa-solid fa-play"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </b-col>
        <b-col lg="4" md="6">
          <div class="pricing-plan-wrapper">
            <div class="pricing-plan-header">
              <h4 class="plan-name text-capitalize text-body">
                {{ $t("pricing.basic") }}
              </h4>
              <span class="main-price text-primary">$19</span>
              <span class="font-size-18">/ 1 {{ $t("pricing.month") }}</span>
            </div>
            <div class="pricing-details">
              <div class="pricing-plan-description">
                <ul class="list-inline p-0">
                  <li>
                    <i class="fas fa-times"></i>
                    <span class="font-size-18 fw-500">{{
                      $t("pricing.free_movies")
                    }}</span>
                  </li>
                  <li>
                    <i class="fas fa-check text-primary"></i>
                    <span class="font-size-18 fw-500">{{
                      $t("pricing.watch_on_tv")
                    }}</span>
                  </li>
                  <li>
                    <i class="fas fa-check text-primary"></i>
                    <span class="font-size-18 fw-500">{{
                      $t("pricing.streamit_special")
                    }}</span>
                  </li>
                  <li>
                    <i class="fas fa-check text-primary"></i>
                    <span class="font-size-18 fw-500">{{
                      $t("pricing.video_quality")
                    }}</span>
                  </li>
                </ul>
              </div>
              <div class="pricing-plan-footer">
                <div class="iq-button">
                  <a
                    href="javascript:void(0)"
                    class="btn text-uppercase position-relative"
                  >
                    <span class="button-text">{{
                      $t("pricing.select_basic")
                    }}</span>
                    <i class="fa-solid fa-play"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script setup>
//custom hook
import { useBreadcrumb } from "~/utilities/usePage";

useBreadcrumb("Pricing Plan");
</script>
