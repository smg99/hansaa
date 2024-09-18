<template>
  <div>
    <!-- Burger Menu -->
    <div
      class="burger-menu"
      :class="{ active: isMenuOpen }"
      aria-label="Navigation menu"
      @click="toggleMenu"
    >
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </div>

    <!-- Side Menu -->
    <div :class="['menu', { active: isMenuOpen }]" id="menu">
      <ul>
        <li><RouterLink to="/">Hans Aa General Info</RouterLink></li>
        <li><RouterLink to="/esg">ESG Strategy</RouterLink></li>
        <li><RouterLink to="/repair">Repair & Reuse Program</RouterLink></li>
        <li><RouterLink to="/recycle">Recycling Program</RouterLink></li>
        <li><RouterLink to="/quality">Quality</RouterLink></li>
        <li><RouterLink to="/meet-us">Meet the Team</RouterLink></li>
        <li><RouterLink to="/engineering">Logo Engineering</RouterLink></li>
        <li><RouterLink to="/meet-us">Facilities, World Map</RouterLink></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped>
.burger-menu {
  position: absolute;
  top: 2vh;
  right: 2vw;
  width: 4vw;
  height: 6vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  z-index: 15;
}

.burger-menu .line {
  width: 100%;
  height: 1.5vh;
  background-color: var(--the-sands);
  transition: all 0.3s ease;
  border-radius: 15px;
}

.burger-menu.active .line:nth-child(1) {
  transform: rotate(45deg) translate(1vh, 1vh);
}

.burger-menu.active .line:nth-child(2) {
  opacity: 0;
}

.burger-menu.active .line:nth-child(3) {
  transform: rotate(-45deg) translate(1vh, -1vh);
}

.menu {
  position: absolute;
  top: 0;
  right: 0;
  width: 25vw;
  height: 100vh;
  background-color: var(--tarp-blue);
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
  z-index: 11;
  padding-top: 5vh;
}

.menu.active {
  transform: translateX(0);
}

.menu ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  text-align: left;
  padding-left: 2vw;
}

.menu ul li {
  margin-bottom: 3vh;
  font-size: 3vh;
}

.menu ul li a {
  color: var(--white);
  text-decoration: none;
  transition: color 0.3s;
}

.menu ul li a:hover {
  color: var(--sky-blue);
}

</style>
