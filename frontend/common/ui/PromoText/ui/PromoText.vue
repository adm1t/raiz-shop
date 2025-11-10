<script setup lang="ts">
defineProps<{
  text: string
}>()

const { $gsap, $ScrollTrigger, $SplitText } = useNuxtApp()

const rootElement = useTemplateRef('rootElement')

const scrollTriggerInstance = ref()

onMounted(() => {
  const split = new $SplitText(rootElement.value, {
    type: 'words',
    wordsClass: 'word',
  })

  scrollTriggerInstance.value = $ScrollTrigger.create({
    trigger: rootElement.value,
    start: 'top bottom-=10%',
    end: 'bottom center',
    scrub: true,
    animation: $gsap.to(split.words, {
      color: '#000000',
      stagger: 0.1,
      duration: 0.1,
      ease: 'none',
    }),
  })
})

onUnmounted(() => {
  scrollTriggerInstance.value.kill()
})
</script>

<template>
  <div
    ref="rootElement"
    class="promo-text"
  >
    {{ text }}
  </div>
</template>

<style lang="scss" scoped>
  .promo-text {
    @include typo-promo;

    color: $color-grey;
  }
</style>
