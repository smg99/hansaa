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
      headerText: "Cover solutions for Blades",
      paragraphText: `Protection of wind turbine blades is crucial during
                      transportation and storage.
                      Together with our engineers and craftsmen,
                      we find the right solution for each blade type.`,
      images: [
        {
          src: "set3/BLADE1.JPG",
          alt: "Blade Solution",
        },
        {
          src: "set3/BLADE3.JPG",
          alt: "Blade Solution",
        },
        {
          src: "set3/BLADE4.JPG",
          alt: "Blade Solution",
        },
        {
          src: "set3/BLADE5.JPG",
          alt: "Blade Solution",
        },
        {
          src: "set3/BLADE6.JPG",
          alt: "Blade Solution",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
.background {
  background-image: url("/set1/042_Hans-Aa_Siemens_Oesthavn-Esbjerg_CHO.JPG");
}
</style>
