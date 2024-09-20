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
      headerText: "Cover solutions for HUBs",
      paragraphText: `Our in-house Engineering team creates the protective
covers in cooperation with our customers to ensure a
perfectly fitted protection cover.`,
      images: [
        { src: "set6/HUB (2).jfif" },
        { src: "set6/HUB (3).jfif" },
        { src: "set6/HUB (4).jfif" },
        {
          src: "set3/HubOnDeck_HansAa.jpg",
          alt: "HUB Solution 1",
        },
        { src: "set6/HUB 3.jfif" },
        { src: "set6/HUB.jfif" },
        { src: "set6/HUB4.jfif" },
        { src: "set6/HUB5 (1).jfif" },
        { src: "set6/HUB5 (2).jfif" },

        {
          src: "set3/HUB1.JPG",
          alt: "HUB Solution 1",
        },
        {
          src: "set3/HUB2.JPG",
          alt: "HUB Solution 2",
        },
        {
          src: "set3/HUB3.JPG",
          alt: "HUB Solution 1",
        },
        {
          src: "set3/HUB4.JPG",
          alt: "HUB Solution 1",
        },
        {
          src: "set3/HUB5.JPG",
          alt: "HUB Solution 1",
        },
        {
          src: "set3/HUB6.jpeg",
          alt: "HUB Solution 1",
        },
        {
          src: "set3/HUB7.JPG",
          alt: "HUB Solution 1",
        },
        {
          src: "set3/HUB8.JPG",
          alt: "HUB Solution 1",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
.background {
  background-image: url("/set6/USE AS HUB BACKGROUND.JPG");
}
</style>
