<template>
  <div class="Question9">
    <h3 v-if="isMyself">Have you gotten a flu vaccine in the past 12 months?</h3> 
    <h3 v-if="!isMyself">Had your family member gotten a flu vaccine in the past 12 months?</h3>     
    <Grid expand desktop="3">
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
        name="vaccine" 
        label="I don't remember" 
        value="I don't remember" 
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

<script src="./Question9.ts"></script>
<style src="./Question9.scss"></style>
