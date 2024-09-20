<template>
  <Element
    class="service"
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
      headerText: "Service solutions",
      paragraphText: `&nbsp;`,
      images: [
        {
          src: "set5/Service (1).JPEG",
          alt: "Service",
        },
        {
          src: "set5/Service (2).JPEG",
          alt: "Service",
        },
        {
          src: "set5/Service (2).JPG",
          alt: "Service",
        },
        {
          src: "set5/Service (3).JPEG",
          alt: "Service",
        },
        {
          src: "set5/Service (3).JPG",
          alt: "Service",
        },
        {
          src: "set5/Service (4).JPEG",
          alt: "Service",
        },
        {
          src: "set5/Service (4).JPG",
          alt: "Service",
        },
        {
          src: "set5/Service (5).JPEG",
          alt: "Service",
        },
        {
          src: "set5/Service (5).JPG",
          alt: "Service",
        },
        {
          src: "set5/Service (6).JPEG",
          alt: "Service",
        },
        {
          src: "set5/Service (6).JPG",
          alt: "Service",
        },
        {
          src: "set5/Service (7).JPG",
          alt: "Service",
        },
        {
          src: "set5/Service (8).JPG",
          alt: "Service",
        },
        {
          src: "set5/Service (9).JPG",
          alt: "Service",
        },
        {
          src: "set5/Service (10).JPG",
          alt: "Service",
        },
        {
          src: "set5/Service (11).JPG",
          alt: "Service",
        },
        {
          src: "set5/Service (12).JPG",
          alt: "Service",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
.background {
  background-image: url("/set5/Image for ESG strategy.jpg");
}
</style>
