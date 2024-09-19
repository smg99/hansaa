<script setup>
import TheWelcome from "../components/TheWelcome.vue";
</script>

<template>
  <div class="img tower tower1"></div>
  <div class="img tower tower2"></div>
  <div class="img tower tower3"></div>
  <div class="img tower tower4"></div>
  <div class="img vessel"></div>
  <div class="img train"></div>
  <div class="img monopile monopile1"></div>
  <div class="img monopile monopile2"></div>
  <div class="img monopile monopile3"></div>
  <div class="home">
    <main
      style="
        display: flex;
        align-items: center;
        justify-content: center;
        align-content: center;
      "
    >
      <RouterLink to="/engineering">Engineering</RouterLink><br />
      <RouterLink to="/tower">Tower</RouterLink><br />
      <RouterLink to="/blade">Blades</RouterLink><br />
      <RouterLink to="/hub">Hubs</RouterLink><br />
      <RouterLink to="/nacelle">Nacelle</RouterLink>

      <RouterLink to="/ec">Electrical Components</RouterLink><br />
      <RouterLink to="/drivetrain-generators"
        >Drivetraing-Generators</RouterLink
      >
      <RouterLink to="/top-cover">Top Cover</RouterLink>
      <RouterLink to="/recycle">Recycle</RouterLink>
      <RouterLink to="/reuse">Reuse</RouterLink>
      <RouterLink to="/quality">Quality</RouterLink>
      <RouterLink to="/meet-us">Meet us</RouterLink>
    </main>
  </div>
</template>
<style scoped>
.home {
  background: #2f386c;
  background-image: url('@/assets/images/home/coastal.svg');
  width: 100%;
  height: 100%;
  position: absolute;
  background-repeat: round;
}

.img {
  background-repeat: round;
  position: absolute;
  z-index: 10;
}

.monopile {
  background-image: url("@/assets/images/home/monopile.png");
  width: 100px;
  height: 100px;
}

.monopile1 {
  top: 30%;
  left: 65%;
}

.monopile2 {
  top: 25%;
  left: 60%;
}
.monopile3 {
  top: 30%;
  left: 55%;
}

.vessel {
  background-image: url("@/assets/images/home/vessel.png");
  width: 200px;
  height: 200px;
  top: 20%;
  left: 84%;
}

.train {
  background-image: url("@/assets/images/home/train.png");
  width: 200px;
  height: 200px;
  top: 30%;
  left: 10%;
}

.tower {
  background-image: url("@/assets/images/home/tower1.png");
  width: 150px;
  height: 150px;
}

.tower1 {
  top: 8%;
  left: 8%;
}

.tower2 {
  top: 12%;
  left: 15%;
}
.tower3 {
  top: 10%;
  left: 68%;
}
.tower4 {
  top: 16%;
  left: 75%;
}
</style>