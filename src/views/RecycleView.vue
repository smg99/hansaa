<template>
  <Element2
    class="recycle"
    :headerText="headerText"
    :items="items"
    :video="video"
  ></Element2>
</template>

<script>
import Element2 from "@/components/Element2.vue";
export default {
  components: {
    Element2,
  },
  data() {
    return {
      video: "set4/RECYCLE1.mov",
      headerText: "Recycle our covers - Make it new",
      items: [
        {
          src: "icons/icons8.png",
          label: "Retired covers are shredded into pieces",
        },
        {
          src: "icons/icons9.png",
          label: "Sorting of pieces and washing of FreeTarp",
        },
        {
          src: "icons/icons10.png",
          label: "The sorted PP material is transformed into granules",
        },
        {
          src: "icons/icons11.png",
          label: "The granules are used for new products",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
.background {
  background-image: url("/set4/RECYCLE.jpeg");
}

.recycle {
  max-height: 100vh;
  overflow: hidden;
}
</style>
