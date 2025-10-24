<script setup lang="ts">
import ScrollTrigger from 'gsap/ScrollTrigger'

const route = useRoute()

const headerElement = useTemplateRef('headerElement')

const isScrolled = ref(false)

const headerModifier = computed(() => {
  if (isScrolled.value) return 'scrolled'
  if (route.name === 'index') return 'transparent'
  return 'default'
})

onMounted(() => {
  ScrollTrigger.create({
    start: `top -${headerElement.value?.clientHeight ?? 0 / 2}`,
    onEnter: () => {
      isScrolled.value = true
    },
    onLeaveBack: () => {
      isScrolled.value = false
    },
  })
})
</script>

<template>
  <header
    ref="headerElement"
    class="page-header"
    :class="`page-header--${headerModifier}`"
  >
    <div class="page-header__wrapper">
      <div class="page-header__logo">
        <NuxtLink
          class="page-header__logo-link"
          to="/"
        >
          райз шоп
        </NuxtLink>
      </div>
      <nav class="page-header__nav page-header__nav--main">
        <ul class="page-header__nav-ul">
          <li class="page-header__nav-li">
            <NuxtLink
              class="page-header__nav-link"
              to="/collections"
            >
              коллекции
            </NuxtLink>
          </li>
          <li class="page-header__nav-li">
            <NuxtLink
              class="page-header__nav-link"
              to="/about"
            >
              о бренде
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <nav class="page-header__nav page-header__nav--aside">
        <ul class="page-header__nav-ul">
          <li class="page-header__nav-li">
            <NuxtLink
              class="page-header__nav-link"
              to="/profile"
            >
              профиль
            </NuxtLink>
          </li>
          <li class="page-header__nav-li">
            <NuxtLink
              class="page-header__nav-link"
              to="/favorites"
            >
              избранное
            </NuxtLink>
          </li>
          <li class="page-header__nav-li page-header__nav-li--cart">
            <NuxtLink
              class="page-header__nav-link"
              to="/cart"
            >
              корзина
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  .page-header {
    $b: &;

    @include container;

    padding-top: rem(24);
    padding-bottom: rem(24);
    background-color: var(--header-background-color, transparent);
    color: var(--header-color, #{$color-white});
    transition: color $default-transition, background-color $default-transition;

    @include media-mobile {
      padding-top: rem(16);
      padding-bottom: rem(16);
    }

    &--default,
    &--scrolled {
      --header-background-color: #{$color-white};
      --header-color: #{$color-main};
    }

    &--transparent {
      --header-background-color: transparent;
      --header-color: #{$color-white};
    }

    &__wrapper {
      display: flex;
      align-items: center;
      column-gap: rem(8);
    }

    &__logo {
      width: rem(223);

      @include media-mobile {
        width: auto;
      }

      &-link {
        font-size: rem(16);
        font-weight: bold;
        letter-spacing: .2em;
      }
    }

    &__nav {
      &--aside {
        margin-left: auto;
      }

      &-ul {
        display: flex;
        align-items: center;
        column-gap: rem(24);
      }

      &-li {
        &:not(#{$b}__nav-li--cart) {
          @include media-mobile {
            display: none;
          }
        }

        &--cart {
          @include media-mobile {
            @include typo-h3;
          }
        }
      }
    }
  }
</style>
