<template>
  <div class="Quiz__slide Question4 Radio--longtext">
    <div class="Quiz__content">
      <h3>Are you answering for yourself or a for a family member?</h3>
      <Grid expand>
        <Radio 
          name="focus" 
          label="Answering for myself" 
          value="self"
          inline 
        />
        <Radio 
          name="focus" 
          label="Answering for a family member" 
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

<script src="./Question4.ts"></script>
<style src="./Question4.scss"></style>
