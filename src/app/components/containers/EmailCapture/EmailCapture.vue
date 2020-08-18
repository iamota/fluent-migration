<template>
  <Section v-bind="$props" :css_variables="cssVariables">
    <Heading v-bind="$props" class="EmailCapture__heading" />     

    <div class="EmailCapture">
      <Form 
        id="201555005195045--B"
        action="https://manage.kmail-lists.com/subscriptions/subscribe"
        method="POST" 
        name="form_201555005195045" 
        target="form-newsletter"
        class="EmailCapture__form"
      >
        <div :class="placement_class">
          <input type="hidden" name="g" value="SypgQu">
          <Input 
            name="$email" 
            :label="`general.newsletter_form.email_placeholder` | t" 
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
        </div>
      </Form>
    </div>
  </Section>
</template>

<script src="./EmailCapture.ts"></script>
<style src="./EmailCapture.scss"></style>
