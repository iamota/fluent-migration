<template>
  <div>
    <div :class="{ CollectionFilters: true, 'CollectionFilters--expanded': display_values }">
      <div class="CollectionFilters__item CollectionFilters__item--label">{{ 'collections.general.filter_heading' | t }}</div>
      <div v-for="(category, i) in categories" :key="i" :class="{CollectionFilters__item: true, [`CollectionFilters__item--${category}`]: true}">
        <ul>          
          <li class="CollectionFilters__category">
            <span tabindex="0" @click="handleCategoryClick(category)" @keydown.enter="handleCategoryClick(category)">{{ category }}
              <span v-if="active_filters[category] && active_filters[category].length > 0" class="CollectionFilters__category-items">
                :
                <span v-for="(active_filter, index) in active_filters[category]" :key="index"><template v-if="active_filters[category].length > 1 && index !== 0">, </template>{{ active_filter }}</span>
              </span>
            </span>
            <ul 
              ref="filterContainer"
              :class="{'CollectionFilters__list-values': true, 'CollectionFilters__list-values--active': selected_category === category && display_values === true}"
            >
              <li
                v-for="(value, index) in getCategoryValues(category)"
                :key="index"
                :class="categoryValueClass(value)"                
              >
                <div v-if="available_tags.indexOf(value.tag_name) > -1">
                  <Anchor href="#" @click.native.prevent="handleFilterItemClick(value.link)">{{ value.text }}</Anchor>
                </div>
                <div v-else>
                  <p>{{ value.text }}</p>
                </div>
              </li>
              <li v-if="current_tags.length > 0" class="CollectionFilters__value CollectionFilters__value--clear">
                <Anchor href="#" @click.native.prevent="handleFilterClear(category)">{{ 'collections.general.filter_clear' | t }}</Anchor>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div v-if="enable_clear && current_tags.length > 0" class="CollectionFilters__clear-all">
        <Anchor href="#" role="button" @click.native.prevent="handleClearAll()">{{ 'collections.general.filter_clear_all' | t }}</Anchor>
      </div>      
    </div>
    <ul v-if="debug">
      <li>
        All Tags:
        <ul>
          <li v-for="(tag, i) in all_tags" :key="i">{{ tag }}</li>
        </ul>
      </li>
      <li>
        Current Tags:
        <ul>
          <li v-for="(tag, i) in current_tags" :key="i">{{ tag }}</li>
        </ul>
      </li>
      <li>
        Available Tags:
        <ul>
          <li v-for="(tag, i) in available_tags" :key="i">{{ tag }}</li>
        </ul>
      </li>
      <li>
        Filter Tags:
        <ul>
          <li v-for="(tag, i) in filter_tags" :key="i">{{ tag }}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script src="./CollectionFilters.ts"></script>
<style src="./CollectionFilters.scss"></style>
