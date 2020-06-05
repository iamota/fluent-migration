<template>
  <div class="Question16 Radio--longtext">
    <h3 v-if="isMyself">Were you given the following over the phone or internet?</h3> 
    <h3 v-if="!isMyself">Was your family member given the following over the phone or internet?</h3>   
    <div>
      <p>A recommendation for an in-person flu test</p>
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
          <p>Did you get the test?</p>
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
      <p>A Prescription for an Antiviral (TAMIFLU®, RELENZA®)</p>
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
      <p>A Prescription for an Antibiotic</p>
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
      <p>A recommendation for an Over-the-counter fever reducer</p>
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
          <p>Did you purchase?</p>
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
      <p>A recommendation for an Over-the-Counter cold & flu medicine</p>
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
          <p>Did you purchase?</p>
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
</template>

<script src="./Question16.ts"></script>
<style src="./Question16.scss"></style>
