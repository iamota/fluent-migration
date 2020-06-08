<template>
  <div class="Email">
    <h3>Provide us with your email and we’ll send you updates on when our home testing kit will be available. In return, you could be selected to receive a complimentary shipment of one of our first 1,000 kits!</h3>
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
</template>

<script src="./Email.ts"></script>
<style src="./Email.scss"></style>
