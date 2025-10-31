<script setup lang="ts">
import { useResizeObserver } from '@vueuse/core'
import { PageHeader } from '~/widgets/PageHeader'
import { PageFooter } from '~/widgets/PageFooter'

useState('currentYear', () => new Date().getFullYear())
const isScrollLocked = useState<boolean>('isScrollLocked')

const contentElement = useTemplateRef('contentElement')

useResizeObserver(contentElement, () => useNuxtApp().callHook('content:resize'))

const smoother = ref()
const { $ScrollSmoother, $ScrollTrigger } = useNuxtApp()

onMounted(() => {
  smoother.value = $ScrollSmoother.create({
    smooth: 1,
  })

  useNuxtApp().hook('content:resize', () => {
    $ScrollTrigger.refresh()
  })
})

watch(isScrollLocked, (newValue) => {
  if (newValue) {
    document.documentElement.classList.add('scroll-locked')
  }
  else {
    document.documentElement.classList.remove('scroll-locked')
  }
})
</script>

<template>
  <div class="app">
    <div class="app__header">
      <PageHeader />
    </div>
    <div
      id="smooth-wrapper"
      class="app__wrapper"
    >
      <div
        id="smooth-content"
        ref="contentElement"
        class="app__content"
      >
        <NuxtRouteAnnouncer />
        <main class="app__main">
          <NuxtPage />
        </main>
        <div class="app__footer">
          <PageFooter />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .app {
    position: relative;

    &__header {
      position: fixed;
      z-index: $z-index-header;
      top: 0;
      right: 0;
      left: 0;
    }

    &__content {
      display: flex;
      min-height: 100svh;
      flex-direction: column;
      padding-top: var(--header-height);
    }

    &__main {
      flex-grow: 1;
    }
  }
</style>
