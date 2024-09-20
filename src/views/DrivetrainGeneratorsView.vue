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
      headerText: "Cover solutions for Drivetrain/Generators",
      paragraphText: `Developed to meet very harsh environments and rough
                    handling, yet still suitable for multiple times reuse.`,
      images: [
        { src: "set6/Generator 2.jfif" },
        { src: "set6/Genrator.jfif" },
        {
          src: "set4/GENERATOR.JPG",
          alt: "Drivetrain Components",
        },
        {
          src: "set4/GENERATOR2.JPG",
          alt: "Drivetrain Components",
        },
        {
          src: "set4/GENERATOR1.JPG",
          alt: "Drivetrain Components",
        },
        {
          src: "set4/GENERATOR3.JPG",
          alt: "Drivetrain Components",
        },
        {
          src: "set4/GENERATOR4.JPG",
          alt: "Drivetrain Components",
        },
        {
          src: "set4/IMG_7541.JPG",
          alt: "Drivetrain Components",
        },
        {
          src: "set4/IMG_8036.JPG",
          alt: "Drivetrain Components",
        },
        {
          src: "set4/DRIVETRAIN MAIN.jpg",
          alt: "Drivetrain Components",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
.background {
  background-image: url("/set6/USE AS BACKGROUND FOR GENERAOTS.JPG");
}
</style>
