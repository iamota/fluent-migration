<template>
  <Section v-bind="$props" :css_variables="cssVariables">
    <img :src="background_image_mobile">
    <Overlay v-bind="$props">
      <Heading v-bind="$props" class="Newsletter__heading" />      
      <Form
        :id="form_id"
        action="#"
        method="post" 
        class="Newsletter__form"
      >
        <Input type="hidden" name="contact[tags]" value="newsletter" />
        <div :class="placement_class">
          <Input 
            name="contact[email]" 
            :label="`general.newsletter_form.email_placeholder` | t" 
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            rules="email" 
          />
          <template v-if="success_from_shopify">
            <div>{{ `general.newsletter_form.confirmation` | t }}</div>
          </template>
          <div class="Form__submit-group">
            <Button class="Button Button--primary" name="commit" submit>
              <Loader v-if="show_loader" color="white" size="24" />
              <span v-else>{{ submit_label_with_default }}</span>
            </Button>
          </div>
          <a class="Newsletter__terms" href="">TERMS & CONDITIONS</a>
        </div>
      </Form>
    </Overlay>
  </Section>
</template>

<script src="./Newsletter.ts"></script>
<style src="./Newsletter.scss"></style>