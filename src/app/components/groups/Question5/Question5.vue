<template>
  <div class="Quiz__slide Question5">
    <div class="Quiz__content">
      <h3>How many people live in your household, including you?</h3>
      <h4>Adults</h4>
      <Grid desktop="4" tablet="4" mobile="3">
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
      <Grid desktop="4" tablet="4" mobile="3">
        <Radio 
          name="household_children" 
          label="None" 
          value="0"
          inline 
          checked 
        />
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
          label="3+" 
          value="3+" 
          inline 
        />
      </Grid>
    </div>
    <div class="Quiz__buttons">
      <button :class="`Button Button__Primary`" @click="back">back</button>
      <button :class="`Button Button__Primary`" @click="next">continue</button>
    </div>
  </div>
</template>

<script src="./Question5.ts"></script>
<style src="./Question5.scss"></style>
