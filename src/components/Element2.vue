<template>
  <div class="background">
    <video v-if="video" :src="video" autoplay loop muted></video>
    <div class="close-icon" aria-label="Close" @click="goHome">
      <div class="line"></div>
      <div class="line"></div>
    </div>

    <div class="info-section">
      <h1>{{ headerText }}</h1>
      <div v-for="(item, index) in items" :key="`label-${index}`">
        <img :src="item.src" :alt="`alt-img-${index}`" :key="`img-${index}`" />
        <p v-html="item.label"></p>
      </div>
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
    items: Array,
    video: String,
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

.info-section {
  position: absolute;
  padding: 1.6vw;

  z-index: 10;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  background: white;
  opacity: 0.7;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: fit-content;
  display: block;
}

.info-section div {
  display: flex;
  align-items: center;
}

.info-section img {
  width: 5vw;
  margin-right: 1vw;
}
</style>
