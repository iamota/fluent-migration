<template>
  <div class="Quiz__slide Question3 Radio--longtext">
    <h3 class="Quiz__heading h1">What is your gender?</h3>
    <div class="Quiz__content">
      <Grid desktop="3" tablet="3" mobile="1">
        <Radio 
          name="gender" 
          label="Male" 
          value="male"
          inline 
        />
        <Radio 
          name="gender" 
          label="Female" 
          value="female" 
          inline
        />
        <Radio 
          name="gender" 
          label="Other" 
          value="other" 
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

<script src="./Question3.ts"></script>
<style src="./Question3.scss"></style>
