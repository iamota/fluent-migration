<template>
  <div class="Quiz__slide Question7 Radio--longtext">
    <h3 class="Quiz__heading h1">If answering for a family member, please tell us their age.</h3>
    <div class="Quiz__content">
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

<script src="./Question7.ts"></script>
<style src="./Question7.scss"></style>
