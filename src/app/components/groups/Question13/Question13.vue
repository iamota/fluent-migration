<template>
  <div class="Question13 Radio--longtext">
    <h3 v-if="isMyself">Did you visit (in person) any of the following healthcare facilities?</h3>
    <h3 v-if="!isMyself">Did your family member visit (in person) any of the following healthcare facilities?</h3>
    <Grid expand desktop="2">
      <Radio 
        name="visit" 
        label="Doctor’s office" 
        value="doctor_office"
        inline 
      />
      <Radio 
        name="visit" 
        label="Retail Health Clinic" 
        value="retail_health" 
        inline
      /> 
      <Radio 
        name="visit" 
        label="Urgent Care Clinic" 
        value="urgent_care" 
        inline
      /> 
      <Radio 
        name="visit" 
        label="Emergency Room" 
        value="emergency_room" 
        inline
      /> 
      <Radio 
        name="visit" 
        label="Other" 
        :value="`other-${other_value}`" 
        inline
      />      
      <input type="text" @input="updateRadioInput">
      <Radio 
        name="visit" 
        label="I did not visit any health facility in person" 
        value="no_visit" 
        inline
      /> 
    </Grid> 
    <button :class="`Button Button__Primary`" @click="back">back</button>
    <button 
      class="Button Button__Primary" 
      :class="{ 'noHover': isDisabled }" 
      :disabled="isDisabled" 
      @click="next"
    >
      continue
    </button>
  </div>
</template>

<script src="./Question13.ts"></script>
<style src="./Question13.scss"></style>
