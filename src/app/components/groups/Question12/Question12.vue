<template>
  <div class="Quiz__slide Question12">
    <div class="Quiz__content">
      <h3>What was your highest temperature measured?</h3>
      <div class="Slider">
        <Radio 
          name="temperature" 
          label="Below 98.6º F" 
          value="Normal"
          inline 
          checked 
        />
        <Radio 
          name="temperature" 
          label="98.6 – 100.3º F" 
          value="Elevated" 
          inline
        /> 
        <Radio 
          name="temperature" 
          label="100.4 – 102.9º F" 
          value="Low fever"
          inline 
          checked 
        />
        <Radio 
          name="temperature" 
          label="Greater than 103º F" 
          value="High fever" 
          inline
        />
      </div> 
    </div>
    <div class="Quiz__buttons">
      <button type="button" :class="`Button Button__Primary`" @click="back">back</button>
      <button :class="`Button Button__Primary`" @click="next">continue</button>
    </div>
  </div>
</template>

<script src="./Question12.ts"></script>
<style src="./Question12.scss"></style>
