<template>
  <div class="ProgressBar" :class="`ProgressBar--${currentStep}`">
    <div v-for="i in currentStep" :key="i" class="ProgressBar__step" />
  </div>    
</template>

<script src="./ProgressBar.ts"></script>
<style src="./ProgressBar.scss"></style>
