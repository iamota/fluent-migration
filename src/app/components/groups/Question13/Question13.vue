<template>
  <div class="Quiz__slide Question13 Radio--longtext">
    <div class="Quiz__content">
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
          :value="`other: `" 
          inline
        />      
        <Input 
          name="other_value"
          label="Other" 
          type="text" 
          :rules="[`maxLength(50)`]" 
          design="legacy"
          placeholder="Please describe"
        />
        <Radio 
          name="visit" 
          label="I did not visit any health facility in person" 
          value="No visit" 
          inline
        /> 
      </Grid> 
    </div>
    <div class="Quiz__buttons">
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
  </div>
</template>

<script src="./Question13.ts"></script>
<style src="./Question13.scss"></style>
