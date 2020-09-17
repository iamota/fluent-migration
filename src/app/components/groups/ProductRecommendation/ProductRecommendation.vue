<template>
  <div class="ProductRecommendation" :class="container_class">
    <div class="ProductRecommendation__pod" :style="{ backgroundImage: `url(${image})` }">
      <div class="ProductRecommendation__overlay" :class="overlay_class">
        <div class="ProductRecommendation__content">
          <h3 v-html="title" />
          <p v-html="description" />
          <Anchor :href="cta_link" class="Button Button--on-image">{{ cta_text }}</Anchor>
        </div>
      </div>
    </div>
    <ProductTile v-if="shopify_product_handle !== ''" v-bind="product" />   
  </div>
</template>

<script src="./ProductRecommendation.ts"></script>
<style src="./ProductRecommendation.scss"></style>
