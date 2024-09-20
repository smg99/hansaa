<template>
  <Element2 :headerText="headerText" :items="items"></Element2>
  <div class="us map-icon"></div>
  <div class="dn map-icon"></div>
  <div class="pl map-icon"></div>
  <div class="cn map-icon"></div>
  <div class="cn2 map-icon"></div>
</template>

<script>
import Element2 from "@/components/Element2.vue";
export default {
  components: {
    Element2,
  },
  data() {
    return {
      headerText: "Meet us worldwide",
      items: [
        {
          src: "icons/dn1.png",
          label: "Denmark: Headquarter and product development",
        },
        {
          src: "icons/pl1.png",
          label: "Poland: Manufacturing and refurbishment",
        },
        {
          src: "icons/us1.png",
          label: "Nevada, US: Stock",
        },
        {
          src: "icons/cn1.png",
          label: "China: Manufacturing and refurbishment ",
        },
      ],
    };
  },
  methods: {},
};
</script>

<style scoped>
.background {
  background-image: url("/icons/map.jpg");
}

.map-icon {
  position: absolute;
  background-repeat: round;
  width: 1.6vw;
  height: 1.6vw;
}
.us {
  background-image: url(/icons/us1.png);
  top: 27vh;
  left: 4vw;
}

.dn {
  background-image: url(/icons/dn1.png);
  top: 16vh;
  left: 44.5vw;
}

.pl {
  background-image: url(/icons/pl1.png);
  top: 18vh;
  left: 46vw;
}

.cn {
  background-image: url(/icons/cn1.png);
  top: 38vh;
  left: 80vw;
}
.cn2 {
  background-image: url(/icons/cn1.png);
  top: 36vh;
  left: 80.5vw;
}
</style>
