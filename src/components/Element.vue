<template>
  <div class="background">
    <div class="close-icon" aria-label="Close" @click="goHome">
      <div class="line"></div>
      <div class="line"></div>
    </div>

    <div class="info-section">
      <h1>{{ headerText }}</h1>
      <h2 v-html="subHeaderText"></h2>
      <p v-html="paragraphText"></p>
    </div>

    <carousel
      :items-to-show="7"
      :wrap-around="true"
      class="marquee"
      :autoplay="5000"
    >
      <slide v-for="(image, index) in images" :key="`image-${index}`">
        <img :key="`image1-${index}`" :src="image.src" :alt="image.alt" />
      </slide>
    </carousel>

    <Footer />
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    Footer,
  },
  props: {
    backgroundImage: String,
    headerText: String,
    subHeaderText: String,
    paragraphText: String,
    images: Array,
  },
  data() {
    return {};
  },
  methods: {
    goHome() {
      this.$router.push("/");
    },
  },

  mounted() {
    // Fullscreen handling and other initialization code
    if (
      localStorage.getItem("fullscreen") === "true" &&
      !document.fullscreenElement
    ) {
      document.documentElement.requestFullscreen().catch((err) => {
        console.error(`Failed to enter fullscreen: ${err.message}`);
      });
    }
  },
};
</script>

<style scoped>
@import "@/assets/information.css";

.carousel__slide {
  /* align-items: flex-start; */
}

.ec .info-section {
  width: 65% !important;
}
</style>
