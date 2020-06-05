<template>
  <div class="Question10">
    <h4 v-if="isMyself">Now think about the most recent time you were sick with the cold or flu…</h4>
    <h3 v-if="isMyself">Which symptoms did you experience? (Select all that apply)</h3>
    <h4 v-if="!isMyself">Now think about the most recent time you cared for this family member when they were sick with a cold or the flu...</h4>
    <h3 v-if="!isMyself">Which symptoms did your family member experience? (Select all that apply)</h3>
    <Grid 
      expand 
      desktop="4" 
      tablet="3" 
      mobile="2"
    >
      <Checkbox 
        class="Checkbox--Fever"
        name="symptoms_fever" 
        label="Fever" 
        value="Fever"
        inline          
      />
      <Checkbox 
        class="Checkbox--Chills"
        name="symptoms_chills" 
        label="Chills" 
        value="Chills"
        inline
      /> 
      <Checkbox 
        class="Checkbox--Runny"
        name="symptoms_runny_nose" 
        value="Runny Nose"
        label="Runny or stuffy nose" 
        inline
      /> 
      <Checkbox 
        class="Checkbox--Sneezing"
        name="symptoms_sneezing" 
        label="Sneezing" 
        value="Sneezing"
        inline
      /> 
      <Checkbox 
        class="Checkbox--Sore"
        name="symptoms_sore_throat" 
        label="Sore throat" 
        value="Sore throat" 
        inline          
      />
      <Checkbox 
        class="Checkbox--Cough"
        name="symptoms_cough" 
        label="Cough" 
        value="Cough"
        inline
      /> 
      <Checkbox 
        class="Checkbox--Mucus"
        name="symptoms_mucus" 
        label="Colored mucus or phlegm" 
        value="Mucus"
        inline
      /> 
      <Checkbox 
        class="Checkbox--Shortness"
        name="symptoms_shortness" 
        label="Shortness of breath" 
        value="Shortness"
        inline
      /> 
      <Checkbox 
        class="Checkbox--Headache"
        name="symptoms_headache" 
        label="Headache" 
        value="Headache"         
        inline
      /> 
      <Checkbox 
        class="Checkbox--Joint"
        name="symptoms_joint_pain" 
        label="Muscle or joint pain" 
        value="Joint Pain"
        inline
      /> 
      <Checkbox 
        class="Checkbox--Exhausted"
        name="symptoms_exhausted" 
        label="Feeling tired or exhausted" 
        value="Exhausted"
        inline
      /> 
      <Checkbox 
        class="Checkbox--Appetite"
        name="symptoms_lost_appetite" 
        label="Loss of appetite" 
        value="Lost Appetite"
        inline          
      />
      <Checkbox 
        class="Checkbox--Nausea"
        name="symptoms_nausea" 
        label="Nausea" 
        value="Nausea"
        inline
      /> 
      <Checkbox 
        class="Checkbox--Vomiting"
        name="symptoms_vomiting" 
        label="Vomiting" 
        value="Vomiting"
        inline
      /> 
      <Checkbox 
        class="Checkbox--Diarrhea"
        name="symptoms_diarrhea" 
        label="Diarrhea" 
        value="Diarrhea"
        inline
      /> 
    </Grid>
    <button :class="`Button Button__Primary`" @click="back">back</button>
    <button :class="`Button Button__Primary`" @click="next">continue</button>
  </div>
</template>

<script src="./Question10.ts"></script>
<style src="./Question10.scss"></style>
