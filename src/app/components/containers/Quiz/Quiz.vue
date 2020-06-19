<template>
  <Section v-bind="$props" :css_variables="cssVariables">
    <ProgressBar />
    <Overlay v-bind="$props">
      <Form
        id="quizForm"        
        action="https://submit.jotform.com/submit/201556818723055/"
        name="form_201556818723055"
        method="post" 
        class="Quiz__form"
        :validators="validators"
        target="form-quiz"
      >
        <Heading v-if="currentStep === `starter`" v-bind="$props" />     
        <button v-if="currentStep === `starter` && cta !== ``" :class="`Quiz__startButton Button Button__${cta_style}`" @click="startQuiz">{{ cta }}</button>
        
        <transition-group name="fade" mode="out-in">
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
          <!-- <Question9C v-if="currentStep === `question9c`" key="question9c" /> -->
          <Question10 v-if="currentStep === `question10`" key="question10" />
          <Question11 v-if="currentStep === `question11`" key="question11" />
          <Question12 v-if="currentStep === `question12`" key="question12" />
          <Question13 v-if="currentStep === `question13`" key="question13" />
          <Question14 v-if="currentStep === `question14`" key="question14" />
          <Question15 v-if="currentStep === `question15`" key="question15" />
          <Question16 v-if="currentStep === `question16`" key="question16" />
          <Question17 v-if="currentStep === `question17`" key="question17" />
          <Email v-if="currentStep === `email`" key="email" />
          <div v-if="currentStep === `email`" key="email2" class="Quiz__buttons">
            <button class="Button Button__Primary" @click="back">back</button>
            <Button 
              class="Button Button--primary" 
              :class="{ 'noHover': isDisabled }" 
              :disabled="isDisabled" 
              submit
            >
              <span v-if="!submited">Keep Me Posted</span>
              <span v-if="submited">Sending...</span>
            </Button>
          </div>
        </transition-group>

        <input type="hidden" name="q3_first_name" :value="getFirstName">
        <input type="hidden" name="q4_age" :value="getage">
        <input type="hidden" name="q5_gender" :value="getGender">
        <input type="hidden" name="q6_household_adults" :value="getHouseholdAdults">
        <input type="hidden" name="q7_household_children" :value="getHouseholdChildren">
        <input type="hidden" name="q8_zip_code" :value="getZipCode">
        <input type="hidden" name="q9_times_sick" :value="getTimesSick">
        <input type="hidden" name="q10_focus" :value="getFocus">
        <input type="hidden" name="q11_vaccine" :value="getVaccine">
        <input type="hidden" name="q12_family_member_age" :value="getFamilyMemberAge">
        <input type="hidden" name="q13_family_gender" :value="getFamilyGender">
        <input type="hidden" name="q14_symptoms[]" :value="getSymptoms">
        <input type="hidden" name="q15_take_temperature]" :value="getTakeTemperature">
        <input type="hidden" name="q16_temperature" :value="getTemperature">
        <input type="hidden" name="q17_visit" :value="getVisit">
        <input type="hidden" name="q18_flu_test" :value="getFluTest">
        <input type="hidden" name="q19_antiviral_prescription" :value="getAntiviralPrescription">
        <input type="hidden" name="q20_antibiotic_prescription" :value="getAntibioticPrescription">
        <input type="hidden" name="q21_fever_reducer" :value="getFeverReducer">
        <input type="hidden" name="q22_fever_reducer_purchase" :value="getFeverReducerPurchase">
        <input type="hidden" name="q23_cold_medicine" :value="getColdMedicine">
        <input type="hidden" name="q24_cold_medicine_purchase" :value="getColdMedicinePurchase">
        <input type="hidden" name="q25_contact_online" :value="getContactOnline">
        <input type="hidden" name="q26_flu_test_online" :value="getFluTestOnline">
        <input type="hidden" name="q27_flu_test_purchase_online" :value="getFluTestPurchaseOnline">
        <input type="hidden" name="q28_antiviral_prescription_online" :value="getAntiviralPrescriptionOnline">
        <input type="hidden" name="q29_antibiotic_prescription_online" :value="getAntibioticPrescriptionOnline">
        <input type="hidden" name="q30_fever_reducer_online" :value="getFeverReducerOnline">
        <input type="hidden" name="q31_fever_reducer_purchase_online" :value="getFeverReducerPurchaseOnline">
        <input type="hidden" name="q32_cold_medicine_online" :value="getColdMedicineOnline">
        <input type="hidden" name="q33_cold_medicine_purchase_online" :value="getColdMedicinePurchaseOnline">
        <input type="hidden" name="q34_interest_product" :value="getInterestProduct">
      </Form>
    </Overlay>    
  </Section>
</template>

<script src="./Quiz.ts"></script>
<style src="./Quiz.scss"></style>

