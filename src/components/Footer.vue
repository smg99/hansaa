<template>
  <footer>
    <div class="side-logo-container">
      <div class="logo-item" @click="goPage('reuse')">
        <img
          src="@/assets/images/reuse.png"
          alt="Repair Reuse"
          class="side-logo"
        />
        <p class="logo-description">Reuse</p>
      </div>
      <div class="logo-item" @click="goPage('recycle')">
        <img
          src="@/assets/images/recycle.png"
          alt="Repair Reuse 2"
          class="side-logo"
        />
        <p class="logo-description">Recycle</p>
      </div>
      <div class="logo-item" @click="goPage('engineering')">
        <img
          src="@/assets/images/engineering.png"
          alt="Innovation The Sands"
          class="side-logo"
        />
        <p class="logo-description">Engineering</p>
      </div>
    </div>

    <!-- Company Logo -->
    <img
      src="@/assets/images/HansAa_The_sands_transparent.png"
      alt="Company Logo"
      class="logo"
    />
  </footer>
</template>
<script>
export default {
  methods: {
    goPage(page) {
      this.$router.push(`/${page}`);
    },
  },
};
</script>
<style scoped>
/* Footer and logo styling */
footer {
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  bottom: 0;
  width: 100%;
  position: absolute;
  display: block;
  height: 10%;
  opacity: 0.7;
  background: white;
}
footer,
.logo,
.side-logo-container {
  z-index: 99;
}

.logo {
  position: absolute;
  bottom: 0vh;
  right: 2vw;
  width: 15vw;
  height: auto;
  padding: 0vh;
  border-radius: 8px;
  z-index: 15;
}

.side-logo-container {
  position: absolute;
  bottom: 0vh;
  left: 4vw;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding: 0vh;
  border-radius: 8px;
  z-index: 15;
  height: 100%;
  align-items: center;
}

.logo-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0.5vw;
  cursor: pointer;
  height: 100%;
  justify-content: space-between;
}

.side-logo {
  /* height: 50px; */
  width: 3.5vw;
  padding-top: 0.5vw;
}

.logo-description {
  font-size: 0.8vw;
  color: var(--tarp-blue);
  text-align: center;
  font-family: "Nexa Slap Book";
}
</style>
