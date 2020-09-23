<template>
  <div class="Quiz__slide Question9 Radio--longtext">
    <h3 class="Quiz__heading h1">How long have they had their symptoms?</h3>   
    <div class="Quiz__content">
      <Grid expand>
        <Radio 
          name="family_symptom_duration" 
          label="6 days or less" 
          value="6"
          inline 
        />
        <Radio 
          name="family_symptom_duration" 
          label="7 days or more" 
          value="7" 
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


<script src="./Question9.ts"></script>
<style src="./Question9.scss"></style>
