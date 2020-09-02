<template>
  <div class="QuizButtons">
    <Button type="secondary" @click.native="back">back</Button>
    <Button 
      :class="{ 'noHover': disabled }" 
      :disabled="disabled"
      @click.native="next">continue</Button>
  </div>
</template>

<script src="./QuizButtons.ts"></script>
<style src="./QuizButtons.scss"></style>
