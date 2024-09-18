<script setup>
import { RouterLink, RouterView } from "vue-router";
import BurgerMenu from "./components/BurgerMenu.vue";
</script>

<template>
  <header>
    <BurgerMenu />
    <!-- <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div> -->
  </header>

  <RouterView />
</template>

<style scoped>
</style>
