<template>
  <Section v-bind="$props" :css_variables="cssVariables">
    <!-- <ProgressBar /> -->
    <Overlay v-bind="$props">
      <Form
        id="quizForm"        
        action="https://submit.jotform.com/submit/202438328987164/"
        name="form_202438328987164"
        method="post" 
        class="Quiz__form"
        :validators="validators"
        target="form-quiz"
      >
        <Heading class="Quiz__heading" v-if="currentStep === `starter`" v-bind="$props" />     
        <div class="Quiz__body-text" v-if="currentStep === `starter`" v-html="body_text" />
        <button v-if="currentStep === `starter` && cta !== ``" :class="`Quiz__startButton Button Button__${cta_style}`" @click="startQuiz">{{ cta }}</button>
        <div class="Quiz__disclaimer" v-if="currentStep === `starter`" v-html="disclaimer_text" />
        
        <!-- <transition-group name="fade" mode="out-in"> -->
        <Question1 v-if="currentStep === `question1`" key="question1" />
        <Question2 v-if="currentStep === `question2`" key="question2" />
        <Question3 v-if="currentStep === `question3`" key="question3" />
        <Question4 v-if="currentStep === `question4`" key="question4" />
        <Question5 v-if="currentStep === `question5`" key="question5" />
        <Question6 v-if="currentStep === `question6`" key="question6" />
        <Question7 v-if="currentStep === `question7`" key="question7" />
        <Question8 v-if="currentStep === `question8`" key="question8" />
        <Question9 v-if="currentStep === `question9`" key="question9" />
        <Question10 v-if="currentStep === `question10`" key="question10" />        
        <QuizProduct
          v-if="currentStep === `kit`"
          key="kit" 
          option_type="list"
          :product_data_id="5574461685917" 
          :filmstrip="false" 
          :arrow_opacity="0"
        />
        
        <!-- </transition-group> -->

        <input type="hidden" name="q3_first_name" :value="getFirstName">
        <input type="hidden" name="q4_age" :value="getAge">
        <input type="hidden" name="q5_gender" :value="getGender">
        <input type="hidden" name="q10_focus" :value="getFocus">
        <input type="hidden" name="q12_family_member_age" :value="getFamilyMemberAge">
        <input type="hidden" name="q14_symptoms[]" :value="getSymptoms">
        <input type="hidden" name="q16_temperature" :value="getTemperature">
        <input type="hidden" name="q37_symptomOnset" :value="getSymptomOnset">
        <input type="hidden" name="q38_symptomDuration" :value="getSymptomDuration">
        <input type="hidden" name="q39_familySymptom" :value="getFamilySymptomOnset">
        <input type="hidden" name="q40_familySymptom40" :value="getFamilySymptomDuration">
      </Form>
    </Overlay>    
  </Section>
</template>

<script src="./Quiz.ts"></script>
<style src="./Quiz.scss"></style>

