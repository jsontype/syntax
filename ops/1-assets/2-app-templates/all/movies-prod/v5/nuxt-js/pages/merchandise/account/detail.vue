<template>
  <AccountLayout>
    <div class="p-4 text-body">
      <form>
        <div class="form-group mb-5">
          <label class="mb-2"
            >{{ $t("shop.first_name") }}&nbsp;
            <span class="text-danger">*</span></label
          >
          <input
            type="text"
            name="first-name"
            value="John"
            class="form-control"
            required="required"
          />
        </div>
        <div class="form-group mb-5">
          <label class="mb-2"
            >{{ $t("shop.last_name") }}&nbsp;
            <span class="text-danger">*</span></label
          >
          <input
            type="text"
            name="last-name"
            value="deo"
            class="form-control"
            required="required"
          />
        </div>
        <div class="form-group mb-5">
          <label class="mb-2"
            >{{ $t("shop.display_name") }}&nbsp;
            <span class="text-danger">*</span></label
          >
          <input
            type="text"
            name="display-name"
            value="John"
            class="form-control"
            required="required"
          />
        </div>
        <em class="d-block mb-5">{{ $t("shop.displayed_name") }}</em>
        <div class="form-group mb-5">
          <label class="mb-2"
            >{{ $t("shop.email_addess") }}&nbsp;
            <span class="text-danger">*</span></label
          >
          <input
            type="email"
            name="email"
            value="johndeo@gmail.com"
            class="form-control"
            required="required"
          />
        </div>
        <h4 class="fw-normal mb-5">{{ $t("shop.password_change") }}</h4>
        <div class="form-group mb-5">
          <label class="mb-2">{{ $t("shop.current_password") }}</label>
          <input type="password" name="password" class="form-control" />
        </div>
        <div class="form-group mb-5">
          <label class="mb-2">{{ $t("shop.new_password") }}</label>
          <input type="password" name="password" class="form-control" />
        </div>
        <div class="form-group mb-5">
          <label class="mb-2">{{ $t("shop.comfirm_password") }}</label>
          <input type="password" name="password" class="form-control" />
        </div>
        <div class="form-group">
          <div class="iq-button">
            <a
              href="javascript:void(0)"
              class="btn text-uppercase position-relative"
            >
              <span class="button-text">{{ $t("shop.save_changes") }}</span>
              <i class="fa-solid fa-play"></i>
            </a>
          </div>
        </div>
      </form>
    </div>
  </AccountLayout>
</template>
<script setup>
import AccountLayout from "./partials/AccountLayout.vue";
//custom hooks
import { useBreadcrumb } from "~/utilities/usePage";

useBreadcrumb("My Account");
</script>
