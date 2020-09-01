<template>
  <div class="Quiz__slide Question8 Radio--longtext">
    <div class="Quiz__content">
      <h3>We’d like to ask you about the most recent time you or a family member had a cold or the flu.  <br>Please choose one:</h3>
      <Grid expand>
        <Radio 
          name="focus" 
          label="Answering for myself" 
          value="myself"
          inline 
        />
        <Radio 
          name="focus" 
          label="Answering for a family member" 
          value="family member" 
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
