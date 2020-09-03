<template>
  <Section 
    v-if="product_id && $store.state.Products[product_id]"
    v-bind="$props"
    class="QuizProduct" 
    :css_variables="cssVariables"
    :animation="null"
  >
    <div class="ProductOverview__grid">
      <ProductImages :product_data_id="product_id" v-bind="$props" />
      <div class="ProductInfo">
        <ProductHeading :product_data_id="product_id" v-bind="$props" breakpoint="desktop" />
        <ProductShortDescription :product_data_id="product_id" v-bind="$props" />
        <ProductOptions 
          v-if="product.product_data.variants.length > 1" 
          :product_data_id="product_id" 
          v-bind="$props" 
        />
        <div class="ProductOverview__quantity-add">
          <ProductQuantity :product_data_id="product_id" v-bind="$props" />
          <Button class="QuizProduct__cta">View Details</Button>
          <ProductAddToCartButton :product_data_id="product_id" v-bind="$props" />
        </div>
      </div>
    </div>
  </Section>
</template>

<script src="./QuizProduct.ts"></script>
<style src="./QuizProduct.scss"></style>
