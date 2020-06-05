<template>
  <div class="Question5">
    <h3>How many people live in your household, including you?</h3>
    <h4>Adults</h4>
    <Grid desktop="4">
      <Radio 
        name="household_adults" 
        label="1" 
        value="1"
        inline 
        checked 
      />
      <Radio 
        name="household_adults" 
        label="2" 
        value="2" 
        inline
      />   
      <Radio 
        name="household_adults" 
        label="3" 
        value="3" 
        inline 
      />
      <Radio 
        name="household_adults" 
        label="4+" 
        value="4+" 
        inline 
      />
    </Grid>
    <h4>Children (under age 18)</h4>
    <Grid desktop="4">
      <Radio 
        name="household_children" 
        label="1" 
        value="1"
        inline 
      />
      <Radio 
        name="household_children" 
        label="2" 
        value="2" 
        inline
      />   
      <Radio 
        name="household_children" 
        label="3" 
        value="3" 
        inline 
      />
      <Radio 
        name="household_children" 
        label="4+" 
        value="4+" 
        inline 
      />
    </Grid>
    <button :class="`Button Button__Primary`" @click="back">back</button>
    <button :class="`Button Button__Primary`" @click="next">continue</button>
  </div>
</template>

<script src="./Question5.ts"></script>
<style src="./Question5.scss"></style>
