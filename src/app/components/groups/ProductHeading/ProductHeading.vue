<template>
  <div class="ProductHeading" :class="{[`ProductHeading--${breakpoint}`]: true}">
    <h5 v-if="product.product_data.type !== '' && !assessment || assessment && authorized" class="ProductHeading__pre-title">{{ product.product_data.type }}</h5>
    <h1 class="ProductHeading__title">{{ product.product_data.title }}</h1>
    <Price 
      v-if="!assessment || assessment && authorized"
      class="ProductHeading__price"
      :price="getters.price"
      :compare_at_price="getters.compare_at_price"
    />
  </div>
</template>

<script src="./ProductHeading.ts"></script>
<style src="./ProductHeading.scss"></style>
