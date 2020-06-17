<template>
  <div class="Quiz__slide Question3">
    <div class="Quiz__content">
      <h3>What is your age?</h3>    
      <Select 
        name="age"
        label="Age"
        :options="getYears" 
        required
        design="legacy"
        rules="validAge"
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
