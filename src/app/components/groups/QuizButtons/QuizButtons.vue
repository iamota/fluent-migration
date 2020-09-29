<template>
  <div class="QuizButtons">
    <Button type="secondary" @click.native="back">Back</Button>
    <Button 
      :class="{ 'noHover': disabled }" 
      :disabled="disabled"
      @click.native="next"
    >
      <template v-if="loading">
        <span :style="{visibility: 'hidden', fontSize: 0, position: 'absolute'}">Loading</span> <Loader size="22" color="white" />
      </template>
      <template v-else>
        Continue
      </template>
    </Button>
  </div>
</template>

<script src="./QuizButtons.ts"></script>
<style src="./QuizButtons.scss"></style>
