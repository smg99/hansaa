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
          src: "icons/dn.jpg",
          label: "Denmark: Headquater",
        },
        {
          src: "icons/pl.png",
          label: "Poland: Manufacturing and refurbishment",
        },
        {
          src: "icons/us.jpg",
          label: "Nevada, US: Stock",
        },
        {
          src: "icons/cn2.png",
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
  background-image: url("icons/map.jpg");
}

.map-icon {
  position: absolute;
  background-repeat: round;
  width: 35px;
  height: 35px;
}
.us {
  background-image: url(../../icons/us2.png);
  top: 27%;
  left: 4%;
}

.dn {
  background-image: url(../../icons/dn.jpg);
  top: 14%;
  left: 43%;
}

.pl {
  background-image: url(../../icons/pl.png);
  top: 17%;
  left: 46%;
}

.cn {
  background-image: url(../../icons/cn2.png);
  top: 37%;
  left: 79%;
}
.cn2 {
  background-image: url(../../icons/cn2.png);
  top: 35%;
  left: 80%;
}
</style>
