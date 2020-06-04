<template>
  <div class="Question11">
    <h3 v-if="isMyself">Did you take your temperature?</h3>
    <h3 v-if="!isMyself">Did your family member have their temperature taken?</h3>
    <div class="Radio__group">
      <Radio 
        name="take_temperature" 
        label="Yes" 
        value="yes"
        inline 
      />
      <Radio 
        name="take_temperature" 
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

<script src="./Question11.ts"></script>
<style src="./Question11.scss"></style>
