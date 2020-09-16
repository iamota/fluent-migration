<template>
  <Section v-bind="$props" :css_variables="cssVariables">
    <Overlay v-bind="$props">
      <div class="TabbedContent__content">
        <div class="TabbedContent__tabs">
          <div
            v-for="(title, index) in tabTitles"
            :key="index"
            :class="{ 'TabbedContent__tab--selected': current_tab==title}"
            class="TabbedContent__tab"
            @click="changeTab(title)"
          >
            <span>{{ title }}</span>
          </div>
        </div>
      </div>
    </Overlay>
  </Section>
</template>

<script src="./TabbedContent.ts"></script>
<style src="./TabbedContent.scss"></style>