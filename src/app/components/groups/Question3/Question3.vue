<template>
  <div class="Question3">
    <h3>In what year were you born?</h3>    
    <Select 
      name="birthyear"
      label="Year of birth"
      :options="getYears" 
      required
      design="legacy"
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
