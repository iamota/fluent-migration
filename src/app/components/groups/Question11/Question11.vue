<template>
  <div class="Quiz__slide Question11">
    <div class="Quiz__content">
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
    </div>
    <div class="Quiz__buttons">  
      <a :class="`Button Button__Primary`" @click="back">back</a>
      <a 
        class="Button Button__Primary" 
        :class="{ 'noHover': isDisabled }" 
        :disabled="isDisabled" 
        @click="next"
      >
        continue
      </a>
    </div>
  </div>
</template>

<script src="./Question11.ts"></script>
<style src="./Question11.scss"></style>
