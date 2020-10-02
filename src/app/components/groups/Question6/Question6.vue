<template>
  <div class="Quiz__slide Question6 Radio--longtext">
    <h3 class="Quiz__heading h1">Please tell us how long you have been experiencing symptoms.</h3>   
    <div class="Quiz__content">
      <Grid expand>
        <Radio 
          name="symptom_duration" 
          label="6 days or less" 
          value="6"
          inline 
        />
        <Radio 
          name="symptom_duration" 
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

<script src="./Question6.ts"></script>
<style src="./Question6.scss"></style>
