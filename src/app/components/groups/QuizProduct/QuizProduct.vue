<template>
  <Section 
    v-if="product_id && $store.state.Products[product_id]"
    v-bind="$props"
    class="QuizProduct" 
    :css_variables="cssVariables"
    :animation="null"
  > 
    <p class="QuizProduct__preheading Heading__preheading h5" v-html="kit_title" />
    <h3 class="QuizProduct__heading Heading__heading h1" v-html="kit_subtitle" />
    <p class="QuizProduct__body-text" v-html="kit_body" />
    <div class="ProductOverview__grid">
      <ProductImages :product_data_id="product_id" v-bind="$props" />
      <div class="ProductInfo">        
        <ProductHeading :product_data_id="product_id" v-bind="$props" />
        <ProductShortDescription :truncate="280" :product_data_id="product_id" v-bind="$props" />
        <ProductOptions 
          v-if="product.product_data.variants.length > 1" 
          :product_data_id="product_id" 
          option_type="select"
          v-bind="$props" 
        />
        <div class="ProductOverview__quantity-add">
          <ProductQuantity :product_data_id="product_id" v-bind="$props" />
          <Anchor :href="product_url" class="QuizProduct__cta Button Button--secondary">View Details</Anchor>
          <ProductAddToCartButton assessment :product_data_id="product_id" v-bind="$props" />
        </div>
      </div>
    </div>
  </Section>
</template>

<script src="./QuizProduct.ts"></script>
<style src="./QuizProduct.scss"></style>
