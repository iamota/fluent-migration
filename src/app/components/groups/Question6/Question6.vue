<template>
  <div class="Question6">
    <h3>Please enter your zip code.</h3>
    <Input 
      name="zip_code" 
      label="Zip Code" 
      type="number" 
      design="legacy"
      placeholder="Zip Code"
      required
      rules="validZipCode"
    />
    <button :class="`Button Button__Primary`" @click="back">back</button>
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

<script src="./Question6.ts"></script>
<style src="./Question6.scss"></style>
