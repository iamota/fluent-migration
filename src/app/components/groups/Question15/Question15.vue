<template>
  <div class="Question15">
    <h3 v-if="isMyself">Did you contact a medical professional over the phone or internet (not in person)?</h3>
    <h3 v-if="!isMyself">Did your family member contact a medical professional over the phone or internet (not in person)?</h3>
    
    <div class="Radio__group">
      <Radio 
        name="contact_online" 
        label="Yes" 
        value="yes"
        inline 
      />
      <Radio 
        name="contact_online" 
        label="No" 
        value="no" 
        inline
      /> 
    </div>    
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

<script src="./Question15.ts"></script>
<style src="./Question15.scss"></style>
