<script setup lang="ts">
import { PromoText } from '~/shared/ui/PromoText/'
import { IndexHero } from '~/widgets/IndexHero'
import { IndexCatalogSection } from '~/widgets/IndexCatalog'
</script>

<template>
  <div class="index-page">
    <div class="index-page__hero">
      <IndexHero />
    </div>
    <div class="index-page__content">
      <section class="index-page__promo">
        <PromoText text="создаём одежду, которую хочется носить каждый день — легко и с удовольствием. Наша новая коллекция предлагает вещи, которые вписываются в любой стиль жизни." />
      </section>
      <section class="index-page__catalog-section">
        <IndexCatalogSection
          :sidebar="{
            title: 'новое.',
            description: 'не просто коллекция — а новое искусство, настоящий тренд и запах модной одежды. без рассказов о природе. только самое богатство.',
            linkText: 'смотреть коллекцию',
            linkHref: '/',
          }"
        />
      </section>
      <section class="index-page__catalog-section">
        <IndexCatalogSection
          :sidebar="{
            title: 'Футболки.',
            description: 'не просто коллекция — а новое искусство, настоящий тренд и запах модной одежды. без рассказов о природе. только самое богатство.',
            linkText: 'смотреть коллекцию',
            linkHref: '/',
          }"
          has-banner
        />
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .index-page {
    &__hero {
      margin-top: calc(-1 * var(--header-height));
    }

    &__content {
      @include container;

      display: flex;
      flex-direction: column;
      padding-top: rem(32);
      padding-bottom: rem(48);
      row-gap: rem(72);

      @include media-mobile {
        padding-top: rem(48);
        row-gap: rem(48);
      }
    }

    &__promo {
      padding: rem(80) rem(231) rem(80) rem(462);

      @include media-mobile {
        padding: 0;
      }
    }
  }
</style>
