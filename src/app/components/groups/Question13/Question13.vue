<template>
  <div class="Quiz__slide Question13 Radio--longtext">
    <div class="Quiz__content">
      <h3 v-if="isMyself">Did you visit any of the following healthcare facilities (in person)?</h3>
      <h3 v-if="!isMyself">Did your family member visit any of the following healthcare facilities  (in person)?</h3>
      <Grid expand desktop="2">
        <Radio 
          name="visit" 
          label="Doctor’s Office" 
          value="Doctor’s Office"
          inline 
        />
        <Radio 
          name="visit" 
          label="Retail Health Clinic (e.g. CVS Minute Clinic)" 
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
          v-if="isMyself" 
          name="visit" 
          label="I did not visit a health facility in person" 
          value="No visit" 
          inline
        /> 
        <Radio
          v-if="!isMyself" 
          name="visit" 
          label="My family member did not visit a health facility in person" 
          value="No visit" 
          inline
        /> 
      </Grid> 
    </div>
    <div class="Quiz__buttons">
      <a href="#" :class="`Button Button__Primary`" @click.prevent="back">back</a>
      <a 
        href="#" 
        class="Button Button__Primary" 
        :class="{ 'noHover': isDisabled }" 
        :disabled="isDisabled" 
        @click.prevent="next"
      >
        continue
      </a>
    </div>
  </div>
</template>

<script src="./Question13.ts"></script>
<style src="./Question13.scss"></style>
