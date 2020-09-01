<template>
  <div class="Quiz__slide Question1">
    <div class="Quiz__content">
      <h3>What is your first name?</h3>
      <Input 
        name="first_name" 
        label="First name" 
        design="legacy" 
        placeholder="First Name"
        required 
        :rules="[`alpha`, `minLength(3)`, `maxLength(20)`]"
      />
    </div>
    <QuizButtons 
      :disabled="isDisabled"
      previous_step="starter" 
      next_step="question2"
    />
  </div>
</template>

<script src="./Question1.ts"></script>
<style src="./Question1.scss"></style>
