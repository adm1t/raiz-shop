<script setup lang="ts">
import { computed } from 'vue'

import { initialButtonProps } from '../constants'
import type { ButtonProps } from '../types'

const props = withDefaults(defineProps<ButtonProps>(), {
  ...initialButtonProps,
})

const slot = defineSlots()

const buttonComponent = computed(() => {
  return props.to ? defineNuxtLink({}) : 'button'
})

const classList = computed(() => {
  const baseClass = 'ui-button'

  return {
    [baseClass]: true,
    [`${baseClass}--disabled`]: props.disabled,
    [`${baseClass}--only-icon`]: props.onlyIcon || (props.icon && !slot.default),
    [`${baseClass}--theme-${props.theme}`]: props.theme,
  }
})

// Хак для корректной отработки состояния :active для кнопок на iOS
const onTouchStart = () => {
}
</script>

<template>
  <component
    :is="buttonComponent"
    :class="classList"
    :to="to"
    :disabled="disabled"
    @touchstart="onTouchStart"
  >
    <span
      v-if="slot.default"
      class="ui-button__text"
    >
      <slot />
    </span>

    <NuxtIcon
      v-if="icon"
      class="ui-button__icon"
      :name="icon"
    />
  </component>
</template>

<style lang="scss" scoped>
  .ui-button {
    $b: &;

    display: inline-flex;
    min-height: var(--ui-button-size, #{rem(72)});
    align-items: center;
    justify-content: center;
    padding: var(--ui-button-padding, #{rem(24)} #{rem(48)});
    border-width: 1px;
    border-style: solid;
    border-color: var(--ui-button-border-color, transparent);
    background-color: var(--ui-button-background-color, #{$color-main});
    color: var(--ui-button-color, #{$color-white});
    column-gap: var(--ui-button-gap, #{rem(24)});
    cursor: pointer;
    opacity: var(--ui-button-opacity, 1);
    transition:
      color $default-transition,
      background-color $default-transition,
      border-color $default-transition,
      opacity $default-transition;
    user-select: none;

    &--disabled,
    &:disabled {
      --ui-button-opacity: var(--ui-button-opacity-disabled, .3);

      cursor: not-allowed;
    }

    @include media-hover-device-self {
      &:not(:disabled):not(#{$b}--disabled) {
        --ui-button-color: var(--ui-button-color-hover, #{$color-white});
        --ui-button-background-color: var(--ui-button-background-color-hover, #{$color-main});
        --ui-button-border-color: var(--ui-button-border-color-hover, transparent);
      }
    }

    @include media-mobile {
      --ui-button-padding: #{rem(24)};
      --ui-button-gap: #{rem(12)};
    }

    &--only-icon {
      --ui-button-padding: 0;

      width: var(--ui-button-size);
      height: var(--ui-button-size);
      flex-shrink: 0;
      aspect-ratio: 1 / 1;
    }

    &__text {
      @include typo-button;
    }

    &__icon {
      flex-shrink: 0;
      font-size: var(--ui-button-icon-custom-size, var(--ui-button-icon-size, #{rem(24)}));
    }

    &--theme-primary {
      --ui-button-color: #{$color-white};
      --ui-button-background-color: #{$color-main};
      --ui-button-color-hover: #{$color-main};
      --ui-button-background-color-hover: #{$color-white};
      --ui-button-border-color-hover: #{$color-main};
    }

    &--theme-secondary {
      --ui-button-color: #{$color-main};
      --ui-button-background-color: #{$color-white};
      --ui-button-border-color: #{$color-main};
      --ui-button-color-hover: #{$color-white};
      --ui-button-background-color-hover: #{$color-main};
    }
  }
</style>
