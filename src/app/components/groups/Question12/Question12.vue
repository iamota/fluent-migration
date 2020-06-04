<template>
  <div class="Question12">
    <h3>What was your highest temperature measured?</h3>
    <div class="Slider">
      <Radio 
        name="temperature" 
        label="Below 98.6º F" 
        value="normal"
        inline 
        checked 
      />
      <Radio 
        name="temperature" 
        label="98.6 – 100.3º F" 
        value="elevated" 
        inline
      /> 
      <Radio 
        name="temperature" 
        label="100.4 – 102.9º F" 
        value="low-fever"
        inline 
        checked 
      />
      <Radio 
        name="temperature" 
        label="Greater than 103º F" 
        value="high-fever" 
        inline
      />
    </div> 
    <button :class="`Button Button__Primary`" @click="back">back</button>
    <button :class="`Button Button__Primary`" @click="next">continue</button>
  </div>
</template>

<script src="./Question12.ts"></script>
<style src="./Question12.scss"></style>
