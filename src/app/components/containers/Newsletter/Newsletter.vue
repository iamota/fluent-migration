<template>
  <Section v-bind="$props" :css_variables="cssVariables">
    <img :src="background_image_mobile">
    <Overlay v-bind="$props">
      <Heading v-bind="$props" class="Newsletter__heading" />     
      
      <Form
        id="201555005195045"
        action="https://manage.kmail-lists.com/subscriptions/subscribe"
        method="POST" 
        class="Newsletter__form"
        name="form_201555005195045" 
        target="form-newsletter"
      >
        <div :class="placement_class">
          <input type="hidden" name="g" value="SypgQu"> 
          <Input 
            name="$email" 
            :label="`general.newsletter_form.email_placeholder` | t" 
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            rules="email" 
          />
          <div v-if="formSubmitted" class="Form__successMessage">{{ `general.newsletter_form.confirmation` | t }}</div>          
          <div class="Form__submit-group">
            <Button 
              class="Button Button--primary" 
              :class="{ 'noHover': formSubmitted }" 
              name="commit" 
              submit
              @click.native="submitForm"
            >
              <span>{{ submit_label_with_default }}</span>
            </Button>
          </div>
          <!-- <a class="Newsletter__terms" href="">TERMS & CONDITIONS</a> -->
        </div>
      </Form>      
    </Overlay>
  </Section>
</template>

<script src="./Newsletter.ts"></script>
<style src="./Newsletter.scss"></style>