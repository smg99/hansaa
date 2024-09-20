<template>
  <Element2 :headerText="headerText" :items="items" page="quality"></Element2>
</template>

<script>
import Element2 from "@/components/Element2.vue";
export default {
  components: {
    Element2,
  },
  data() {
    return {
      headerText: "Quality commitment",
      items: [
        {
          src: "icons/QualitySysCert_ISO9001_col.png",
          label: `With our certificates, we wish to show that we are
                  a trustworthy, delivery safe and flexible partner
                  who meet the expectations from our customers,
                  employees, and authorities.`,
        },
        {
          src: "icons/SafetySysCert_ISO45001_col.png",
          label: ``,
        },
        {
          src: "icons/EnvironmentalSysCert_ISO14001_col.png",
          label: `We aim for constant development of our business,
                  our management, and our employees by always
                  working to ensure a safe working environment,
                  maintain quality and optimize our performance
                  and processes.`,
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
.background {
  background-image: url("/images/5.JPG");
}
</style>
