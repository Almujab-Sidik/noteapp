<script setup>
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div
    class="grid grid-rows-[auto_1fr_auto] min-h-screen px-4 sm:px-6 md:px-0 max-w-md mx-auto"
  >
    <main class="mt-10 w-full">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>
