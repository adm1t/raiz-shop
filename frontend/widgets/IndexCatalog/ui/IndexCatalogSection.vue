<script setup lang="ts">
import { BREAKPOINT_DESKTOP_MIN } from '~/shared/variables'
import type { IndexCatalogSidebarProps } from '../types'
import IndexCatalogSidebar from './IndexCatalogSidebar.vue'
import { ProductCard } from '~/widgets/ProductCard'
import { CatalogBanner } from '~/widgets/CatalogBanner'

defineProps<{
  sidebar: IndexCatalogSidebarProps
  hasBanner?: boolean
}>()

const { $gsap, $ScrollTrigger } = useNuxtApp()

const rootElement = useTemplateRef('rootElement')
const sidebarElement = useTemplateRef('sidebarElement')

const scrollTriggerInstance = ref()

onMounted(() => {
  const mm = $gsap.matchMedia()

  mm.add(`(min-width: ${BREAKPOINT_DESKTOP_MIN}px)`, () => {
    scrollTriggerInstance.value = $ScrollTrigger.create({
      trigger: rootElement.value,
      start: 'top top',
      end: () => `bottom ${sidebarElement.value?.scrollHeight}`,
      pin: sidebarElement.value,
    })
  })
})

onUnmounted(() => {
  scrollTriggerInstance.value.kill()
})
</script>

<template>
  <div
    ref="rootElement"
    class="index-catalog-section"
  >
    <div
      ref="sidebarElement"
      class="index-catalog-section__sidebar"
    >
      <IndexCatalogSidebar v-bind="sidebar" />
    </div>
    <div class="index-catalog-section__grid">
      <div
        v-if="hasBanner"
        class="index-catalog-section__banner"
      >
        <CatalogBanner
          src="/tmp/banner.webp"
          button-href="/"
          button-text="смотреть коллекцию"
        />
      </div>
      <div class="index-catalog-section__grid-item">
        <ProductCard
          :images="['/tmp/product-01.webp', '/tmp/product-02.webp', '/tmp/product-03.webp']"
          name="штаны 010"
          :price="33000"
          link="/"
        />
      </div>
      <div class="index-catalog-section__grid-item">
        <ProductCard
          :images="['/tmp/product-02.webp', '/tmp/product-01.webp', '/tmp/product-02.webp', '/tmp/product-03.webp']"
          name="штаны 010"
          :price="33000"
          link="/"
        />
      </div>
      <div class="index-catalog-section__grid-item">
        <ProductCard
          :images="['/tmp/product-03.webp', '/tmp/product-02.webp', '/tmp/product-01.webp', '/tmp/product-02.webp', '/tmp/product-03.webp']"
          name="штаны 010"
          :price="33000"
          link="/"
        />
      </div>
      <div class="index-catalog-section__grid-item">
        <ProductCard
          :images="['/tmp/product-02.webp', '/tmp/product-01.webp', '/tmp/product-02.webp', '/tmp/product-03.webp']"
          name="штаны 010"
          :price="33000"
          link="/"
        />
      </div>
      <div class="index-catalog-section__grid-item">
        <ProductCard
          :images="['/tmp/product-03.webp', '/tmp/product-02.webp', '/tmp/product-01.webp', '/tmp/product-02.webp', '/tmp/product-03.webp']"
          name="штаны 010"
          :price="33000"
          link="/"
        />
      </div>
      <div class="index-catalog-section__grid-item">
        <ProductCard
          :images="['/tmp/product-01.webp', '/tmp/product-02.webp', '/tmp/product-03.webp']"
          name="штаны 010"
          :price="33000"
          link="/"
        />
      </div>
      <div class="index-catalog-section__grid-item">
        <ProductCard
          :images="['/tmp/product-02.webp', '/tmp/product-01.webp', '/tmp/product-02.webp', '/tmp/product-03.webp']"
          name="штаны 010"
          :price="33000"
          link="/"
        />
      </div>
      <div class="index-catalog-section__grid-item">
        <ProductCard
          :images="['/tmp/product-03.webp', '/tmp/product-02.webp', '/tmp/product-01.webp', '/tmp/product-02.webp', '/tmp/product-03.webp']"
          name="штаны 010"
          :price="33000"
          link="/"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .index-catalog-section {
    $b: &;

    display: grid;
    column-gap: rem(8);
    grid-template-columns: repeat(3, 1fr);

    @include media-mobile {
      grid-template-columns: initial;
      row-gap: rem(24);
    }

    &__sidebar {
      align-self: start;
    }

    &__grid {
      display: grid;
      gap: rem(32) rem(8);
      grid-column: 2 / 4;
      grid-template-columns: repeat(6, 1fr);

      @include media-mobile {
        gap: rem(24) rem(8);
        grid-column: 1 / 2;
      }
    }

    &__grid-item {
      &:is(:first-child) {
        grid-column: 1 / 4;

        @include media-mobile {
          grid-column: 1 / 7;
        }
      }

      &:is(:first-child) + & {
        grid-column: 4 / 7;

        @include media-mobile {
          grid-column: 1 / 4;
        }
      }

      &:nth-child(3n + 3) {
        grid-column: 1 / 3;

        @include media-mobile {
          grid-column: initial;
        }
      }

      &:nth-child(3n + 4) {
        grid-column: 3 / 5;

        @include media-mobile {
          grid-column: initial;
        }
      }

      &:nth-child(3n + 5) {
        grid-column: 5 / 7;

        @include media-mobile {
          grid-column: initial;
        }
      }

      &:nth-child(2n + 2) {
        @include media-mobile {
          grid-column: 1 / 4;
        }
      }

      &:nth-child(2n + 3) {
        @include media-mobile {
          grid-column: 4 / 7;
        }
      }
    }

    &__banner {
      grid-column: 1 / 7;

      & ~ #{$b}__grid-item {
        &:nth-child(3n + 2) {
          grid-column: 1 / 3;

          @include media-mobile {
            grid-column: initial;
          }
        }

        &:nth-child(3n + 3) {
          grid-column: 3 / 5;

          @include media-mobile {
            grid-column: initial;
          }
        }

        &:nth-child(3n + 4) {
          grid-column: 5 / 7;

          @include media-mobile {
            grid-column: initial;
          }
        }

        &:nth-child(2n + 2) {
          @include media-mobile {
            grid-column: 1 / 4;
          }
        }

        &:nth-child(2n + 3) {
          @include media-mobile {
            grid-column: 4 / 7;
          }
        }
      }
    }
  }
</style>
