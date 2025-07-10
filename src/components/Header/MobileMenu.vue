<template>
  <!-- Hamburger Menu -->
  <button
    ref="hamburger"
    class="relative md:hidden"
    @pointerup="isMenuOpen = !isMenuOpen"
    aria-label="Toggle Dropdown Menu"
  >
    <div class="*:bg-text cursor-pointer space-y-1.5 *:block *:h-0.5 *:w-6 *:duration-200 *:motion-reduce:duration-50">
      <span :class="{ 'translate-y-2 rotate-45': isMenuOpen }"></span>
      <span :class="{ 'scale-0': isMenuOpen }"></span>
      <span :class="{ '-translate-y-2 -rotate-45': isMenuOpen }"></span>
    </div>
  </button>

  <!-- Mobile Dropdown Menu -->
  <Teleport to="#dropdown">
    <ul
      ref="dropdown"
      class="bg-surface fixed top-16 left-0 flex w-full flex-col gap-3 pb-5 text-lg shadow-xl/20 duration-400 motion-reduce:duration-100 md:hidden"
      :class="isMenuOpen ? 'pointer-events-auto translate-y-0' : 'pointer-events-none -translate-y-full'"
    >
      <li v-for="item in props.menuItems" :key="item.name" class="w-full text-center" @click="isMenuOpen = false">
        <a :href="item.href" class="hover:underline">
          {{ item.name }}
        </a>
      </li>
    </ul>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, watch, onBeforeUnmount } from "vue";

const props = defineProps<{
  menuItems: { name: string; href: string }[];
}>();

const isMenuOpen = ref(false);
const hamburger = ref<HTMLElement | null>(null);
const dropdown = ref<HTMLElement | null>(null);

function handleClickOutside(event: MouseEvent) {
  const target = event.target as Node;
  if (dropdown.value && !dropdown.value.contains(target) && hamburger.value && !hamburger.value.contains(target)) {
    isMenuOpen.value = false;
  }
}

watch(isMenuOpen, (open) => {
  if (open) {
    document.addEventListener("mousedown", handleClickOutside);
  } else {
    document.removeEventListener("mousedown", handleClickOutside);
  }
});

onBeforeUnmount(() => {
  document.removeEventListener("mousedown", handleClickOutside);
});
</script>
*
