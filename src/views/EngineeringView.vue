<template>
  <Element
    :headerText="headerText"
    :subHeaderText="subHeaderText"
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
      headerText: "Innovative engineering",
      subHeaderText: `Our extensive experience in cover solutions, <br />
gives you the benefits of:`,
      paragraphText: `- Advanced in-house engineering <br/>
                      - Innovative tailored design <br/>
                      - Seamless integration from idea to
                       serial manufacturing <br/>
                      - Own production facilities worldwide <br/>
                      - Trusted Partner <br/>
                      - Efficient global delivery`,
      images: [
        {
          src: "set3/Trappe2.jpg",
          alt: "Engineering Solution",
        },
        {
          src: "set3/HubOnDeck_HansAa.jpg",
          alt: "Engineering Solution",
        },
        {
          src: "set3/HUB5.JPG",
          alt: "Engineering Solution",
        },
        {
          src: "set3/HUB9.jpeg",
          alt: "Engineering Solution",
        },
        {
          src: "set3/NACELLE1.JPG",
          alt: "Engineering Solution",
        },
        {
          src: "set3/ENGINEERING6.jpg",
          alt: "Engineering Solution",
        },
        {
          src: "set3/HUB.JPG",
          alt: "Engineering Solution",
        },
        {
          src: "set3/BLADE3.JPG",
          alt: "Engineering Solution",
        },
        {
          src: "set3/TOWER.JPG",
          alt: "Engineering Solution",
        },
        {
          src: "set3/vestas tower.JPG",
          alt: "Engineering Solution",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
.background {
  background-image: url("./set1/Good\ images/042_Hans-Aa_Siemens_Oesthavn-Esbjerg_CHO.JPG");
}
</style>
