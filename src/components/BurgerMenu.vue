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
        <li><a @click="goPage('esg')">Our ESG Goals</a></li>
        <li><a @click="goPage('reuse')">Reuse our covers</a></li>
        <li><a @click="goPage('recycle')">Recycling of our covers</a></li>
        <li><a @click="goPage('quality')">Quality</a></li>
        <li><a @click="goPage('engineering')">Engineering</a></li>
        <li><a @click="goPage('meet-us')">Our facilities</a></li>
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
    goPage(page) {
      this.isMenuOpen = false;
      this.$router.push(`/${page}`);
    },
  },
};
</script>

<style scoped>
#menu a{
  cursor: pointer;
}
.burger-menu {
  position: absolute;
  top: 4%;
  right: 4%;
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
  transform: rotate(45deg) translate(2vh, 2vh);
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
  font-family: "Nexa Heavy Bold";
}

.menu ul li a:hover {
  color: var(--sky-blue);
}
</style>
