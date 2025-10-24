<template>
  <footer class="page-footer">
    <div class="page-footer__wrapper">
      <div class="page-footer__copyright">
        @2025 райз шоп
      </div>
      <nav class="page-footer__nav page-footer__nav--social">
        <ul class="page-footer__nav-ul">
          <li class="page-footer__nav-li">
            <NuxtLink
              class="page-footer__nav-link"
              to="https://youtube.com"
              target="_blank"
            >
              youtube
            </NuxtLink>
          </li>
          <li class="page-footer__nav-li">
            <NuxtLink
              class="page-footer__nav-link"
              to="https://instagram.com"
              target="_blank"
            >
              instagram
            </NuxtLink>
          </li>
          <li class="page-footer__nav-li">
            <NuxtLink
              class="page-footer__nav-link"
              to="https://web.telegram.org"
              target="_blank"
            >
              телеграм
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <nav class="page-footer__nav page-footer__nav--aside">
        <ul class="page-footer__nav-ul">
          <li class="page-footer__nav-li">
            <NuxtLink
              class="page-footer__nav-link"
              to="/contacts"
            >
              контакты
            </NuxtLink>
          </li>
          <li class="page-footer__nav-li">
            <NuxtLink
              class="page-footer__nav-link"
              to="/delivery"
            >
              доставка и оплата
            </NuxtLink>
          </li>
          <li class="page-footer__nav-li">
            <NuxtLink
              class="page-footer__nav-link"
              to="/return"
            >
              возврат
            </NuxtLink>
          </li>
          <li class="page-footer__nav-li">
            <NuxtLink
              class="page-footer__nav-link"
              to="/privacy"
            >
              конфиденциальность
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  .page-footer {
    @include container;

    padding-top: rem(24);
    padding-bottom: rem(24);
    background-color: $color-white;
    color: $color-main;

    &__wrapper {
      display: flex;
      align-items: center;
      column-gap: rem(8);

      @include media-mobile {
        flex-direction: column;
        align-items: start;
        row-gap: rem(24);
      }
    }

    &__copyright {
      width: rem(223);
      font-size: rem(14);
      font-weight: bold;
      letter-spacing: .2em;
    }

    &__nav {
      &--aside {
        margin-left: auto;
      }

      &-ul {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: rem(12) rem(24);
      }
    }
  }
</style>
