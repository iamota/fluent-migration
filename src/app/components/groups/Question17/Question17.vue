<template>
  <div class="Question17">
    <h4>Thank you for helping us better understand your cold and flu experiences. We have just one more question.</h4>
    <h3>How interested would you be in an at-home cold/flu service that includes:</h3>
    <ul>
      <li>An at-home flu test kit with immediate results </li>
      <li>A video consultation with a doctor</li>
      <li>The right medicines delivered to your door</li>
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
    <button :class="`Button Button__Primary`" @click="back">back</button>
    <button :class="`Button Button__Primary`" @click="next">continue</button>
  </div>
</template>

<script src="./Question17.ts"></script>
<style src="./Question17.scss"></style>
