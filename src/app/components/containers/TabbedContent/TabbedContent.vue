<template>
  <Section v-bind="$props" :css_variables="cssVariables">
    <template v-if="tabs.length > 0">
      <Carousel
        id="TabbedContent--nav"
        class="TabbedContent__tabs"
        v-bind="mobile_props"
        cell_align="left"
        as_nav_for="#TabbedContent--display"
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
        id="TabbedContent--display"
        ref="TabbedContentDisplay"
        class="TabbedContent__content"
        v-bind="mobile_props"
        :fade="true"
        :drag_threshold="999"
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
    </template>
  </Section>
</template>

<script src="./TabbedContent.ts"></script>
<style src="./TabbedContent.scss"></style>