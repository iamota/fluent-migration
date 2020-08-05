<template>
  <div class="Quiz__slide Question17">
    <div class="Quiz__content">
      <h3>One last question...<br>How interested would you be in an at-home testing service that includes:</h3>
      <ul>
        <li>A Bluetooth-enabled nasal swab reader to test for cold or flu</li>
        <li>Test results sent privately and securely to your mobile device within minutes</li>
        <li>Home delivery of the medicine you need within 24 hours</li>
      </ul>
      <div class="Slider">
        <Radio 
          name="interest_product" 
          label="Definitely not interested" 
          value="Definitely not interested"
          inline 
        />
        <Radio 
          name="interest_product" 
          label="Probably not interested" 
          value="Probably not interested" 
          inline
        /> 
        <Radio 
          name="interest_product" 
          label="Unsure" 
          value="Unsure"
          inline 
          checked 
        />
        <Radio 
          name="interest_product" 
          label="Somewhat interested" 
          value="Somewhat interested" 
          inline
        />
        <Radio 
          name="interest_product" 
          label="Definitely interested" 
          value="Definitely interested" 
          inline
        />
      </div> 
    </div>
    <div class="Quiz__buttons">
      <a :class="`Button Button__Primary`" @click="back">back</a>
      <a :class="`Button Button__Primary`" @click="next">continue</a>
    </div>
  </div>
</template>

<script src="./Question17.ts"></script>
<style src="./Question17.scss"></style>
