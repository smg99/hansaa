<template>
  <Element
    :headerText="headerText"
    :paragraphText="paragraphText"
    :images="images"
  ></Element>
</template>

<script>
import Element from "@/components/Element.vue";
export default {
  components: {
    Element,
  },
  data() {
    return {
      headerText: "Top cover solutions",
      paragraphText: `We create and produce fitted top covers for erected tower sections as a climate barrier to the rising wind turbine towers.`,
      images: [
        {
          src: "set4/TOPCOVER1.JPEG",
          alt: "Top Cover",
        },
        {
          src: "set4/TOPCOVER2.JPEG",
          alt: "Top Cover",
        },
        {
          src: "set4/TOPCOVER3.JPG",
          alt: "Top Cover",
        },
        {
          src: "set4/TOPCOVER4.JPG",
          alt: "Top Cover",
        },
        {
          src: "set4/TOPCOVER6.JPG",
          alt: "Top Cover",
        },
        {
          src: "set4/TOPCOVER7.JPG",
          alt: "Top Cover",
        },
        {
          src: "set4/TOPCOVER8.JPG",
          alt: "Top Cover",
        },
        {
          src: "set4/TOPCOVER9.JPG",
          alt: "Top Cover",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
.background {
  background-image: url("../set4/TOPCOVER.jpg");
}
</style>
