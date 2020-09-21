import toastr from 'toastr';

toastr.options = {
  closeButton: false,
  debug: false,
  newestOnTop: false,
  progressBar: false,
  positionClass: window.theme.toastr.positionClass,
  preventDuplicates: false,
  onclick: null,
  showDuration: window.theme.toastr.showDuration,
  hideDuration: window.theme.toastr.hideDuration,
  timeOut: window.theme.toastr.timeOut,
  extendedTimeOut: window.theme.toastr.extendedTimeOut,
  showEasing: 'swing',
  hideEasing: 'linear',
  showMethod: 'fadeIn',
  hideMethod: 'fadeOut',
};

window.toastr = toastr;