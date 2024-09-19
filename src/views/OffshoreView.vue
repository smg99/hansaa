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
      headerText: "Cover solutions for Offshore foundations",
      paragraphText: `Protecting foundations against extreme weather conditions.`,
      images: [
        {
          src: "set5/Offshorefoundation.JPG",
          alt: "Offshore Foundation",
        },
        {
          src: "set5/Offshorefoundation1.JPG",
          alt: "Offshore Foundation",
        },
        {
          src: "set5/Offshorefoundation2.JPG",
          alt: "Offshore Foundation",
        },
        {
          src: "set5/Offshorefoundation3.JPG",
          alt: "Offshore Foundation",
        },
        {
          src: "set5/Offshorefoundation5.JPG",
          alt: "Offshore Foundation",
        },
        {
          src: "set5/Offshorefoundation9.JPG",
          alt: "Offshore Foundation",
        },
        {
          src: "set5/Offshorefoundation10.JPG",
          alt: "Offshore Foundation",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
.background {
  background-image: url("../set5/Offshorefoundation10.JPG");
}
</style>
