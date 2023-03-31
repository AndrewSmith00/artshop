<template>
  <div class="hamburger-menu">
    <input id="menu__toggle" type="checkbox" v-model="isOpen" />
    <label class="menu__btn" for="menu__toggle">
        <span></span>
    </label>

    <transition name="fade" appear>
      <div v-if="isOpen" class="menu-backdrop" @click="isOpen = false">
        <div class="menu__box" @click.stop="">
          <a @click="isOpen = false" class="menu__item">Каталог</a>
          <a @click="isOpen = false" class="menu__item">Доставка</a>
          <a @click="isOpen = false" class="menu__item">Оплата</a>
          <a @click="isOpen = false" class="menu__item">Контакты</a>
          <a class="menu__item" @click="isOpen = false">О компании</a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "HamburgerMenu",
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style lang="scss">
#menu__toggle {
  opacity: 0;
}
.hamburger-menu {
  display: none;
}
.menu__btn {
  display: flex;
  align-items: center;
  position: fixed;
  top: 31px;
  left: 5%;
  width: 26px;
  height: 26px;
  cursor: pointer;
  z-index: 1;
}
.menu__btn > span,
.menu__btn > span::before,
.menu__btn > span::after {
  display: block;
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: #333333;
  transition: 0.2s;
}
.menu__btn > span::before {
  content: "";
  top: -8px;
}
.menu__btn > span::after {
  content: "";
  top: 8px;
}
.menu-backdrop {
  position: fixed;
  top: 96px;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}
.menu__box {
  position: fixed;
  left: 0;
  top: 96px;
  width: 100vw;
  list-style: none;
  text-align: left;
  box-shadow: 1px 0px 6px rgba(0, 0, 0, 0.2);
  transition: 0.2s;
  z-index: 100;
}
.menu__item {
  display: block;
  height: 60px;
  padding: 10px 0 10px 7.5%;
  color: #333333;
  background-color: #fff;

  font-size: 20px;
  font-weight: 600;
  text-decoration: none;
  transition: 0.2s;
  cursor: pointer;
  button {
    margin: 0;
    vertical-align: middle;
  }
  &:hover {
    background-color: #ebebeb;
  }
}

#menu__toggle:checked ~ .menu__btn > span {
  transform: rotate(45deg);
}
#menu__toggle:checked ~ .menu__btn > span::before {
  top: 0;
  transform: rotate(0);
}
#menu__toggle:checked ~ .menu__btn > span::after {
  top: 0;
  transform: rotate(90deg);
}
.fade-enter-active,
.fade-leave-actice {
  transition: all 0.2s ease-out;
}
.fade-enter,
.fade-leave-to {
  transition: all 0.2s ease-out;
  opacity: 0;
}

@media screen and (max-width: 930px) {
  .hamburger-menu {
    display: block;
  }
}
</style>
