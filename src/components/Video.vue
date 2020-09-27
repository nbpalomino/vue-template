<template>
  <!-- Section -->
  <div>
    <h2 class="fw-medium text-secondary text-center text-uppercase">{{title}}</h2>
    <section class="py-8 py-md-11 overflow-hidden">
      <div
        class="bg-container parallax"
        data-rellax-percentage="0.5"
        :style="'background-image: url('+image+');'"
      ></div>
      <div class="container-fluid">
        <div class="row align-items-center">
          <div class="col">
            <a data-fancybox :href="url" class="icon mx-auto align-items-center text">
              <i class="zmdi zmdi-play zmdi-hc-4x"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
  <!-- End of Section -->
</template>

<script>
export default {
  props: ["title", "url", "image"]
};
</script>

<style>
</style>