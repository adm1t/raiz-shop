<script setup lang="ts">
const props = defineProps<{
  images: string[]
  name: string
  price: number
  link: string
}>()

const router = useRouter()

const activeImageIndex = ref(0)

const imagesCount = computed(() => props.images.length)
const activeImage = computed(() => props.images[activeImageIndex.value])

const formattedPrice = computed(() => getFormattedPrice(props.price))
</script>

<template>
  <div
    class="product-card"
    @click="router.push(link)"
  >
    <div class="product-card__preview">
      <NuxtImg
        class="product-card__image"
        :src="activeImage"
        alt=""
      />
      <div
        v-if="imagesCount > 1"
        class="product-card__hover"
        @mouseleave="activeImageIndex = 0"
      >
        <div
          v-for="i in imagesCount"
          :key="i"
          class="product-card__hover-part"
          @mouseenter="activeImageIndex = i - 1"
        />
      </div>
    </div>
    <NuxtLink
      class="product-card__name"
      :to="link"
    >
      {{ name }}
    </NuxtLink>
    <div class="product-card__price">
      {{ formattedPrice }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .product-card {
    display: flex;
    flex-direction: column;

    &__preview {
      position: relative;
    }

    &__image {
      display: block;
      width: 100%;
      height: auto;
      aspect-ratio: 454 / 536;
      object-fit: cover;
    }

    &__hover {
      position: absolute;
      display: flex;
      inset: 0;
    }

    &__hover-part {
      flex-grow: 1;
      flex-shrink: 0;
    }

    &__name {
      @include typo-h3;

      margin-top: rem(8);
    }

    &__price {
      @include typo-main;

      @include media-mobile {
        margin-top: rem(4);
      }
    }
  }
</style>
