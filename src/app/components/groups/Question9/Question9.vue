<template>
  <div class="Quiz__slide Question9">
    <div class="Quiz__content">
      <h3 v-if="isMyself">Did you get the flu vaccine in the past 12 months?</h3> 
      <h3 v-if="!isMyself">Did your family member get the flu vaccine in the past 12 months?</h3>     
      <Grid 
        expand 
        desktop="3" 
        tablet="3" 
        mobile="2"
      >
        <Radio 
          name="vaccine" 
          label="Yes" 
          value="yes"
          inline 
        />
        <Radio 
          name="vaccine" 
          label="No" 
          value="no" 
          inline
        /> 
        <Radio
          v-if="isMyself" 
          name="vaccine" 
          label="I don't remember" 
          value="I don't remember" 
          inline
        />
        <Radio
          v-if="!isMyself" 
          name="vaccine" 
          label="I don't know" 
          value="I don't know" 
          inline
        />  
      </Grid>   
    </div>
    <div class="Quiz__buttons">
      <button type="button" :class="`Button Button__Primary`" @click="back">back</button>
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

<script src="./Question9.ts"></script>
<style src="./Question9.scss"></style>
