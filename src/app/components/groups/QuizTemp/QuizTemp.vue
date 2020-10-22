<template>
  <div class="QuizTemp">
    <p>What is your temperature?</p>
    <div class="Slider">
      <Radio 
        name="temperature" 
        label="96 - 99.4º F" 
        value="t3"
        inline 
        checked 
      />
      <Radio 
        name="temperature" 
        label="99.5 – 100.3º F" 
        value="t2" 
        inline
      /> 
      <Radio 
        name="temperature" 
        label="100.4º F +" 
        value="t1"
        inline 
        checked 
      />
    </div> 
  </div>
</template>

<script src="./QuizTemp.ts"></script>
<style src="./QuizTemp.scss"></style>
