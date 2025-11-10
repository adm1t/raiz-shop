<script setup lang="ts">
import { VButton } from '~/shared/ui/Button'
import { BREAKPOINT_DESKTOP_MIN } from '~/shared/variables'

const SCROLLTRIGGER_ID = 'index-hero-st'

const { $gsap, $ScrollTrigger } = useNuxtApp()

const rootElement = useTemplateRef('rootElement')
const wrapperElement = useTemplateRef('wrapperElement')

const isScrolled = ref(false)

const scrollProgress = reactive({
  value: 0,
})

onMounted(() => {
  const mm = $gsap.matchMedia()

  mm.add(`(min-width: ${BREAKPOINT_DESKTOP_MIN}px)`, () => {
    $gsap.to(scrollProgress, {
      value: 1,
      scrollTrigger: {
        id: SCROLLTRIGGER_ID,
        trigger: rootElement.value,
        pin: wrapperElement.value,
        pinType: 'transform',
        start: 'top top',
        end: '+=500',
        scrub: true,
        onEnter: () => {
          isScrolled.value = true
        },
        onLeaveBack: () => {
          isScrolled.value = false
        },
      },
    })
  })
})

onBeforeUnmount(() => {
  $ScrollTrigger.getById(SCROLLTRIGGER_ID)?.kill()
})
</script>

<template>
  <div
    ref="rootElement"
    class="index-hero"
    :class="{
      'index-hero--scrolled': isScrolled,
    }"
  >
    <div
      ref="wrapperElement"
      class="index-hero__wrapper"
    >
      <NuxtImg
        src="/tmp/hero.webp"
        alt=""
        class="index-hero__image"
        :style="`--scroll-progress: ${scrollProgress.value}`"
      />
      <VButton
        class="index-hero__button"
        to="/"
      >
        смотреть коллекцию
      </VButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .index-hero {
    $b: &;

    &__wrapper {
      position: relative;
      height: 100dvh;
      will-change: transform;

      @include media-mobile {
        height: calc(100dvh - #{rem(8)});
      }
    }

    &__image {
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transform: translateX(-50%);

      @include media-mobile {
        width: calc(100% - #{rem(16)});
        height: calc(100% - var(--header-height) - rem(12));
      }

      #{$b}--scrolled & {
        @include media-desktop {
          width: calc(100% - #{rem(64)} * var(--scroll-progress));
          height: calc(100% - var(--header-height) * var(--scroll-progress));
        }
      }
    }

    &__button {
      position: absolute;
      right: rem(72);
      bottom: rem(80);

      @include media-mobile {
        right: rem(28);
        bottom: rem(20);
        left: rem(28);
      }
    }
  }
</style>
