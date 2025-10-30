<script setup lang="ts">
</script>

<template>
  <div class="page-header-mobile-menu">
    <div class="page-header-mobile-menu__wrapper">
      <nav class="page-header-mobile-menu__nav page-header-mobile-menu__nav--main">
        <ul class="page-header-mobile-menu__nav-ul">
          <li class="page-header-mobile-menu__nav-li">
            <NuxtLink
              class="page-header-mobile-menu__nav-link"
              to="/collections"
            >
              коллекции
            </NuxtLink>
          </li>
          <li class="page-header-mobile-menu__nav-li">
            <NuxtLink
              class="page-header-mobile-menu__nav-link"
              to="/about"
            >
              о бренде
            </NuxtLink>
          </li>
          <li class="page-header-mobile-menu__nav-li">
            <NuxtLink
              class="page-header-mobile-menu__nav-link"
              to="/profile"
            >
              профиль
            </NuxtLink>
          </li>
          <li class="page-header-mobile-menu__nav-li">
            <NuxtLink
              class="page-header-mobile-menu__nav-link"
              to="/favorites"
            >
              избранное
            </NuxtLink>
          </li>
          <li class="page-header-mobile-menu__nav-li page-header-mobile-menu__nav-li--cart page-header-mobile-menu__nav-li--cart-filled">
            <NuxtLink
              class="page-header-mobile-menu__nav-link"
              to="/cart"
            >
              корзина
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <nav class="page-header-mobile-menu__nav page-header-mobile-menu__nav--footer">
        <ul class="page-header-mobile-menu__nav-ul">
          <li class="page-header-mobile-menu__nav-li">
            <NuxtLink
              class="page-header-mobile-menu__nav-link"
              to="/contacts"
            >
              контакты
            </NuxtLink>
          </li>
          <li class="page-header-mobile-menu__nav-li">
            <NuxtLink
              class="page-header-mobile-menu__nav-link"
              to="/delivery"
            >
              доставка и оплата
            </NuxtLink>
          </li>
          <li class="page-header-mobile-menu__nav-li">
            <NuxtLink
              class="page-header-mobile-menu__nav-link"
              to="/return"
            >
              возврат
            </NuxtLink>
          </li>
          <li class="page-header-mobile-menu__nav-li">
            <NuxtLink
              class="page-header-mobile-menu__nav-link"
              to="/privacy"
            >
              конфиденциальность
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <nav class="page-header-mobile-menu__nav page-header-mobile-menu__nav--social">
        <ul class="page-header-mobile-menu__nav-ul">
          <li class="page-header-mobile-menu__nav-li">
            <NuxtLink
              class="page-header-mobile-menu__nav-link"
              to="https://youtube.com"
              target="_blank"
            >
              youtube
            </NuxtLink>
          </li>
          <li class="page-header-mobile-menu__nav-li">
            <NuxtLink
              class="page-header-mobile-menu__nav-link"
              to="https://instagram.com"
              target="_blank"
            >
              instagram
            </NuxtLink>
          </li>
          <li class="page-header-mobile-menu__nav-li">
            <NuxtLink
              class="page-header-mobile-menu__nav-link"
              to="https://web.telegram.org"
              target="_blank"
            >
              телеграм
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="page-header-mobile-menu__copyright">
        @{{ useState('currentYear') }} райз шоп
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .page-header-mobile-menu {
    display: flex;
    overflow: auto;
    height: 100%;
    flex-direction: column;
    background-color: $color-white;
    color: $color-main;

    h1 {
      @include typo-h2;
    }

    &__wrapper {
      @include container;

      display: flex;
      flex-direction: column;
      flex-grow: 1;
      padding-top: rem(24);
      padding-bottom: rem(24);
      row-gap: rem(24);
    }

    &__nav {
      &--main {
        @include typo-h1;

        padding-bottom: rem(24);
        margin-bottom: auto;
      }

      &--social {
        margin-top: rem(8);
      }

      &-ul {
        display: flex;
        flex-direction: column;
        row-gap: rem(16);
      }

      &-li {
        &--cart-filled {
          display: flex;
          align-items: center;
          column-gap: rem(8);

          &:after {
            display: block;
            width: rem(12);
            height: rem(12);
            flex-shrink: 0;
            border-radius: 50%;
            background-color: $color-red;
            content: '';
          }
        }
      }
    }

    &__copyright {
      padding-top: rem(24);
      margin-top: rem(4);
      font-size: rem(14);
      font-weight: bold;
      letter-spacing: .2em;
    }
  }
</style>
