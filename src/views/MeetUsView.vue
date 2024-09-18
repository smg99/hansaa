<template>
  <Element2 :headerText="headerText" :items="items"></Element2>
</template>

<script>
import Element2 from "@/components/Element2.vue";
export default {
  components: {
    Element2,
  },
  data() {
    return {
      headerText: "Meet us worldwide",
      items: [
        {
          src: "icons/dn.jpg",
          label: "Denmark: Headquater",
        },
        {
          src: "icons/pl.png",
          label: "Poland: Manufacturing and refurbishment",
        },
        {
          src: "icons/us.jpg",
          label: "Nevada, US: Stock",
        },
        {
          src: "icons/cn.png",
          label: "China: Manufacturing and refurbishment ",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
.background {
  background-image: url("icons/map.jpg");
}

.info-section img {
  
}
</style>
