<template>
  <div v-if="collection_handle === 'shop'" class="ProductRecommendation" :class="container_class">
    <div class="ProductRecommendation__pod" :style="{ backgroundImage: `url(${background_image})` }">
      <div class="ProductRecommendation__overlay" :class="overlay_class">
        <div class="ProductRecommendation__content">
          <h3 v-html="title" />
          <p v-html="description" />
          <Anchor :href="cta_link" class="Button Button--secondary">
            <template v-if="recommended">
              {{ 'collections.kit.shop_cta' | t }}
            </template>
            <template v-else>
              {{ 'collections.kit.take_the_quiz_cta' | t }}
            </template>
          </Anchor>
        </div>
      </div>
    </div>
    <ProductTileKit v-if="shopify_product_handle !== ''" v-bind="product" />   
  </div>
</template>

<script src="./ProductRecommendation.ts"></script>
<style src="./ProductRecommendation.scss"></style>
