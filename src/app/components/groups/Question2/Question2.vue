<template>
  <div class="Quiz__slide Question2">
    <div class="Quiz__content">
      <h3>{{ `Nice to meet you, ${getName}.` }}</h3>
      <p>We would like ask you a few questions to better understand your cold and flu experiences.  It should take you less than 5 minutes to complete.</p>
    </div>
    <div class="Quiz__buttons">
      <a href="#" class="Button Button__Primary" @click.prevent="back">back</a>
      <a href="#" class="Button Button__Primary" @click.prevent="next">continue</a>
    </div>
  </div>
</template>

<script src="./Question2.ts"></script>
<style src="./Question2.scss"></style>
