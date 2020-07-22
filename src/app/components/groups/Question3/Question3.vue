<template>
  <div class="Quiz__slide Question3">
    <div class="Quiz__content">
      <h3>What is your age?</h3>    
      <Input 
        name="age" 
        label="Age" 
        design="legacy"
        placeholder="Age"
        required
        :rules="[`integer('Please input age as an integer.')`, `validNumericalAge`]"
      />
    </div>
    <div class="Quiz__buttons">
      <button type="button" class="Button Button__Primary" @click="back">back</button>
      <button 
        class="Button Button__Primary" 
        :class="{ 'noHover': isDisabled }" 
        :disabled="isDisabled" 
        @click="next"
      >
        continue
      </button>
    </div>
  </div>
</template>

<script src="./Question3.ts"></script>
<style src="./Question3.scss"></style>
