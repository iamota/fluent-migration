<template>
  <div class="Question3">
    <h3>What is your age?</h3>    
    <Select 
      name="age"
      label="Age"
      :options="getYears" 
      required
      design="legacy"
      rules="validAge"
    />
    <button 
      class="Button Button__Primary" 
      :class="{ 'noHover': isDisabled }" 
      :disabled="isDisabled" 
      @click="next"
    >
      continue
    </button>
  </div>
</template>

<script src="./Question3.ts"></script>
<style src="./Question3.scss"></style>
