export default (el) => {
  if (!el) { return false; }
  const bounds = el.getBoundingClientRect();
  return {
    left: bounds.left + window.pageXOffset,
    top: bounds.top + window.pageYOffset,
  };
};