<template>
  <div class="Question13 Radio--longtext">
    <h3 v-if="isMyself">Did you visit (in person) any of the following healthcare facilities?</h3>
    <h3 v-if="!isMyself">Did your family member visit (in person) any of the following healthcare facilities?</h3>
    <Grid expand desktop="2">
      <Radio 
        name="visit" 
        label="Doctor’s office" 
        value="Doctor’s office"
        inline 
      />
      <Radio 
        name="visit" 
        label="Retail Health Clinic" 
        value="Retail Health Clinic" 
        inline
      /> 
      <Radio 
        name="visit" 
        label="Urgent Care Clinic" 
        value="Urgent Care Clinic" 
        inline
      /> 
      <Radio 
        name="visit" 
        label="Emergency Room" 
        value="Emergency Room" 
        inline
      /> 
      <Radio 
        name="visit" 
        label="Other" 
        :value="`other: ${otherValue}`" 
        inline
      />      
      <Input 
        name="othe_value"
        type="text" 
        :rules="[`maxLength(50)`]" 
        design="legacy"
      />
      <Radio 
        name="visit" 
        label="I did not visit any health facility in person" 
        value="No visit" 
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
