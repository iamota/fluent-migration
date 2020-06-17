<template>
  <div class="Quiz__slide Question7">
    <div class="Quiz__content">
      <h3>How many times have you or your household members had a cold or the flu in the past 12 months?</h3>
      <Grid desktop="4" tablet="4" mobile="2">
        <Radio 
          name="times_sick" 
          label="0" 
          value="0"
          inline 
        />
        <Radio 
          name="times_sick" 
          label="1-2" 
          value="1-2" 
          inline
        /> 
        <Radio 
          name="times_sick" 
          label="3-4" 
          value="3-4" 
          inline 
        />
        <Radio 
          name="times_sick" 
          label="5+" 
          value="5+" 
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

<script src="./Question7.ts"></script>
<style src="./Question7.scss"></style>
