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
    <div class="Quiz__buttons">
      <a href="#" :class="`Button Button__Primary`" @click.prevent="back">back</a>
      <a 
        href="#" 
        class="Button Button__Primary" 
        :class="{ 'noHover': isDisabled }" 
        :disabled="isDisabled" 
        @click.prevent="next"
      >
        continue
      </a>
    </div>
  </div>
</template>

<script src="./Question6.ts"></script>
<style src="./Question6.scss"></style>
