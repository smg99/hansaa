<template>
  <Element2 :headerText="headerText" :items="items" :video="video"></Element2>
</template>

<script>
import Element2 from "@/components/Element2.vue";
export default {
  components: {
    Element2,
  },
  data() {
    return {
      video: "set4/HansAa_serviceprogram.mp4",
      headerText: "Reuse our covers - 20+ times",
      items: [
        {
          src: "icons/icons8.png",
          label: "Covers are washed and inspected",
        },
        {
          src: "icons/icons12.png",
          label: "Covers are repaired for maximum utilization",
        },
        {
          src: "icons/icons10.png",
          label: "Ready for reuse!",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
/* .background {
  background-image: url("set4/TOPCOVER.jpg");
} */

.background video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}
</style>
