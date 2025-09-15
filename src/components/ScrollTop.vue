<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isVisible = ref(false);

const handleScroll = () => {
  isVisible.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <button v-show="isVisible" class="scroll-top" @click="scrollToTop">
    <svg
      width="23"
      height="13"
      viewBox="0 0 23 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.4286 -0.428786C11.6072 -0.428786 11.8087 -0.337786 11.9415 -0.203452L22.3429 10.3135C22.4772 10.4493 22.5658 10.6515 22.5658 10.8321C22.5658 11.0127 22.4758 11.2163 22.3429 11.3507L21.2272 12.4788C21.0929 12.6145 20.9144 12.7041 20.7144 12.7041C20.5358 12.7041 20.3344 12.6131 20.2015 12.4788L11.4286 3.60844L2.65579 12.4788C2.5215 12.6145 2.3215 12.7041 2.14293 12.7041C1.96436 12.7041 1.76293 12.6131 1.63008 12.4788L0.514361 11.3507C0.380076 11.2149 0.291504 11.0127 0.291504 10.8321C0.291504 10.6515 0.381504 10.4479 0.514361 10.3135L10.9158 -0.203452C11.0501 -0.339231 11.2501 -0.428786 11.4286 -0.428786Z"
        fill="#fff"
      />
    </svg>
  </button>
</template>

<style lang="scss" scoped>
.scroll-top {
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  width: 4.5rem;
  height: 4.5rem;
  border: none;
  border-radius: 50%;
  background: $color-primary;
  cursor: pointer;
  box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.2);
  transition: all 0.5s ease;
  z-index: 999;

  &:hover {
    background: $color-secondary;
    transform: scale(1.1);
  }
}
</style>
