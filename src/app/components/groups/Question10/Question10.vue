<template>
  <div class="Quiz__slide Question10">
    <div class="Quiz__content">      
      <h3 v-if="isMyself">Now think about the most recent time you were sick with a cold or the flu... <br> Which symptoms did you experience? (Select all that apply)</h3>      
      <h3 v-if="!isMyself">Now think about the most recent time you cared for this family member when they were sick with a cold or the flu... <br> Which symptoms did your family member experience? (Select all that apply)</h3>
      <Grid 
        expand 
        desktop="4" 
        tablet="3" 
        mobile="2"
      >
        <Checkbox 
          class="Checkbox--Fever"
          name="symptoms[]" 
          label="Fever" 
          value="Fever"
          inline          
        />
        <Checkbox 
          class="Checkbox--Chills"
          name="symptoms[]" 
          label="Chills" 
          value="Chills"
          inline
        /> 
        <Checkbox 
          class="Checkbox--Runny"
          name="symptoms[]" 
          value="Runny Nose"
          label="Runny or stuffy nose" 
          inline
        /> 
        <Checkbox 
          class="Checkbox--Sneezing"
          name="symptoms[]" 
          label="Sneezing" 
          value="Sneezing"
          inline
        /> 
        <Checkbox 
          class="Checkbox--Sore"
          name="symptoms[]" 
          label="Sore throat" 
          value="Sore throat" 
          inline          
        />
        <Checkbox 
          class="Checkbox--Cough"
          name="symptoms[]" 
          label="Cough" 
          value="Cough"
          inline
        /> 
        <Checkbox 
          class="Checkbox--Mucus"
          name="symptoms[]" 
          label="Colored mucus or phlegm" 
          value="Mucus"
          inline
        /> 
        <Checkbox 
          class="Checkbox--Shortness"
          name="symptoms[]" 
          label="Shortness of breath" 
          value="Shortness"
          inline
        /> 
        <Checkbox 
          class="Checkbox--Headache"
          name="symptoms[]" 
          label="Headache" 
          value="Headache"         
          inline
        /> 
        <Checkbox 
          class="Checkbox--Joint"
          name="symptoms[]" 
          label="Muscle or joint pain" 
          value="Joint Pain"
          inline
        /> 
        <Checkbox 
          class="Checkbox--Exhausted"
          name="symptoms[]" 
          label="Feeling tired or exhausted" 
          value="Exhausted"
          inline
        /> 
        <Checkbox 
          class="Checkbox--Appetite"
          name="symptoms[]" 
          label="Loss of appetite" 
          value="Lost Appetite"
          inline          
        />
        <Checkbox 
          class="Checkbox--Nausea"
          name="symptoms[]" 
          label="Nausea" 
          value="Nausea"
          inline
        /> 
        <Checkbox 
          class="Checkbox--Vomiting"
          name="symptoms[]" 
          label="Vomiting" 
          value="Vomiting"
          inline
        /> 
        <Checkbox 
          class="Checkbox--Diarrhea"
          name="symptoms[]" 
          label="Diarrhea" 
          value="Diarrhea"
          inline
        /> 
      </Grid>
    </div>
    <div class="Quiz__buttons">
      <button :class="`Button Button__Primary`" @click="back">back</button>
      <button :class="`Button Button__Primary`" @click="next">continue</button>
    </div>
  </div>
</template>

<script src="./Question10.ts"></script>
<style src="./Question10.scss"></style>
