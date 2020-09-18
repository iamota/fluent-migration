export default (settings, alignment_desktop, alignment_mobile) => {   
  const { 
    heading_size,
    heading_text,
    heading_color,
    pre_heading_size,
    pre_heading_text,
    pre_heading_color,
    sub_heading_size,
    sub_heading_text,
    sub_heading_color,
  } = settings.headings;
  const alignment_d = settings.text_alignment || alignment_desktop || 'center';
  const alignment_m = settings['text_alignment--mobile'] || alignment_mobile || 'center';

  const html = `
    <div class="textAlignment__${alignment_d} textAlignment--mobile__${alignment_m}">
      ${pre_heading_text === '' ? '' : `<h3 class="${pre_heading_size}" style="color: ${pre_heading_color};">${pre_heading_text}</h3>`}
      ${heading_text === '' ? '' : `<h2 class="${heading_size}" style="color: ${heading_color};">${heading_text}</h2>`}
      ${sub_heading_text === '' ? '' : `<h4 class="${sub_heading_size}" style="color: ${sub_heading_color};">${sub_heading_text}</h4>`}
    </div>
  `;

  return html; 
};