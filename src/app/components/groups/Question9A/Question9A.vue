<template>
  <div class="Quiz__slide Question9A Radio--longtext">
    <div class="Quiz__content">
      <h4>Let’s get to know the family member that you cared for a bit more…</h4>
      <h3>What is that family member’s age? </h3>
      <Input 
        name="family_member_age" 
        label="Age" 
        design="legacy"
        placeholder="Enter their age"
        required
        :rules="[`integer('Please input age as an integer.')`, `validNumericalAge`]"
        @keypress.native.enter.prevent="nextStep"
      />
    </div>
    <QuizButtons 
      :disabled="isDisabled"
      :previous_step="previous_step" 
      :next_step="next_step"
    />
  </div>
</template>

<script src="./Question9A.ts"></script>
<style src="./Question9A.scss"></style>
