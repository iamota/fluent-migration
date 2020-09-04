<template>
  <div class="QuizTemp" :class="cssClass">
    <div class="Slider">
      <Radio 
        name="temperature" 
        label="98.5º F and under" 
        value="t1"
        inline 
        checked 
      />
      <Radio 
        name="temperature" 
        label="98.6 – 100.3º F" 
        value="t2" 
        inline
      /> 
      <Radio 
        name="temperature" 
        label="100.4 – 102.9º F" 
        value="t3"
        inline 
        checked 
      />
    </div> 
  </div>
</template>

<script src="./QuizTemp.ts"></script>
<style src="./QuizTemp.scss"></style>
