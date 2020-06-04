<template>
  <div class="Question8 Radio--longtext">
    <h3>We’d like to ask you about the most recent time you or a family member had a cold or the flu.  Please choose one.</h3>
    <Grid expand>
      <Radio 
        name="focus" 
        label="Answering for myself" 
        value="myself"
        inline 
      />
      <Radio 
        name="focus" 
        label="Answering for a Family Member" 
        value="family_member" 
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

<script src="./Question8.ts"></script>
<style src="./Question8.scss"></style>
