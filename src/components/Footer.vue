<template>
  <footer class="flex h-20 flex-col items-center gap-2">
    <a
      href="#home"
      class="duration-300 ease-out hover:-translate-y-1 hover:opacity-75"
      aria-label="Back to Top"
    >
    </a>

    <hr class="w-4/5" />

    <p class="text-sm md:text-base">
      &copy; 2021 - <time :datetime="currentYear">{{ currentYear }}</time> -
      Made with ❤ by
      <a
        class="hover:text-blue-500"
        href="https://github.com/zhon12345"
        target="_blank"
        rel="noopener noreferrer"
      >
        zhon12345
      </a>
    </p>
  </footer>
</template>

<script setup lang="ts">
import { computed } from "vue";

const currentYear = computed(() => new Date().getFullYear().toString());
</script>
