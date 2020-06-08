<template>
  <div class="Question4">
    <h3>What is your gender?</h3>
    <Grid desktop="4" tablet="4" mobile="2">
      <Radio 
        name="gender" 
        label="Male" 
        value="male"
        inline 
      />
      <Radio 
        name="gender" 
        label="Female" 
        value="female" 
        inline
      />
      <Radio 
        name="gender" 
        label="Other" 
        value="other" 
        inline 
      />
      <Radio 
        name="gender" 
        label="I'd prefer not to say" 
        value="I'd prefer not to say" 
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

<script src="./Question4.ts"></script>
<style src="./Question4.scss"></style>
