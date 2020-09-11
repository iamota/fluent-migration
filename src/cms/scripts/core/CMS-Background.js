import { getVideoEmbed } from 'infinite/cms/scripts/core/handleVideos';

const getVideoHtml = (media, video_embed, { module_type, module_index, submodule_index, autoplay, display_mute, scale }, module_name) => {
  if (module_type === `media`) {
    return `
      <div class="Module-Bg__Video RteVideo"
        data-rte-video
        data-video-id="${video_embed.id}"
        data-video-type="${video_embed.type}"
        >
        <div class="RteVideo__cover RteVideo__cover--active">
          <div class="RteVideo__cover-image" style="background-image:url('${media.video_cover}');"></div>
          <div class="PlayButton PlayButton--active" data-video-play-button>play</div>
        </div>
        <div id="Module-Bg__Video--${module_index}--${submodule_index}" data-video-player></div>
      </div>
      <div class="BackgroundControls" data-video-controls data-display="play">
        <div class="BackgroundControls__icon" data-video-muted="false"><i class="${theme.fontawesome.type} fa-volume-up"></i></div>
        <div class="BackgroundControls__icon" data-video-paused="false"><i class="${theme.fontawesome.type} fa-pause"></i></div>
      </div>
    `;
  }

  return `
    <div class="Module-Bg__Video BackgroundVideo"
      data-background-video
      data-aspect-ratio="${media.aspect_ratio}"
      data-crop="${!scale}"
      data-video-type="${video_embed.type}"
      data-video-id="${video_embed.id}"
      >
      ${video_embed.type === `vimeo` ? `<script src="https://vimeo.com/api/v2/video/${video_embed.id}.json?callback=injectVimeoPoster" type="text/javascript"></script>` : ``}
      <div class="BackgroundVideo__poster" style="background-image: url('${media.video_cover ? media.video_cover : ``}');" data-poster-for="${video_embed.id}" data-video-poster="${video_embed.type}"></div>
      <div id="Module-Bg--${module_type}--${module_name}-${module_index}--${submodule_index}__Player" class="BackgroundVideo__player" data-video-player="true" data-manually-paused="false"></div>
    </div>
    <div class="BackgroundControls BackgroundControls--left" data-video-controls data-display="play">
      ${media.muted || display_mute ? `<div class="BackgroundControls__icon" data-video-muted="true"><i class="${theme.fontawesome.type} fa-volume-off"></i></div>` : ``}
      <div class="BackgroundControls__icon" data-video-paused="${!autoplay}"><i class="${theme.fontawesome.type} fa-pause"></i></div>
    </div>
  `;
};

