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
      headerText: "Cover solutions for Nacelles",
      paragraphText: `Our custom-fitted tarps help ensure that no
electronic or other sensitive installations are
damaged from dirt or water.`,
      images: [
        {
          src: "set3/NACELLE.JPG",
          alt: "Nacelle Solution 1",
        },
        {
          src: "set3/NACELLE1.JPG",
          alt: "Nacelle Solution 2",
        },
        {
          src: "set3/NACELLE2.JPG",
          alt: "Nacelle Solution 3",
        },
        {
          src: "set1/5 Nacelle/Picture 15.jpg",
          alt: "Nacelle Solution 5",
        },
        {
          src: "set1/5 Nacelle/Picture 17.JPG",
          alt: "Nacelle Solution 6",
        },
        {
          src: "set1/5 Nacelle/Picture 24.JPG",
          alt: "Nacelle Solution 7",
        },
        {
          src: "set1/5 Nacelle/Picture 25.JPG",
          alt: "Nacelle Solution 8",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
.background {
  background-image: url("../set3/NACELLE.JPG");
}
</style>
