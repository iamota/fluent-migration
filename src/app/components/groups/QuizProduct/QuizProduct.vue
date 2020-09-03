<template>
  <Section 
    v-if="product_id && $store.state.Products[product_id]"
    v-bind="$props"
    class="QuizProduct" 
    :css_variables="cssVariables"
    :animation="null"
  >
    <Heading 
      name="QuizProduct"
      :heading="recommended_heading"
      heading_class="h1"
      preheading="Based on your stymptoms..."
      preheading_class="h5"
    />
    <div class="ProductOverview__grid">
      <ProductImages :product_data_id="product_id" v-bind="$props" />
      <div class="ProductInfo">
        <Heading name="ProductInfo" preheading_class="pbold" preheading="Recommended for you" />
        <ProductHeading product_data_id="product_id" v-bind="$props" breakpoint="desktop" />
        <ProductShortDescription :product_data_id="product_id" v-bind="$props" />
        <ProductOptions 
          v-if="product.product_data.variants.length > 1" 
          :product_data_id="product_id" 
          v-bind="$props" 
        />
        <div class="ProductOverview__quantity-add">
          <ProductQuantity :product_data_id="product_id" v-bind="$props" />
          <Anchor :href="product_url" class="QuizProduct__cta Button Button--primary">View Details</Anchor>
          <ProductAddToCartButton :product_data_id="product_id" v-bind="$props" />
        </div>
      </div>
    </div>
  </Section>
</template>

<script src="./QuizProduct.ts"></script>
<style src="./QuizProduct.scss"></style>
