<template>
  <div class="Quiz__slide Question9A Radio--longtext">
    <div class="Quiz__content">
      <h4>Let’s get to know the family member that you cared for a bit more…</h4>
      <h3>What is your family member’s age? </h3>
      <Grid expand desktop="2">
        <Radio 
          name="family_member_age" 
          label="Infant (<12 months)" 
          value="infant"
          inline 
        />
        <Radio 
          name="family_member_age" 
          label="Toddler (1-4 years)" 
          value="toddler" 
          inline
        /> 
        <Radio 
          name="family_member_age" 
          label="Child (5-12 years)" 
          value="child" 
          inline
        /> 
        <Radio 
          name="family_member_age" 
          label="Teen (13-18 years)" 
          value="teen" 
          inline
        /> 
        <Radio 
          name="family_member_age" 
          label="Young Adult (19-24 years)" 
          value="young" 
          inline
        />      
        <Radio 
          name="family_member_age" 
          label="Adult (25 – 65 years)" 
          value="adult" 
          inline
        />    
        <Radio 
          name="family_member_age" 
          label="Senior (65 and over)" 
          value="senior" 
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

<script src="./Question9A.ts"></script>
<style src="./Question9A.scss"></style>
