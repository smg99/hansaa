<script setup>
import TheWelcome from "../components/TheWelcome.vue";
</script>

<template>
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
    <RouterLink to="/drivetrain-generators">Drivetraing-Generators</RouterLink>
    <RouterLink to="/top-cover">Top Cover</RouterLink>
    <RouterLink to="/recycle">Recycle</RouterLink>
    <RouterLink to="/reuse">Reuse</RouterLink>
    <RouterLink to="/quality">Quality</RouterLink>
    <RouterLink to="/meet-us">Meet us</RouterLink>
  </main>
</template>
