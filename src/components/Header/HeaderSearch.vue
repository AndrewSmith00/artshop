<template>
    <form class="header__search" @submit="search" @submit.prevent="">
      <input
        type="text"
        class="search__input"
        placeholder="Поиск по названию картины"
        onclick="this.placeholder=''"
        onblur="this.placeholder='Поиск по названию картины'"
      />
      <button type="submit" class="search__button">Найти</button>
    </form>
</template>

<script>
export default {
  name: "HeaderSearch",
};
</script>

<style lang="scss">
.header__search {
    display: flex;
}

.search__input,
.search__button {
  border-radius: 0;
}

.search__input {
  height: 48px;
  width: 25vw;
  padding: 14px 16px;
  border: 1px solid #e1e1e1;
}

.search__button {
    height: 48px;
    width: 10vw;
    background-color: #403432;
    color: #F4F6F9;
    vertical-align: middle;
    border: 1px solid #403432;
    cursor: pointer;
    transition: .2s;
    &:hover {
        background-color: #776763;
        border-color: #776763;
    }
}
</style>
