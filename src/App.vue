<template>
  <router-view/>
</template>
<script>
export default {
  //禁止浏览器缩放
  created() {
    window.addEventListener(
      "mousewheel",
      function (event) {
        if (event.ctrlKey === true || event.metaKey) {
          event.preventDefault();
        }
      },
      { passive: false }
    );
    //firefox
    window.addEventListener(
      "DOMMouseScroll",
      function (event) {
        if (event.ctrlKey === true || event.metaKey) {
          event.preventDefault();
        }
      },
      { passive: false }
    );
  },
 }
</script>
<style>

</style>
