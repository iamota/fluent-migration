<template>
  <div class="Quiz__slide Question10">
    <Heading
      name="Question10" 
      :heading="heading"
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
          label="Fever or Chills" 
          value="fever_chills"
        />
        <Checkbox 
          class="Checkbox--Shortness"
          name="symptoms[]" 
          label="Shortness of Breath" 
          value="shortness_of_breath"
        />
        <QuizTemp v-show="showTemp" />
        <Checkbox 
          class="Checkbox--Joint"
          name="symptoms[]" 
          label="Muscle or Body Aches" 
          value="body_aches"
        />
        <Checkbox 
          class="Checkbox--Exhausted"
          name="symptoms[]" 
          label="Fatigue or Exhaustion" 
          value="fatigue_tiredness"
        /> 
        <Checkbox 
          class="Checkbox--Sinus-congestion"
          name="symptoms[]" 
          label="Sinus Congestion" 
          value="sinus_congestion"
        />
        <Checkbox 
          class="Checkbox--Runny"
          name="symptoms[]" 
          label="Runny or Stuffy Nose" 
          value="runny_stuffy_nose"
        />
        <Checkbox 
          class="Checkbox--Nasal-congestion"
          name="symptoms[]" 
          label="Nasal Congestion" 
          value="nasal_congestion"
        />
        <Checkbox 
          class="Checkbox--Mucus"
          name="symptoms[]" 
          label="Thickened Phlegm" 
          value="thickened_phlegm"
        /> 
        <Checkbox 
          class="Checkbox--Headache"
          name="symptoms[]" 
          label="Headache" 
          value="headache"
        />
        <Checkbox 
          class="Checkbox--Sore"
          name="symptoms[]" 
          label="Sore Throat" 
          value="sore_throat"
        />
        <Checkbox 
          class="Checkbox--Cough"
          name="symptoms[]" 
          label="Cough" 
          value="coughing"
        /> 
        <Checkbox 
          class="Checkbox--Sneezing"
          name="symptoms[]" 
          label="Sneezing" 
          value="sneezing"
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
