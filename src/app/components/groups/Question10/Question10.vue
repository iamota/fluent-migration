<template>
  <div class="Quiz__slide Question10">
    <div class="Quiz__content">                  
      <Heading
        name="Question10" 
        heading="Pleaset tell us about the symptoms..."
        heading_class="h1"
        subheading="(Select all that apply)"
        subheading_class="pbold"
      />
      <Grid 
        expand 
        desktop="2" 
        tablet="2" 
        mobile="1"
      >
        <Checkbox 
          class="Checkbox--Fever"
          name="symptoms[]" 
          label="Fever &amp; Chills" 
          value="Fever"
          inline          
        />
        <Checkbox 
          class="Checkbox--Shortness"
          name="symptoms[]" 
          label="Shortness of breath" 
          value="Shortness"
          inline
        />
        <QuizTemp v-show="showTemp" />
        <Checkbox 
          class="Checkbox--Joint"
          name="symptoms[]" 
          label="Muscle &amp; Body Aches" 
          value="Joint pain"
          inline
        />
        <Checkbox 
          class="Checkbox--Exhausted"
          name="symptoms[]" 
          label="Fatigue or exhausted" 
          value="Exhausted"
          inline
        /> 
        <Checkbox 
          class="Checkbox--Sinus-congestion"
          name="symptoms[]" 
          value="sinus"
          label="Sinus Congestion" 
          inline
        />
        <Checkbox 
          class="Checkbox--Runny"
          name="symptoms[]" 
          value="Runny nose"
          label="Runny or Stuffy Nose" 
          inline
        />
        <Checkbox 
          class="Checkbox--Nasal-congestion"
          name="symptoms[]" 
          value="nasal"
          label="Nasal Congestion" 
          inline
        />
        <Checkbox 
          class="Checkbox--Mucus"
          name="symptoms[]" 
          label="Thickened Phlegm" 
          value="Mucus"
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
          class="Checkbox--Sneezing"
          name="symptoms[]" 
          label="Sneezing" 
          value="Sneezing"
          inline
        /> 
      </Grid>
    </div>
    <QuizButtons 
      :disabled="false"
      :previous_step="previous_step" 
      :next_step="next_step"
    />
  </div>
</template>

<script src="./Question10.ts"></script>
<style src="./Question10.scss"></style>
