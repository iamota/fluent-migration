const FormIframe = () => {
  // the data selector isn't necessary for this logic, but we don't want to hijack people's forms that already have scripts
  $(document).on('submit', 'form[target][data-form-with-iframe]', (e) => {
    const $form = $(e.currentTarget);
    const $placeholder = $(`[data-placeholder-form="${$form.attr('target')}"]`);
    const iframe_name = $form.attr('target');
    const $iframe = $(`iframe[name="${iframe_name}"]`);

    if ($iframe.length === 0) { return; }

    $iframe.one('load', () => {
      const $forms = $form.add($placeholder);
      $forms.addClass('Form--submitted');
      $forms.find('input[type="submit"]').attr('disabled', 'disabled');
      $form.find('input[type="email"]').blur();
    });
  });
};

export {
  FormIframe,
}; 