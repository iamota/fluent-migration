<template>
  <div class="Question1">
    <h3>What is your first name?</h3>
    <Input 
      name="first_name" 
      label="First name" 
      design="legacy" 
      placeholder="First Name"
      required 
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

<script src="./Question1.ts"></script>
<style src="./Question1.scss"></style>
