<template>
  <div class="Quiz__slide Question16 Radio--longtext">
    <div class="Quiz__content">
      <h3 v-if="isMyself">Were you given the following over the phone or internet (telemedicine, email, video, patient portal, etc)?</h3> 
      <h3 v-if="!isMyself">Was your family member given the following over the phone or internet (telemedicine, email, video, patient portal, etc)?</h3>   
      <div>
        <p>Recommendation for an in-person flu test</p>
        <div class="Radio__group">
          <Radio 
            name="flu_test_online" 
            label="Yes" 
            value="yes"
            inline 
          />
          <Radio 
            name="flu_test_online" 
            label="No" 
            value="no" 
            inline
          /> 
          <Radio 
            name="flu_test_online" 
            label="Don't Remember" 
            value="Don't Remember" 
            inline
          /> 
        </div>
        <transition name="slide-fade">
          <div v-if="isFluTestYes" class="ExtraQuestion">
            <p>{{ getTestCopy }}</p>
            <div class="Radio__group">
              <Radio 
                name="flu_test_purchase_online" 
                label="Yes" 
                value="yes"
                inline 
              />
              <Radio 
                name="flu_test_purchase_online" 
                label="No" 
                value="no" 
                inline
              /> 
              <Radio 
                name="flu_test_purchase_online" 
                label="Don't Remember" 
                value="Don't Remember" 
                inline
              /> 
            </div>
          </div>
        </transition>
      </div>
      <div>
        <p>Prescription for an antiviral (TAMIFLU®, RELENZA®)</p>
        <div class="Radio__group">
          <Radio 
            name="antiviral_prescription_online" 
            label="Yes" 
            value="yes"
            inline 
          />
          <Radio 
            name="antiviral_prescription_online" 
            label="No" 
            value="no" 
            inline
          /> 
          <Radio 
            name="antiviral_prescription_online" 
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
            name="antibiotic_prescription_online" 
            label="Yes" 
            value="yes"
            inline 
          />
          <Radio 
            name="antibiotic_prescription_online" 
            label="No" 
            value="no" 
            inline
          /> 
          <Radio 
            name="antibiotic_prescription_online" 
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
            name="fever_reducer_online" 
            label="Yes" 
            value="yes"
            inline 
          />
          <Radio 
            name="fever_reducer_online" 
            label="No" 
            value="no" 
            inline
          /> 
          <Radio 
            name="fever_reducer_online" 
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
                name="fever_reducer_purchase_online" 
                label="Yes" 
                value="yes"
                inline 
              />
              <Radio 
                name="fever_reducer_purchase_online" 
                label="No" 
                value="no" 
                inline
              /> 
              <Radio 
                name="fever_reducer_purchase_online" 
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
            name="cold_medicine_online" 
            label="Yes" 
            value="yes"
            inline 
          />
          <Radio 
            name="cold_medicine_online" 
            label="No" 
            value="no" 
            inline
          /> 
          <Radio 
            name="cold_medicine_online" 
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
                name="cold_medicine_purchase_online" 
                label="Yes" 
                value="yes"
                inline 
              />
              <Radio 
                name="cold_medicine_purchase_online" 
                label="No" 
                value="no" 
                inline
              /> 
              <Radio 
                name="cold_medicine_purchase_online" 
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

<script src="./Question16.ts"></script>
<style src="./Question16.scss"></style>
