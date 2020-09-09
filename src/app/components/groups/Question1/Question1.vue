<template>
  <div class="Quiz__slide Question1">
    <h3 class="Quiz__heading h1">What is your <br>first name?</h3>
    <div class="Quiz__content">
      <Input 
        name="first_name" 
        label="First name" 
        design="legacy" 
        placeholder="Enter first name"
        required 
        :rules="[`alpha`, `minLength(3)`, `maxLength(20)`]" 
        @keypress.native.enter.prevent="nextStep"
      />
    </div> 
    <QuizButtons 
      :disabled="isDisabled"
      :previous_step="previous_step" 
      :next_step="next_step"
    />
  </div>
</template>

<script src="./Question1.ts"></script>
<style src="./Question1.scss"></style>
