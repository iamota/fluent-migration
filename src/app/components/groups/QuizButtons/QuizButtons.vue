<template>
  <div class="QuizButtons">
    <Button type="secondary" @click.native="back">Back</Button>
    <Button 
      :class="{ 'noHover': disabled }" 
      :disabled="disabled"
      @click.native="next"
    >
      Continue
    </Button>
  </div>
</template>

<script src="./QuizButtons.ts"></script>
<style src="./QuizButtons.scss"></style>
