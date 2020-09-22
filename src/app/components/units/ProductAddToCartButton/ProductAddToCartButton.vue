<template>
  <div v-if="product.variant_table[product.selected_variant_id]" class="ProductAddToCartButton">
    <form action="/cart/add" method="post" enctype="multipart/form-data">
      <input type="hidden" name="id" :value="product.variant_table[product.selected_variant_id].id">
      <input type="hidden" name="quantity" :value="product.quantity">
      <input
        v-if="assessment"
        type="hidden"
        name="properties[Assessment]"
        value="true"
      >
      
      <input
        v-for="(property, i) in getters.properties" 
        :key="`ProductProperty${product.product_data.id}-${i}`"
        type="hidden"
        :name="property.name"
        :value="property.value"
      >
      
      <button 
        type="submit" 
        name="add"
        class="Button Button--primary"
        :class="{
          'Button--disabled': !product.product_data.available          
        }"
        data-add-to-cart
      >        
        <span v-if="product.product_data.available">
          {{ 'products.product.add_to_cart' | t }}
        </span>
        <span v-else>
          {{ 'products.product.sold_out' | t }}
        </span>
      </button>
    </form>
  </div>
</template>

<script src="./ProductAddToCartButton.ts"></script>
<style src="./ProductAddToCartButton.scss"></style>
