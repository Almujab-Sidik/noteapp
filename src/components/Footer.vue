<template>
  <footer class="w-full border-t mt-10 py-4 text-center text-sm text-gray-500">
    Built by
    <span class="font-semibold text-gray-700">Almujab Sidik</span> &mdash;
    &copy; {{ year }}.
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
</script>
