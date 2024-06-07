<template>
    <AppNav/>
    <router-view/>
    <AppBottom/>
  </template>
  
  <script>
  import AppNav from '@/components/AppNav.vue'
  import AppBottom from '@/components/AppBottom.vue'
  
  export default {
    components: {  AppNav, AppBottom },
  }
  </script>
  
  <style>
  
  </style>