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
      headerText: "Cover solutions for Electrical components",
      paragraphText: `The electrical components gets an extra level of protection with
            our alufiol, an humidity and air thight barrier.`,
      images: [
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
  background-image: url("../set4/Electrical components (2).JPG");
}
</style>
