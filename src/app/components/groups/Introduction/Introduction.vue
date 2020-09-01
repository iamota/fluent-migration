<template>
  <div class="Quiz__slide Introduction">
    <div class="Quiz__content">
      <h3>We are working on an exciting new way to diagnose and treat cold and flu for people like you.  To help make it amazing, we would like to ask you a few questions about your experiences.</h3>       
    </div>
    <QuizButtons 
      :disabled="isDisabled"
      previous_step="starter" 
      next_step="question1"
    />
  </div>
</template>

<script src="./Introduction.ts"></script>
<style src="./Introduction.scss"></style>
