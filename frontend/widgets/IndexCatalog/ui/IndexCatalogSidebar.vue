<script setup lang="ts">
import type { IndexCatalogSidebarProps } from '../types'

defineProps<IndexCatalogSidebarProps>()
</script>

<template>
  <div class="index-catalog-sidebar">
    <div
      v-if="title"
      class="index-catalog-sidebar__title"
    >
      {{ title }}
    </div>
    <div
      v-if="description"
      class="index-catalog-sidebar__description"
    >
      {{ description }}
    </div>
    <NuxtLink
      v-if="linkText && linkHref"
      :to="linkHref"
      class="index-catalog-sidebar__link"
    >
      {{ linkText }}
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
  .index-catalog-sidebar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: rem(120) rem(115) rem(100) 0;

    @include media-mobile {
      flex-flow: row wrap;
      align-items: center;
      justify-content: space-between;
      padding: 0;
      gap: rem(8);
    }

    &__title {
      @include typo-h1;

      margin-bottom: rem(16);

      @include media-mobile {
        margin-bottom: 0;
      }
    }

    &__description {
      margin-bottom: rem(12);

      @include media-mobile {
        display: none;
      }
    }

    &__link {
      @include typo-link;
    }
  }
</style>
