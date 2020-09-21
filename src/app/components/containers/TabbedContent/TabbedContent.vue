<template>
  <Section v-bind="$props" :css_variables="cssVariables">
    <Carousel
      :id="`TabbedCarousel`"
      class="TabbedContent__tabs"
      v-bind="mobile_props"
      cell_align="left"
      as_nav_for="#TabbedCarousel--content"
      :draggable="true"
    >
      <Slide
        v-for="(title, index) in tabTitles"
        :key="index"
        class="TabbedContent__tab"
      >
        <div>
          <span>{{ title }}</span>
        </div>
      </Slide>
    </Carousel>
    <Carousel
      :id="`TabbedCarousel--content`"
      ref="TabbedCarouselContent"
      class="TabbedContent__content"
      v-bind="mobile_props"
      :fade="true"
    >
      <Slide
        v-for="(tab_data, index) in tabs"
        :key="index"
        class="TabbedContent__body"
      >
        <div
          v-html="tab_data.tab_content"
        />
      </Slide>
    </Carousel>
  </Section>
</template>

<script src="./TabbedContent.ts"></script>
<style src="./TabbedContent.scss"></style>