<template>
  <Section v-bind="$props" :css_variables="cssVariables">
    <div class="ProductOverview__grid">
      <ProductImages :product_data_id="product_id" v-bind="$props" />
      <div class="ProductInfo">
        <ProductHeading :product_data_id="product_id" v-bind="$props" />
        <ProductShortDescription :truncate="1000" :product_data_id="product_id" v-bind="$props" />
        <ProductOptions 
          v-if="product.product_data.variants.length > 1" 
          :product_data_id="product_id" 
          v-bind="$props" 
        />
        <!-- <ProductSocialShare :product_data_id="product_id" /> -->
        <div
          v-if="authorized"
          class="ProductOverview__quantity-add"
        >
          <ProductQuantity :product_data_id="product_id" v-bind="$props" />
          <ProductAddToCartButton :product_data_id="product_id" v-bind="$props" />
        </div>
        <div
          v-if="!authorized && assessment"
          class="ProductOverview__lockout"
        >
          <p class="ProductOverview__lockout--title">{{ assessment_text_title }}</p>
          <p>{{ assessment_text_description }}</p>
          <Button>{{ 'products.assessment.take_the_quiz_cta' | t }}</Button>
        </div>
      </div>
    </div>
    <component :is="'style'">
      <!-- eslint-disable --> 
      #shopify-section-{{id}} .flickity-prev-next-button {
        background: rgba({{ arrow_bg_color | hex_to_rgba(arrow_bg_opacity / 100) }});
      }

      #shopify-section-{{id}} .flickity-prev-next-button .arrow {
        fill: rgba({{ arrow_color | hex_to_rgba(arrow_opacity / 100) }});
      }

      @media only screen and (max-width: {{ grid_mobile_max }}) {
        #shopify-section-{{id}} .flickity-prev-next-button {
          background: rgba({{ arrow_bg_color_mobile | hex_to_rgba(arrow_bg_opacity_mobile / 100) }});
        }

        #shopify-section-{{id}} .flickity-prev-next-button .arrow {
          fill: rgba({{ arrow_color_mobile | hex_to_rgba(arrow_opacity_mobile / 100) }});
        } 
      }
      <!-- eslint-enable -->
    </component>
  </Section>
</template>

<script src="./ProductOverview.ts"></script>
<style src="./ProductOverview.scss"></style>