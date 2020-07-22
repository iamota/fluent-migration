<template>
  <div v-if="heading || preheading || subheading" class="Heading">
    <component
      :is="preheading_type"
      v-if="preheading"
      :class="`${name}__preheading Heading__preheading ${preheading_class}`"
      :aria-level="preheading_level"
    >
      {{ preheading }}
    </component>
    <component
      :is="heading_type"
      v-if="heading"
      :class="`${name}__heading Heading__heading ${heading_class}`"
      :aria-level="heading_level"
      v-html="heading"
    />
    <component
      :is="subheading_type"
      v-if="subheading"
      :class="`${name}__subheading Heading__subheading ${subheading_class}`"
      :aria-level="subheading_level"
    >
      {{ subheading }}
    </component>
  </div>
</template>

<script src="./Heading.ts"></script>
<style src="./Heading.scss"></style>
