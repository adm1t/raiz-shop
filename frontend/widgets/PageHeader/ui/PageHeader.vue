<script setup lang="ts">
import PageHeaderMobileMenu from './PageHeaderMobileMenu.vue'
import { useScreen } from '~/shared/composables'

const route = useRoute()
const { isDesktop } = useScreen()

const { $ScrollTrigger } = useNuxtApp()

const headerElement = useTemplateRef('headerElement')

const isScrolled = ref(false)
const isMenuVisible = ref(false)

const isScrollLockedState = useState<boolean>('isScrollLocked', () => isMenuVisible.value)

const headerModifier = computed(() => {
  if (isMenuVisible.value) return 'menu-visible'
  if (isScrolled.value) return 'scrolled'
  if (route.name === 'index') return 'transparent'
  return 'default'
})

const onMenuButtonClick = () => {
  isMenuVisible.value = !isMenuVisible.value
  isScrollLockedState.value = isMenuVisible.value
}

onMounted(() => {
  $ScrollTrigger.create({
    start: () => `top -${headerElement.value?.clientHeight ?? 0}`,
    onEnter: () => {
      isScrolled.value = true
    },
    onLeaveBack: () => {
      isScrolled.value = false
    },
  })
})

watch(isDesktop, (newValue) => {
  if (newValue && isMenuVisible.value) {
    isMenuVisible.value = false
    isScrollLockedState.value = false
  }
})
</script>

<template>
  <header
    ref="headerElement"
    class="page-header"
    :class="`page-header--${headerModifier}`"
  >
    <div class="page-header__wrapper">
      <button
        class="page-header__menu-btn"
        @click="onMenuButtonClick"
      >
        <NuxtIcon
          class="page-header__menu-btn-icon"
          name="burger"
        />
      </button>
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
          <Transition name="fade">
            <li
              v-if="!isMenuVisible"
              class="page-header__nav-li page-header__nav-li--cart page-header__nav-li--cart-filled"
            >
              <NuxtLink
                class="page-header__nav-link"
                to="/cart"
              >
                корзина
              </NuxtLink>
            </li>
          </Transition>
        </ul>
      </nav>
    </div>
    <Transition name="fade">
      <div
        v-if="isMenuVisible"
        class="page-header__menu"
      >
        <PageHeaderMobileMenu />
      </div>
    </Transition>
  </header>
</template>

<style lang="scss" scoped>
  .page-header {
    $b: &;

    display: flex;
    flex-direction: column;
    background-color: var(--header-background-color, transparent);
    color: var(--header-color, #{$color-white});
    transition: color $default-transition, background-color $default-transition;

    &--default,
    &--scrolled,
    &--menu-visible {
      --header-background-color: #{$color-white};
      --header-color: #{$color-main};
    }

    &--transparent {
      @include media-desktop {
        --header-background-color: transparent;
        --header-color: #{$color-white};
      }

      @include media-mobile {
        --header-background-color: #{$color-white};
        --header-color: #{$color-main};
      }
    }

    &--menu-visible {
      height: 100dvh;
    }

    &__wrapper {
      @include container;

      display: flex;
      align-items: center;
      padding-top: rem(24);
      padding-bottom: rem(24);
      column-gap: rem(8);

      @include media-mobile {
        padding-top: rem(16);
        padding-bottom: rem(16);
        column-gap: rem(12);
      }
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
          display: flex;
          align-items: start;
          padding-right: rem(8);

          @include media-mobile {
            @include typo-h3;
          }

          &-filled {
            &:after {
              display: block;
              width: rem(8);
              height: rem(8);
              border-radius: 50%;
              background-color: $color-red;
              content: '';
            }
          }
        }
      }
    }

    &__menu-btn {
      display: none;

      @include media-mobile {
        display: block;
      }

      &-icon {
        display: flex;
        font-size: rem(24);
      }
    }

    &__menu {
      height: calc(100dvh - var(--header-height));
      flex-grow: 1;
    }
  }
</style>