export default (background, module_name, module_index, submodule_index, video_option_overrides, extra_class_name) => {
  if (!background) { return ``; }

  const video_options = {
    module_type: `background`,
    module_index,
    submodule_index,
    display_mute: false,
    autoplay: true,
    scale: false,
    ...video_option_overrides,
  };
  const { overlay } = background;

  let video_embed = false;
  let background_html = ``;
  let background_styles = ``;

  switch (background.type) {
    case `image`:
      if (background.background_image) {
        const will_hide_mobile = background[`background_image--mobile`] ? ` data-image-hide-mobile` : ``;
        background_html += `<div class="Module__Bg--full" ${will_hide_mobile} data-bg-image-desktop data-type="image"></div>`;
        background_styles += `
        .rte ${extra_class_name ? extra_class_name : ``} #Module-${module_name}--${module_index}--${submodule_index}__Bg [data-bg-image-desktop] {
          background-image: url(${background.background_image});
          background-size: ${background.background_size};
        }`;
        if (background[`background_image--mobile`]) {
          background_html += `<div class="Module__Bg--full" data-image-hide-desktop data-bg-image-mobile data-type="image"></div>`;
          background_styles += `
          .rte ${extra_class_name ? extra_class_name : ``} #Module-${module_name}--${module_index}--${submodule_index}__Bg [data-bg-image-mobile] {
            background-image: url(${background[`background_image--mobile`]});
            background-size: cover;
          }`;
        }
      }
      break;
    case `color`:
      background_html += `<div class="Module__Bg--full" data-type="color"></div>`;
      background_styles += `.rte ${extra_class_name ? extra_class_name : ``} #Module-${module_name}--${module_index}--${submodule_index}__Bg .Module__Bg--full { background-color: ${background.background_color}; }`;
      break;
    case `dual`:
      if (background.background_color_left) {
        background_html += `<div class="Module__Bg--split" data-split="left" data-type="color"></div>`;
        background_styles += `.rte ${extra_class_name ? extra_class_name : ``} #Module-${module_name}--${module_index}--${submodule_index}__Bg .Module__Bg--split[data-split="left"] { background-color: ${background.background_color_left}; }`;
      }
      if (background.background_color_right) {
        background_html += `<div class="Module__Bg--split" data-split="right" data-type="color"></div>`;
        background_styles += `.rte ${extra_class_name ? extra_class_name : ``} #Module-${module_name}--${module_index}--${submodule_index}__Bg .Module__Bg--split[data-split="right"] { background-color: ${background.background_color_right}; }`;
      }
      if (background.has_background_image && background.background_image) {
        const will_hide_mobile = background[`background_image--mobile`] ? ` data-image-hide-mobile` : ``;
        background_html += `<div class="Module__Bg--full" ${will_hide_mobile} data-bg-image-desktop data-type="image"></div>`;
        background_styles += `
        .rte ${extra_class_name ? extra_class_name : ``} #Module-${module_name}--${module_index}--${submodule_index}__Bg [data-bg-image-desktop] {
          background-image: url(${background.background_image});
          background-size: auto 100%;
        }`;
        if (background[`background_image--mobile`]) {
          background_html += `<div class="Module__Bg--full" data-image-hide-desktop data-bg-image-mobile data-type="image"></div>`;
          background_styles += `
          .rte ${extra_class_name ? extra_class_name : ``} #Module-${module_name}--${module_index}--${submodule_index}__Bg [data-bg-image-mobile] {
            background-image: url(${background[`background_image--mobile`]});
            background-size: cover;
          }`;
        }
      }
      break;
    case `video`:
      video_embed = getVideoEmbed(background.video, background.video_type);
      background_html = getVideoHtml(background, video_embed, video_options, module_name);
      break;
    case `gradient`:
      background_html += `<div class="Module__Bg--full" data-type="gradient"></div>`;
      background_styles += `.rte ${extra_class_name ? extra_class_name : ``} #Module-${module_name}--${module_index}--${submodule_index}__Bg .Module__Bg--full {
        background: ${background.background_gradient_color_start};
        background: -moz-linear-gradient(${background.background_gradient_angle}deg, ${background.background_gradient_color_start}, ${background.background_gradient_color_end});
        background: -webkit-linear-gradient(${background.background_gradient_angle}deg, ${background.background_gradient_color_start}, ${background.background_gradient_color_end});
        background: linear-gradient(${background.background_gradient_angle}deg, ${background.background_gradient_color_start}, ${background.background_gradient_color_end});
      }
      `;
      break;
    default:
      return ``;
  }

  if (overlay !== ``) {
    background_html = `
      ${background_html}
      <div class="Module-${module_name}__Overlay Overlay__${overlay}"></div>
    `;
  }
  
  // Extra background styles, eg. insets?
  background_styles += `
    .rte ${extra_class_name ? extra_class_name : ``} #Module-${module_name}--${module_index}--${submodule_index}__Bg {
      ${video_options.scale 
        ? `position: relative;`
        : ``
      }
    }
  `;

  const html = `
    <div id="Module-${module_name}--${module_index}--${submodule_index}__Bg" data-module-bg="${background.type}">
      ${background_html}
      <style>
        ${background_styles}
      </style>
    </div>
  `;

  return html;
};