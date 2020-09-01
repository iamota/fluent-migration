<template>
  <div class="Quiz__slide Question6">
    <div class="Quiz__content">
      <h3>Please enter your zip code.</h3>
      <Input 
        name="zip_code" 
        label="Zip Code" 
        design="legacy"
        placeholder="Zip Code"
        required
        rules="validZipCode"
      />
    </div>
    <QuizButtons 
      :disabled="isDisabled"
      :previous_step="previous_step" 
      :next_step="next_step"
    />
  </div>
</template>

<script src="./Question6.ts"></script>
<style src="./Question6.scss"></style>
