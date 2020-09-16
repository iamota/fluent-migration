<template>
  <div class="ProductRecommendation" :style="{ backgroundImage: `url(${image})` }">    
    <div class="ProductRecommendation__overlay" :class="cssClass">
      <div class="ProductRecommendation__content">
        <h3 v-html="title" />
        <p v-html="description" />
        <Anchor :href="cta_link" class="Button Button--on-image">{{ cta_text }}</Anchor>
      </div>
    </div>
  </div>
</template>

<script src="./ProductRecommendation.ts"></script>
<style src="./ProductRecommendation.scss"></style>
