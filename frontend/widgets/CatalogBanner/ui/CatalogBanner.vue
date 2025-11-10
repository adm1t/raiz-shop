<script setup lang="ts">
import { VButton } from '~/shared/ui/Button'

defineProps<{
  src: string
  buttonText?: string
  buttonHref?: string
}>()
</script>

<template>
  <div class="catalog-banner">
    <NuxtImg
      class="catalog-banner__image"
      :src="src"
    />
    <VButton
      v-if="buttonText && buttonHref"
      class="catalog-banner__button"
      :to="buttonHref"
    >
      {{ buttonText }}
    </VButton>
  </div>
</template>

<style lang="scss" scoped>
  .catalog-banner {
    position: relative;

    &__image {
      display: block;
      width: 100%;
      height: auto;
      aspect-ratio: 916 / 454;
      object-fit: cover;

      @include media-mobile {
        aspect-ratio: 359 / 460;
      }
    }

    &__button {
      position: absolute;
      right: rem(60);
      bottom: rem(50);

      @include media-mobile {
        right: rem(20);
        bottom: rem(20);
        left: rem(20);
      }
    }
  }
</style>
