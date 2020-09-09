<template>
  <div class="Quiz__slide Question4 Radio--longtext">
    <h3 class="Quiz__heading h1">Are you answering for yourself or a for a family member?</h3>
    <div class="Quiz__content">
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
