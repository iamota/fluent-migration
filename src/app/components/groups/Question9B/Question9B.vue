<template>
  <div class="Quiz__slide Question9B">
    <div class="Quiz__content">
      <h3>What is the family member’s gender?</h3>
      <Grid desktop="4" tablet="4" mobile="2">
        <Radio 
          name="family_gender" 
          label="Male" 
          value="male"
          inline 
        />
        <Radio 
          name="family_gender" 
          label="Female" 
          value="female" 
          inline
        />
        <Radio 
          name="family_gender" 
          label="Other" 
          value="other" 
          inline 
        />
        <Radio 
          name="family_gender" 
          label="I'd prefer not to say" 
          value="I'd prefer not to say" 
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

<script src="./Question9B.ts"></script>
<style src="./Question9B.scss"></style>
