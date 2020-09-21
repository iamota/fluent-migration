<template>
  <div class="Price">
    <span class="Price__sale" v-if="parseFloat(compare_at_price) > parseFloat(price)">
      <template v-if="price_varies">
        {{ 'products.product.on_sale_from_html' | t({ price: formatted_min_price }) }}
        <span v-if="show_currency" class="Price__currency">
          {{ currency }}
        </span>
      </template>
      <template v-else>
        {{ 'products.product.on_sale' | t }}
        {{ price | money }}
        <span v-if="show_currency" class="Price__currency">
          {{ currency }}
        </span>
      </template>
    </span>
    <template v-else>
      <template v-if="price_varies">
        {{ 'products.product.from_text_html' | t({ price: formatted_min_price }) }}
        <span v-if="show_currency" class="Price__currency">
          {{ currency }}
        </span>
      </template>
      <template v-else>
        {{ price | money }}
        <span v-if="show_currency" class="Price__currency">
          {{ currency }}
        </span>
      </template>
    </template>
    <template v-if="parseFloat(compare_at_price) > parseFloat(price)">
      <span class="visually-hidden">
        {{ 'products.product.regular_price' | t }}        
      </span>
      <s class="Price__compare-at">{{ compare_at_price | money }}</s>
    </template>
    <template v-if="!availability">
      <span class="Price__sold-out">{{ 'products.product.sold_out' | t }}</span>
    </template>
  </div>
</template>

<script src="./Price.ts"></script>
<style src="./Price.scss"></style>
