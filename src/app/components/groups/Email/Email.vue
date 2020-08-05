<template>
  <div class="Quiz__slide Email">
    <div class="Quiz__content">
      <h3>Thank you for completing our survey! <br> Please add in your email below and you could be randomly selected to receive a Cold & Flu Essentials Kit once we launch!</h3>
      <Input 
        name="q35_email" 
        :label="`general.newsletter_form.email_placeholder` | t" 
        autocorrect="off"
        autocapitalize="off"
        spellcheck="false"
        rules="email" 
        design="legacy"
        placeholder="Email address" 
      />   
    </div>
  </div>
</template>

<script src="./Email.ts"></script>
<style src="./Email.scss"></style>
