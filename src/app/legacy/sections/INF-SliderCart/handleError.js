export default function(XHR) {
  // Need to do this for real later
  if (XHR.responseJSON && XHR.responseJSON.message && XHR.responseJSON.description) {
    window.toastr.error(XHR.responseJSON.description, XHR.responseJSON.message);
  }
}