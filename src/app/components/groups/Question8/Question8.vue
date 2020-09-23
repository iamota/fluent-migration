<template>
  <div class="Quiz__slide Question8 Radio--longtext">
    <h3 class="Quiz__heading h1">How quickly did their symptoms start?</h3>   
    <div class="Quiz__content">
      <Grid expand>
        <Radio 
          name="family_symptom_onset" 
          label="Gradual over a few days" 
          value="gradual"
          inline 
        />
        <Radio 
          name="family_symptom_onset" 
          label="Sudden in a matter of hours" 
          value="sudden" 
          inline
        /> 
      </Grid>   
    </div>
    <QuizButtons 
      :disabled="isDisabled"
      :previous_step="previous_step" 
      :next_step="next_step"
    />
  </div>
</template>

<script src="./Question8.ts"></script>
<style src="./Question8.scss"></style>
