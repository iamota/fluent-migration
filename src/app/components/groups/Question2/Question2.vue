<template>
  <div class="Quiz__slide Question2">
    <div class="Quiz__content">
      <h3>What is your age?</h3>    
      <Input 
        name="age" 
        label="Age" 
        design="legacy"
        placeholder="Age"
        required
        :rules="[`integer('Please input age as an integer.')`, `validNumericalAge`]"
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

<script src="./Question2.ts"></script>
<style src="./Question2.scss"></style>
