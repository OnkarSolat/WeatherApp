module.exports = function querySelectorContainsNode(selector, node) {
  var candidates = document.querySelectorAll(selector);
  var i;
  var l = candidates.length;
  for (i = 0; i < l; i++) {
    if (candidates[i] === node || candidates[i].contains(node)) {
      return true;
    }
  }
  return false;
};
