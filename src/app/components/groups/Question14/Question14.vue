<template>
  <div class="Quiz__slide Question14 Radio--longtext">
    <div class="Quiz__content">
      <h3 v-if="isMyself">Were you given the following during your visit?</h3>   
      <h3 v-if="!isMyself">Was your family member given the following during their visit?</h3>  
      <div>
        <p>Flu test</p>
        <div class="Radio__group">
          <Radio 
            name="flu_test" 
            label="Yes" 
            value="yes"
            inline 
          />
          <Radio 
            name="flu_test" 
            label="No" 
            value="no" 
            inline
          /> 
          <Radio 
            name="flu_test" 
            label="Don't Remember" 
            value="Don't Remember" 
            inline
          /> 
        </div>
      </div>
      <div>
        <p>Prescription for an antiviral (TAMIFLU®, RELENZA®)</p>
        <div class="Radio__group">
          <Radio 
            name="antiviral_prescription" 
            label="Yes" 
            value="yes"
            inline 
          />
          <Radio 
            name="antiviral_prescription" 
            label="No" 
            value="no" 
            inline
          /> 
          <Radio 
            name="antiviral_prescription" 
            label="Don't Remember" 
            value="Don't Remember" 
            inline
          /> 
        </div>
      </div>
      <div>
        <p>Prescription for an antibiotic</p>
        <div class="Radio__group">
          <Radio 
            name="antibiotic_prescription" 
            label="Yes" 
            value="yes"
            inline 
          />
          <Radio 
            name="antibiotic_prescription" 
            label="No" 
            value="no" 
            inline
          /> 
          <Radio 
            name="antibiotic_prescription" 
            label="Don't Remember" 
            value="Don't Remember" 
            inline
          /> 
        </div>
      </div>
      <div>
        <p>Recommendation for an over-the-counter fever reducer</p>
        <div class="Radio__group">
          <Radio 
            name="fever_reducer" 
            label="Yes" 
            value="yes"
            inline 
          />
          <Radio 
            name="fever_reducer" 
            label="No" 
            value="no" 
            inline
          /> 
          <Radio 
            name="fever_reducer" 
            label="Don't Remember" 
            value="Don't Remember" 
            inline
          /> 
        </div>
        <transition name="slide-fade">
          <div v-if="isFeverReducerYes" class="ExtraQuestion">
            <p>{{ purchaseCopy }}</p>
            <div class="Radio__group">
              <Radio 
                name="fever_reducer_purchase" 
                label="Yes" 
                value="yes"
                inline 
              />
              <Radio 
                name="fever_reducer_purchase" 
                label="No" 
                value="no" 
                inline
              /> 
              <Radio 
                name="fever_reducer_purchase" 
                label="Don't Remember" 
                value="Don't Remember" 
                inline
              /> 
            </div>
          </div>
        </transition>
      </div>
      <div>
        <p>Recommendation for an over-the-counter cold & flu medicine</p>
        <div class="Radio__group">
          <Radio 
            name="cold_medicine" 
            label="Yes" 
            value="yes"
            inline 
          />
          <Radio 
            name="cold_medicine" 
            label="No" 
            value="no" 
            inline
          /> 
          <Radio 
            name="cold_medicine" 
            label="Don't Remember" 
            value="Don't Remember" 
            inline
          /> 
        </div>
        <transition name="slide-fade">
          <div v-if="isColdMedicineYes" class="ExtraQuestion">
            <p>{{ purchaseCopy }}</p>
            <div class="Radio__group">
              <Radio 
                name="cold_medicine_purchase" 
                label="Yes" 
                value="yes"
                inline 
              />
              <Radio 
                name="cold_medicine_purchase" 
                label="No" 
                value="no" 
                inline
              /> 
              <Radio 
                name="cold_medicine_purchase" 
                label="Don't Remember" 
                value="Don't Remember" 
                inline
              /> 
            </div>
          </div>
        </transition>
      </div>
    </div>
    <div class="Quiz__buttons">
      <a :class="`Button Button__Primary`" @click="back">back</a>
      <a 
        class="Button Button__Primary" 
        :class="{ 'noHover': isDisabled }" 
        :disabled="isDisabled" 
        @click="next"
      >
        continue
      </a>
    </div>
  </div>
</template>

<script src="./Question14.ts"></script>
<style src="./Question14.scss"></style>
