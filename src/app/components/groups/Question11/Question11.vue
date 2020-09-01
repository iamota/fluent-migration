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
    <QuizButtons 
      :disabled="isDisabled"
      :previous_step="previous_step" 
      :next_step="next_step"
    />
  </div>
</template>

<script src="./Question11.ts"></script>
<style src="./Question11.scss"></style>
