<template>
  <Element
    class="ec"
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
      headerText: "Cover solutions for Electrical components",
      paragraphText: `The electrical components get extra protection with our alufoil – a humidity and air-tight barrier.`,
      images: [
        { src: "set6/Electrical C (2).jfif" },
        { src: "set6/Electrical c (3).jfif" },
        { src: "set6/Electrical C.jfif" },
        { src: "set6/ElectricalC.jfif" },
        {
          src: "set4/Electrical components (1).JPG",
          alt: "Electrical Components",
        },
        {
          src: "set4/ELECTRICALC1.JPG",
          alt: "Electrical Components",
        },
        {
          src: "set4/ELECTTRICAL.JPG",
          alt: "Electrical Components",
        },
        {
          src: "set4/ELECTRICAL2.JPG",
          alt: "Electrical Components",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
.background {
  background-image: url("/set4/Electrical components (2).JPG");
}
</style>
