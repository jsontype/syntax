<template>
  <div class="bd-example">
    <b-breadcrumb>
      <b-breadcrumb-item active>Home</b-breadcrumb-item>
    </b-breadcrumb>
    <b-breadcrumb>
      <b-breadcrumb-item href="#home" text="Home"></b-breadcrumb-item>
      <b-breadcrumb-item active>Library</b-breadcrumb-item>
    </b-breadcrumb>
    <b-breadcrumb>
      <b-breadcrumb-item href="#home" text="Home"></b-breadcrumb-item>
      <b-breadcrumb-item href="#libary" text="Library">Library</b-breadcrumb-item>
      <b-breadcrumb-item active>Data</b-breadcrumb-item>
    </b-breadcrumb>
  </div>
</template>
