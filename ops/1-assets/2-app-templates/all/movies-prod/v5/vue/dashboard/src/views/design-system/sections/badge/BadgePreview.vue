<template>
  <div class="bd-example">
    <p class="h1">Example heading <b-badge variant="primary">New</b-badge></p>
    <p class="h2">Example heading <b-badge variant="secondary">New</b-badge></p>
    <p class="h3">Example heading <b-badge variant="success">New</b-badge></p>
    <p class="h4">Example heading <b-badge variant="danger">New</b-badge></p>
    <p class="h5">Example heading <b-badge variant="warning text-white">New</b-badge></p>
    <p class="h6">Example heading <b-badge variant="info text-white">New</b-badge></p>
  </div>

  <div class="bd-example">
    <div class="row">
      <div class="col-sm-4">
        <b-button variant="primary">Notifications <b-badge variant="secondary">4</b-badge></b-button>
      </div>
      <div class="col-sm-3">
        <b-button variant="primary" class="position-relative">
          Inbox
          <b-badge variant="danger pill" text-indicator>
            99+
            <span class="visually-hidden">unread messages</span>
          </b-badge>
        </b-button>
      </div>
      <div class="col-sm-3">
        <b-button variant="primary" class="position-relative">
          Profile
          <b-badge variant="danger" dot-indicator>
            <span class="visually-hidden">New alerts</span>
          </b-badge>
        </b-button>
      </div>
    </div>
  </div>
  <div class="bd-example">
    <b-badge variant="primary " pill>Primary</b-badge>
    <b-badge variant="secondary mx-1" pill>Secondary</b-badge>
    <b-badge variant="success mx-1" pill>Success</b-badge>
    <b-badge variant="danger mx-1" pill>Danger</b-badge>
    <b-badge variant="warning mx-1" pill>Warning</b-badge>
    <b-badge variant="info mx-1" pill>Info</b-badge>
    <b-badge variant="light mx-1 text-dark" pill>Light</b-badge>
    <b-badge variant="dark " pill>Dark</b-badge>
  </div>
  <div class="bd-example">
    <b-badge variant="soft-primary " pill>Primary</b-badge>
    <b-badge variant="soft-secondary mx-1" pill>Secondary</b-badge>
    <b-badge variant="soft-success mx-1" pill>Success</b-badge>
    <b-badge variant="soft-danger mx-1" pill>Danger</b-badge>
    <b-badge variant="soft-warning mx-1" pill>Warning</b-badge>
    <b-badge variant="soft-info mx-1" pill>Info</b-badge>
    <b-badge variant="soft-light mx-1 text-dark" pill>Light</b-badge>
    <b-badge variant="soft-dark" pill>Dark</b-badge>
  </div>
  <div class="bd-example">
    <b-badge pill variant="soft-primary  iq-custom-badge">
      Primary
      <button class="btn btn-primary btn-sm rounded-pill iq-cancel-btn">
        <svg class="icon-14" width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </b-badge>
    <b-badge pill variant="soft-secondary  iq-custom-badge">
      Secondary
      <button class="btn btn-secondary btn-sm rounded-pill iq-cancel-btn">
        <svg class="icon-14" width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </b-badge>
    <b-badge pill variant="soft-success  iq-custom-badge mt-1 mt-sm-0">
      Success
      <button class="btn btn-success btn-sm rounded-pill iq-cancel-btn">
        <svg class="icon-14" width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </b-badge>
    <b-badge pill variant="soft-warning  iq-custom-badge mt-1 mt-sm-0">
      Warning
      <button class="btn btn-warning btn-sm rounded-pill iq-cancel-btn">
        <svg class="icon-14" width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </b-badge>
    <b-badge pill variant="soft-danger  iq-custom-badge mt-1 mt-sm-0">
      Danger
      <button class="btn btn-danger btn-sm rounded-pill iq-cancel-btn">
        <svg class="icon-14" width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </b-badge>
  </div>
  <div class="bd-example">
    <b-badge pill variant="soft-primary rounded iq-custom-badge">
      Primary
      <button class="btn btn-primary btn-sm rounded iq-cancel-btn">
        <svg class="icon-14" width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </b-badge>
    <b-badge pill variant="soft-secondary rounded iq-custom-badge">
      Secondary
      <button class="btn btn-secondary btn-sm rounded iq-cancel-btn">
        <svg class="icon-14" width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </b-badge>
    <b-badge pill variant="soft-success rounded iq-custom-badge mt-1 mt-sm-0">
      Success
      <button class="btn btn-success btn-sm rounded iq-cancel-btn">
        <svg class="icon-14" width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </b-badge>
    <b-badge pill variant="soft-warning rounded iq-custom-badge mt-1 mt-sm-0">
      Warning
      <button class="btn btn-warning btn-sm rounded iq-cancel-btn">
        <svg class="icon-14" width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </b-badge>
    <b-badge pill variant="soft-danger rounded iq-custom-badge mt-1 mt-sm-0">
      Danger
      <button class="btn btn-danger btn-sm rounded iq-cancel-btn">
        <svg class="icon-14" width="14" height="14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </b-badge>
  </div>
</template>
