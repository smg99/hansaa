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
      headerText: "Cover solutions for towers",
      paragraphText: `We create tarpaulin cover solutions to protect wind turbine towers
        during on- and offshore transportation and during storage.`,
      images: [
        { src: "set6/Tower (2).jfif" },
        { src: "set6/Tower (3).jfif" },
        { src: "set6/Tower (4).jfif" },
        { src: "set6/Tower (5).jfif" },
        { src: "set6/Tower 1.jfif" },
        { src: "set6/Tower 11.jfif" },
        { src: "set6/Tower.jfif" },
        {
          src: "set3/TOWER1.JPG",
          alt: "Tower Solution 2",
        },
        {
          src: "set3/TOWER2.JPG",
          alt: "Tower Solution 3",
        },
        {
          src: "set3/TOWER4.JPG",
          alt: "Tower Solution 4",
        },
        {
          src: "set3/TOWER5.JPG",
          alt: "Tower Solution 5",
        },
        {
          src: "set3/TOWER6.JPG",
          alt: "Tower Solution 6",
        },
        {
          src: "set3/TOWER7.JPG",
          alt: "Tower Solution 7",
        },
        {
          src: "set3/TOWER8.JPG",
          alt: "Tower Solution 8",
        },
        {
          src: "set3/TOWER9.JPG",
          alt: "Tower Solution 9",
        },
        {
          src: "set3/TOWER10.JPG",
          alt: "Tower Solution 10",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
.background {
  background-image: url("/images/Towers.JPG");
}
</style>
