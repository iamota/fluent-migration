<template>
  <div class="Quiz__slide Question15">
    <div class="Quiz__content">
      <h3 v-if="isMyself">Did you contact a medical professional over the phone or internet (telemedicine, email, video, patient portal, etc)?</h3>
      <h3 v-if="!isMyself">Did your family member contact a medical professional over the phone or internet (telemedicine, email, video, patient portal, etc)?</h3>
      
      <div class="Radio__group">
        <Radio 
          name="contact_online" 
          label="Yes" 
          value="yes"
          inline 
        />
        <Radio 
          name="contact_online" 
          label="No" 
          value="no" 
          inline
        /> 
      </div>   
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

<script src="./Question15.ts"></script>
<style src="./Question15.scss"></style>
