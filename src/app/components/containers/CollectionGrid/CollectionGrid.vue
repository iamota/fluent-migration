<template>
  <Section v-bind="$props" :css_variables="cssVariables">
    <Overlay v-bind="$props">
      <Heading v-if="homepage" v-bind="$props" />
      <div :class="{CollectionGridContainer: true, 'CollectionGridContainer--loading': loading, 'CollectionGridContainer--without-filters': !use_filters}">    
        <CollectionFilters v-if="use_filters" :enable_clear="enable_clear" />
        <Form v-if="collection_handle === 'shop'" id="CollectionSort" class="CollectionSort">                  
          <Select
            name="sort_by"
            :value="getSortBy"
            :label="`collections.general.sort_by` | t"
            :design="sort_by_style"
            :options="sort_options"
          />
        </Form>
        <Grid
          v-if="getProducts.length || loading"            
          :desktop="String(columns_desktop)"
          :tablet="String(columns_tablet)"
          :mobile="String(columns_mobile)"
          class="CollectionGrid"            
        >
          <Loader 
            v-if="loading" 
            class="CollectionGrid__loader"
            size="100"
            :name="loader_style"
          />
          <ProductRecommendation :collection_handle="collection_handle" />
          <ProductTile 
            v-for="product in getProducts"
            :key="`ProductTile__${product.id}`"
            :enable_button="enable_button"
            :enable_options="enable_options"
            :enable_quick_view="enable_quick_view"
            v-bind="product"
          />                    
        </Grid>
        <Pagination
          v-if="display_pagination"          
          :disable_first_last="false"
          :current_page="current_page"
          :total_pages="total_pages"
        />
        <Button v-if="display_load_more" type="secondary" class="CollectionGrid__button" @click.native="handleLoadMore()" >
          {{ infinite_scroll_cta }}
          <Loader
            v-show="loading_more"             
            size="16"
            name="spinner"
          />
        </Button>
        <p v-if="products.length === 0 && loading === false" class="Collection__no-results">{{ 'collections.general.no_matches' | t }}</p>
      </div>
    </Overlay>
  </Section>
</template>

<script src="./CollectionGrid.ts"></script>
<style src="./CollectionGrid.scss"></style>