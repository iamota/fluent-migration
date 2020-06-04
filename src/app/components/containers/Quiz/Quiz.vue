<template>
  <Section v-bind="$props" :css_variables="cssVariables">
    <ProgressBar />
    <Overlay v-bind="$props">
      <Form
        id="quiz"
        action="/pages/thankyou"
        method="post" 
        class="Quiz__form"
        :validators="validators"
      >
        <Heading v-if="currentStep === `starter`" v-bind="$props" />     
        <button v-if="currentStep === `starter` && cta !== ``" :class="`Button Button__${cta_style}`" @click="startQuiz">{{ cta }}</button>
        <!-- <transition> -->
        <introduction v-if="currentStep === `introduction`" key="introduction" />
        <Question1 v-if="currentStep === `question1`" key="question1" />
        <Question2 v-if="currentStep === `question2`" key="question2" />
        <Question3 v-if="currentStep === `question3`" key="question3" />
        <Question4 v-if="currentStep === `question4`" key="question4" />
        <Question5 v-if="currentStep === `question5`" key="question5" />
        <Question6 v-if="currentStep === `question6`" key="question6" />
        <Question7 v-if="currentStep === `question7`" key="question7" />
        <Question8 v-if="currentStep === `question8`" key="question8" />
        <Question9 v-if="currentStep === `question9`" key="question9" />
        <Question9A v-if="currentStep === `question9a`" key="question9a" />
        <Question9B v-if="currentStep === `question9b`" key="question9b" />
        <Question9C v-if="currentStep === `question9c`" key="question9c" />
        <Question10 v-if="currentStep === `question10`" key="question10" />
        <Question11 v-if="currentStep === `question11`" key="question11" />
        <Question12 v-if="currentStep === `question12`" key="question12" />
        <Question13 v-if="currentStep === `question13`" key="question13" />
        <Question14 v-if="currentStep === `question14`" key="question14" />
        <Question15 v-if="currentStep === `question15`" key="question15" />
        <Question16 v-if="currentStep === `question16`" key="question16" />
        <Question17 v-if="currentStep === `question17`" key="question17" />
        <Email v-if="currentStep === `email`" key="email" />
        <!-- </transition> -->
      </Form>
    </Overlay>    
  </Section>
</template>

<script src="./Quiz.ts"></script>
<style src="./Quiz.scss"></style>