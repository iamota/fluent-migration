<template>
  <div 
    :class="classes"
    :style="css_variables"
    data-product-tile
  >
    <Anchor 
      v-if="computed_image"
      class="ProductTile__image" 
      role="presentation" 
      :href="computed_url"
      data-product-tile-image
    >
      <LazyImage
        :class="{[`AnimateOnHover--${animation_on_hover}`]: true}"
        :src="resized_image"
        :alt="alt"
        :width="computed_image.width"
        :height="computed_image.height"
      />

      <div
        v-if="enable_quick_view" 
        :class="quick_view_classes" 
        :aria-label="`${title} ${quick_view_cta}`" 
        tabindex="0"
        role="button"   
        data-quick-view-button
      >
        <Icon :name="quick_view_icon" />
        {{ quick_view_cta }}
      </div>
      <div v-if="badge !== ``" class="ProductTile__badge">
        {{ badge }}
      </div>
    </Anchor>

    <div class="ProductTile__content">
      <p class="ProductTile__recommend pbold">{{ 'collections.kit.recommend_label' | t }}</p>
      <p class="ProductTile__title" data-product-tile-title>
        <Anchor :href="computed_url">{{ title }}</Anchor>
      </p>
      <Price 
        :availability="availability"
        :price="price"
        :compare_at_price="compare_at_price"
        :price_varies="price_varies"
        data-product-tile-price
      />

      <div v-if="enable_options" class="ProductTile__options" data-product-tile-options>
        <template v-if="variants.length > 1">
          <ProductOptions 
            :product_data_id="id" 
            :product_data="$props"
            :is_pcp="true"
          />          
        </template>
      </div>

      
      <ProductAddToCartButton
        v-if="enable_options && variants.length > 1"
        class="ProductTile__button"
        :product_data_id="id"
        :product_data="$props"
        :is_pcp="true"
      />      

      <template v-if="enable_button">
        <template v-if="variants.length > 1 && !enable_options">
          <Button 
            type="primary"
            :href="computed_url"
            class="ProductTile__button"
          >
            <Icon v-if="icon" :name="icon" />
            <template v-if="current_variant.available">
              {{ cta }}
            </template>
            <template v-else>
              {{ 'products.product.sold_out' | t }}
            </template>
          </Button>
        </template>
        <template v-else-if="variants.length === 1">
          <form
            class="ProductInfo__form"
            action="/cart/add"
            method="post"
            enctype="multipart/form-data"
          >          
            <input
              type="hidden"
              name="id"
              :value="current_variant.id"
            >
            <input
              type="hidden"
              name="quantity"
              value="1"
            >
            <Button 
              type="primary" 
              submit
              class="ProductTile__button" 
              data-add-to-cart 
              :disabled="current_variant.available === false"
            >
              <Icon v-if="cart_icon" :name="cart_icon" />
              <span data-add-to-cart-text>
                <template v-if="current_variant.available">
                  {{ 'products.product.add_to_cart' | t }}
                </template>
                <template v-else>
                  {{ 'products.product.sold_out' | t }}
                </template>
              </span>
            </Button>
          </form>
        </template>
      </template>      
    </div>
  </div>
</template>

<script src="./ProductTileKit.ts"></script>
<style src="./ProductTileKit.scss"></style>
