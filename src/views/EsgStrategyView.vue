<template>
  <Element class="esg" :headerText="headerText"></Element>
  <div class="banner one">
    <span class="title">E</span>
    <span class="text">ENVIRONMENTAL</span>
  </div>
  <div class="banner two">
    <span class="title">S</span>
    <span class="text">SOCIAL</span>
  </div>
  <div class="banner three">
    <span class="title">G</span>
    <span class="text">GOVERNANCE</span>
  </div>

  <div class="ecw-section ecw-section1">
    <div class="item">
      <span class="title">ENERGY</span>
      <p class="text">
        Carbon neutral company by 2030 and reaching net zero by 2040.
      </p>
    </div>
    <div class="item">
      <span class="title">CIRCULARITY</span>
      <p class="text">
        Fully recyclable tarps by 2025. <br />
        Implement product take-back programs by 2030.
      </p>
    </div>
    <div class="item">
      <span class="title">WASTE</span>
      <p class="text">Recycle 50% production waste by 2025 and 100% by 2030.</p>
    </div>
  </div>

  <div class="ecw-section ecw-section2">
    <div class="item">
      <span class="title">SOCIAL RESPONSIBILITY</span>
      <p class="text">
        Consistently providing a healthy workplace that prioritizes safety
        inclusivity and social responisiblity.
      </p>
    </div>
    <div class="item">
      <span class="title">TRUSTWORTHY PARTNER</span>
      <p class="text">
        Consistently promoting ethical, honest and transperant business
        practices internally and across the value chain.
      </p>
    </div>
  </div>
</template>

<script>
import Element from "@/components/Element.vue";
export default {
  components: {
    Element,
  },
  data() {
    return {
      headerText: "Our suistainability targets",
    };
  },
  methods: {},
};
</script>

<style scoped>
.background {
  background-image: url("../set5/Image for ESG strategy.jpg");
}

.banner {
  position: absolute;
  top: 0;
  left: 50%;
  width: 12vw;
  height: 15vw;
  color: white;
  text-align: center;
  font-family: "Nexa Heavy Bold";
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.banner.one:after {
  color: var(--sky-blue);
}

.banner.two:after {
  color: var(--the-sands);
}

.banner.three:after {
  color: var(--tarp-blue);
}

.banner:after {
  border-left: 2vw solid;
  border-top: 6vw solid transparent;
  border-bottom: 6vw solid transparent;
  display: inline-block;
  content: "";
  position: absolute;
  top: 10vw;
  transform: rotate(90deg);
  right: 5vw;
}

.banner .title {
  font-size: 5vw;
  line-height: 5vw;
  display: block;
}
.banner .text {
  font-size: 1vw;
}

.banner.one {
  left: 45vw;
  background-color: var(--sky-blue);
}

.banner.two {
  left: 58vw;
  background-color: var(--the-sands);
}

.banner.three {
  left: 71vw;
  background-color: var(--tarp-blue);
}

.ecw-section {
  position: absolute;
  top: 57%;
  left: 7%;
  display: flex;
  width: 60%;
}

.ecw-section2 {
  width: 40%;
  left: 52%;
}

.ecw-section2 .item {
  margin-right: 5%;
}

.ecw-section1 .item {
  margin-right: -2%;
}

.ecw-section2 .item:nth-child(1) {
  background: var(--the-sands);
}

.ecw-section2 .item:nth-child(2) {
  background: var(--tarp-blue);
}

.ecw-section .item {
  background: var(--sky-blue);
  color: white;
  width: 15vw;
  height: 15vw;
  overflow: hidden;
  border-radius: 50%;
  text-align: center;
  padding: 2vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.item .title {
  font-family: "Nexa Heavy Bold";
  font-size: 1vw;
}

.item .text {
  font-family: "Nexa Slap Book";
  font-size: 0.9vw;
}
</style>
