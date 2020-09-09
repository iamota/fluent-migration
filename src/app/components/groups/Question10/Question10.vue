<template>
  <div class="Quiz__slide Question10">
    <Heading
      name="Question10" 
      heading="Pleaset tell us about the symptoms..."
      heading_class="Quiz__heading  h1"
      subheading="(Select all that apply)"
      subheading_class="pbold"
    />
    <div class="Quiz__content">                  
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
          value="fever_chills"
          inline          
        />
        <Checkbox 
          class="Checkbox--Shortness"
          name="symptoms[]" 
          label="Shortness of breath" 
          value="shortness_of_breath"
          inline
        />
        <QuizTemp v-show="showTemp" />
        <Checkbox 
          class="Checkbox--Joint"
          name="symptoms[]" 
          label="Muscle &amp; Body Aches" 
          value="body_aches"
          inline
        />
        <Checkbox 
          class="Checkbox--Exhausted"
          name="symptoms[]" 
          label="Fatigue or exhausted" 
          value="fatigue_tiredness"
          inline
        /> 
        <Checkbox 
          class="Checkbox--Sinus-congestion"
          name="symptoms[]" 
          label="Sinus Congestion" 
          value="sinus_congestion"
          inline
        />
        <Checkbox 
          class="Checkbox--Runny"
          name="symptoms[]" 
          label="Runny or Stuffy Nose" 
          value="runny_stuffy_nose"
          inline
        />
        <Checkbox 
          class="Checkbox--Nasal-congestion"
          name="symptoms[]" 
          label="Nasal Congestion" 
          value="nasal_congestion"
          inline
        />
        <Checkbox 
          class="Checkbox--Mucus"
          name="symptoms[]" 
          label="Thickened Phlegm" 
          value="thickened_phlegm"
          inline
        /> 
        <Checkbox 
          class="Checkbox--Headache"
          name="symptoms[]" 
          label="Headache" 
          value="headache"         
          inline
        />
        <Checkbox 
          class="Checkbox--Sore"
          name="symptoms[]" 
          label="Sore throat" 
          value="sore_throat" 
          inline          
        />
        <Checkbox 
          class="Checkbox--Cough"
          name="symptoms[]" 
          label="Cough" 
          value="coughing"
          inline
        /> 
        <Checkbox 
          class="Checkbox--Sneezing"
          name="symptoms[]" 
          label="Sneezing" 
          value="sneezing"
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
