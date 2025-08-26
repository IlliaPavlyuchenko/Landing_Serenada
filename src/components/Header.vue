<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <header class="header">
    <div class="container header__in">
      <div class="header__col">
        <div class="header__logo">
          <div class="logo">
            <a href="#"
              ><img src="@/assets/icons/logo.svg" alt="Serenada Cruise"
            /></a>
          </div>
        </div>
      </div>
      <div class="header__col">
        <div class="header__info">
          <div class="info__tel">
            <img src="@/assets/icons/phone.svg" alt="phone" />
            <a href="tel:+88003485500">8 (800) 348 55 00</a>
          </div>
          <div class="info__menu">
            <button class="info__menu_btn" @click="toggleMenu">
              <img src="@/assets/icons/menu.svg" alt="menu" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="overlay"
      :class="{ 'overlay--active': isMenuOpen }"
      @click="toggleMenu"
    ></div>

    <nav class="side-menu" :class="{ 'side-menu--open': isMenuOpen }">
      <ul>
        <li><a href="#">Головна</a></li>
        <li><a href="#">Про нас</a></li>
        <li><a href="#">Круїзи</a></li>
        <li><a href="#">Контакти</a></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  z-index: 100;
  height: 4rem;
  margin-top: 4rem;
  @media (max-width: 768px) {
    margin-top: 0.5rem;
  }

  &__in {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  &__logo {
    width: 26rem;
    height: 3.5rem;

    @media (max-width: 768px) {
      width: 18.6rem;
      height: 2.5rem;
    }

    & img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  &__info {
    display: flex;
    width: 43.8rem;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1023.9px) {
      width: 7.8rem;
    }
  }
}

.info__tel {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  @media (max-width: 1023.9px) {
    display: none;
  }

  & img {
    width: 2.6rem;
    height: 2.6rem;
  }

  & a {
    text-decoration: none;
    color: $color-white;
    font-weight: 600;
    font-size: 2.4rem;
  }
}

.info__menu_btn {
  background: none;
  border: none;
  cursor: pointer;
  & img {
    width: 11.7rem;

    @media (max-width: 768px) {
      width: 7.8rem;
    }
  }
}

.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  z-index: 90;

  &--active {
    opacity: 1;
    pointer-events: all;
  }
}

.side-menu {
  position: fixed;
  top: 0;
  right: -30%;
  width: 30%;
  height: 100%;
  background: #fff;
  padding: 4rem 2rem;
  box-shadow: -0.2rem 0 0.8rem rgba(0, 0, 0, 0.2);
  transition: right 0.3s ease;
  z-index: 100;

  @media (max-width: 768px) {
    width: 60%;
    right: -60%;
  }

  &--open {
    right: 0;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin: 2rem 0;

      a {
        text-decoration: none;
        font-size: 1.8rem;
        color: #222;

        &:hover {
          color: #0077ff;
        }
      }
    }
  }

  &--open {
    right: 0;
  }
}
</style>
