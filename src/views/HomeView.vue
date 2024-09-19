
<template>
  <div class="home">
    <!-- <video src="/set1/Hero_4K.mov" autoplay loop muted></video> -->
    <video src="/set1/01_Topbanner_forside.mp4" autoplay loop muted></video>
    <div class="navigation">
      <p>Protective solutions for the future of energy</p>
      <div class="line">
        <RouterLink to="/tower">Towers</RouterLink>
        <RouterLink to="/nacelle">Nacelles</RouterLink>
        <RouterLink to="/top-cover">Top Covers</RouterLink>
      </div>
      <div class="line">
        <RouterLink to="/blade">Blades</RouterLink>
        <RouterLink to="/ec">Electrical Components</RouterLink>
        <RouterLink to="/offshore">Offshore foundations</RouterLink>
      </div>
      <div class="line">
        <RouterLink to="/hub">HUBs</RouterLink>
        <RouterLink to="/drivetrain-generators"
          >Drivetrain/ <br />generators</RouterLink
        >
        <RouterLink to="/service">Service</RouterLink>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Footer from "@/components/Footer.vue";
export default {
  components: { Footer },
};
</script>

<style scoped>
.home .navigation {
  position: absolute;
  top: 55%;
  padding: 1% 3%;
  left: 50%;
  transform: translate(-50%);
  background: #2f386c9e;
}
.navigation p {
  color: white;
  font-family: "Nexa Heavy Bold";
  text-align: center;
  font-size: 1.5vw;
}

.navigation .line {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navigation .line a {
  font-family: "Nexa Slap Book";
  font-weight: bold;
  background: white;
  margin: 1%;
  color: var(--tarp-blue);
  border-radius: 5px;
  padding: 1.5% 4%;
  text-align: center;
  line-height: 1vw;
  width: 10vw;
  height: 3vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
.home video {
  width: 100%;
  height: 100%;
}

.home {
  max-height: 100vh;
  overflow: hidden;
}
</style>