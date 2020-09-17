<template>
  <div 
    class="InformationProductTile"
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
      <p class="ProductTile__title" data-product-tile-title>
        <Anchor :href="computed_url">{{ title }}</Anchor>
      </p>
      
      
      <ProductAddToCartButton
        v-if="enable_options && variants.length > 1"
        class="ProductTile__button"
        :product_data_id="id"
        :product_data="$props"
        :is_pcp="true"
      />      

      <Button 
        v-if="enable_button"
        type="primary"
        :href="computed_url"
        class="ProductTile__button"
      >
        <Icon v-if="icon" :name="icon" />
        {{ cta }}            
      </Button>     
    </div>
  </div>
</template>

<script src="./InformationProductTile.ts"></script>
<style src="./InformationProductTile.scss"></style>
