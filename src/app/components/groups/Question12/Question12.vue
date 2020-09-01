<template>
  <div class="Quiz__slide Question12">
    <div class="Quiz__content">
      <h3 v-if="isMyself">What was your highest temperature measured?</h3>
      <h3 v-if="!isMyself">What was the highest temperature measured?</h3>
      <div class="Slider">
        <Radio 
          name="temperature" 
          label="98.5º F and under" 
          value="Normal"
          inline 
          checked 
        />
        <Radio 
          name="temperature" 
          label="98.6 – 100.3º F" 
          value="Elevated" 
          inline
        /> 
        <Radio 
          name="temperature" 
          label="100.4 – 102.9º F" 
          value="Low fever"
          inline 
          checked 
        />
        <Radio 
          name="temperature" 
          label="103º F and over" 
          value="High fever" 
          inline
        />
      </div> 
    </div>
    <QuizButtons 
      :disabled="false"
      previous_step="question11" 
      next_step="question13"
    />
  </div>
</template>

<script src="./Question12.ts"></script>
<style src="./Question12.scss"></style>
